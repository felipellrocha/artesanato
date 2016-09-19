export const RECEIVE_AGGREGATIONS = 'RECEIVE_AGGREGATIONS'

export function receiveAggregations(data) {
  return {
    type: RECEIVE_AGGREGATIONS,
    data,
  }
}
