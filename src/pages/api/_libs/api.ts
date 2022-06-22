import { ChainId } from '@usedapp/core'
import axios from 'axios'

export function getApi(chainId: number) {
  // let baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT_MAINNET
  let baseURL = 'https://api.otterclam.finance/'
  if (chainId === ChainId.Mumbai) {
    baseURL = process.env.NEXT_PUBLIC_API_ENDPOINT_MUMBAI || ''
  }
  return axios.create({ baseURL })
}
