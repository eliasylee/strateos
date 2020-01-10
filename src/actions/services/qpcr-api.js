import * as data from './assets/qpcr-data.json'

export const getQPCR = id => new Promise((resolve) => resolve(data.default))
  // fetch('https://www.qpcr-data.com', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ id })
  // })
  //   .then(res => {
  //     return res
  //   })
  //   .catch(e => {
  //     // TODO handle error
  //   })
