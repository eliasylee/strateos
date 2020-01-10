import { UPDATE_STATE } from '../constants/redux-constants'

export const updateState = payload => ({
  type: UPDATE_STATE,
  payload
})
