import noop from 'lodash/noop'
import { AdventureResultEvents, AdventureResultReward } from 'models/AdventureLocation'
import { AdventurePreview } from 'models/AdventurePreview'
import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useReducer } from 'react'
import { useAdventureLocation } from './AdventureLocations'

export enum AdventureUIActionType {
  OpenPopup,
  ClosePopup,
  SetPopupStep,
  LevelUp,
  DistributeAttributePoints,
}

export enum AdventurePopupStep {
  LocationInfo,
  PreviewOtto,
  ReadyToGo,
  Exploring,
  Result,
}

export type AdventureUIAction =
  | {
      type: AdventureUIActionType.OpenPopup
      data: {
        locationId: number
        popupStep: AdventurePopupStep
      }
    }
  | {
      type: AdventureUIActionType.ClosePopup
    }
  | {
      type: AdventureUIActionType.SetPopupStep
      data: AdventurePopupStep
    }
  | {
      type: AdventureUIActionType.LevelUp
      data?: {
        ottoId: string
        levelUp: AdventureResultEvents['level_up']
        rewards: AdventureResultReward
      }
    }
  | {
      type: AdventureUIActionType.DistributeAttributePoints
      data?: {
        ottoId: string
      }
    }

export interface AdventureUIState {
  selectedLocationId?: number
  popupOpened: boolean
  popupStep: AdventurePopupStep
  preview?: AdventurePreview
  levelUp?: {
    ottoId: string
    levelUp: AdventureResultEvents['level_up']
    rewards: AdventureResultReward
  }
  attributePoints?: {
    ottoId: string
  }
}

export interface AdventureUIStateDispatcher {
  (action: AdventureUIAction): void
}

export interface AdventureUIValue {
  state: AdventureUIState
  dispatch: AdventureUIStateDispatcher
}

const defaultValue: AdventureUIValue = {
  state: {
    popupOpened: false,
    popupStep: AdventurePopupStep.LocationInfo,
  },
  dispatch: noop,
}

const AdventureUIContext = createContext<AdventureUIValue>(defaultValue)

export const AdventureUIStateProvider = ({ children }: PropsWithChildren<object>) => {
  const [state, dispatch] = useReducer((state: AdventureUIState, action: AdventureUIAction) => {
    switch (action.type) {
      case AdventureUIActionType.OpenPopup:
        return {
          ...state,
          selectedLocationId: action.data.locationId,
          popupStep: action.data.popupStep,
          popupOpened: true,
        }
      case AdventureUIActionType.ClosePopup:
        return { ...state, popupOpened: false }
      case AdventureUIActionType.SetPopupStep:
        return { ...state, popupStep: action.data }
      case AdventureUIActionType.LevelUp:
        return { ...state, levelUp: action.data }
      case AdventureUIActionType.DistributeAttributePoints:
        return { ...state, attributePoints: action.data }
      default:
        return state
    }
  }, defaultValue.state)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return <AdventureUIContext.Provider value={value}>{children}</AdventureUIContext.Provider>
}

export const useAdventureUIState = () => useContext(AdventureUIContext)

export const useSelectedAdventureLocation = () => {
  const { state } = useAdventureUIState()
  return useAdventureLocation(state.selectedLocationId)
}

export const useCloseAdventurePopup = () => {
  const { dispatch } = useAdventureUIState()
  return useCallback(() => dispatch({ type: AdventureUIActionType.ClosePopup }), [dispatch])
}

export const useGoToAdventurePopupStep = () => {
  const { dispatch } = useAdventureUIState()
  return useCallback(
    (step: AdventurePopupStep) => dispatch({ type: AdventureUIActionType.SetPopupStep, data: step }),
    []
  )
}

export const useOpenAdventurePopup = () => {
  const { dispatch } = useAdventureUIState()
  return useCallback(
    (locationId: number, step: AdventurePopupStep) =>
      dispatch({ type: AdventureUIActionType.OpenPopup, data: { locationId, popupStep: step } }),
    [dispatch]
  )
}
