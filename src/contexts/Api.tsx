import { useEthers } from '@usedapp/core'
import { Api, defaultApi } from 'libs/api'
import { useTranslation } from 'next-i18next'
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState, useRef } from 'react'

const ApiContext = createContext<Api>(defaultApi)

export function ApiProvider({ children }: PropsWithChildren<object>) {
  const { i18n } = useTranslation()
  const { chainId } = useEthers()

  const api = useMemo(() => {
    if (!chainId) {
      return defaultApi
    }
    return new Api(chainId, i18n.resolvedLanguage)
  }, [chainId, i18n.resolvedLanguage])

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>
}

type ApiMethod = {
  [K in keyof Api]-?: Api[K] extends (...args: any[]) => Promise<any> ? K : never
}[keyof Api]

export const useApi = () => useContext(ApiContext)

export function useApiCall<M extends ApiMethod>(methodName: M, args: Parameters<Api[M]>, when: boolean, deps: any[]) {
  const api = useApi()
  const [controller, setController] = useState<AbortController | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Awaited<ReturnType<Api[M]>> | undefined>(undefined)
  const [err, setErr] = useState<Error | undefined>(undefined)
  const [trigger, setTrigger] = useState(0)
  const fetchRef = useRef<(() => void) | null>(null)

  fetchRef.current = useCallback(() => {
    if (controller) {
      controller.abort()
    }

    const newController = new AbortController()
    const cancelableApi = api.withAbortController(newController)
    const method = cancelableApi[methodName] as any

    setLoading(true)
    setController(newController)

    return method
      .call(cancelableApi, ...args)
      .then(setResult)
      .catch(setErr)
      .finally(() => setLoading(false))
  }, [api, controller, methodName, args])

  useEffect(() => {
    if (!when) {
      return
    }
    fetchRef.current?.()
  }, [when])

  return useMemo(
    () => ({
      loading,
      result,
      err,
      refetch: () => setTrigger(trigger + 1),
    }),
    [loading, result, err, trigger]
  )
}
