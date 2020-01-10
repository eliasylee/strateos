import { getQPCR } from './services/qpcr-api'
import { formatQPCRData } from '../util/format-qpcr-data'
import { updateState } from './redux-actions'

export const fetchQPCRData = dispatch =>
  getQPCR()
    .then(data => formatQPCRData(data))
    .then(wells => dispatch(updateState({ wells })))
    .catch(e => {
      // TODO handle error
    })
