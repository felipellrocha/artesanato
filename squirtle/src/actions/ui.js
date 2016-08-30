export const RECEIVE_AUTH_TOKEN = 'RECEIVE_AUTH_TOKEN'

import ProfileNormalizer from 'data/profiles/normalizers'
import { normalize, arrayOf } from 'normalizr'

export const TOGGLE_ACCOUNT_DROPDOWN = 'TOGGLE_ACCOUNT_DROPDOWN'
export const TYPE_TEXTAREA = 'TYPE_TEXTAREA'

export function toggleAccountDropdown() {
  return {
    type: TOGGLE_ACCOUNT_DROPDOWN,
  }
}

export function typeTextarea(text) {
  return {
    type: TYPE_TEXTAREA,
    text,
  }
}
