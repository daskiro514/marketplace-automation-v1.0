import {
  CURRENT_PAGE_SET,
} from '../actions/types'

const initialState = {
  currentPage: 'dashboard',
}

const pageReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CURRENT_PAGE_SET: {
      return {
        ...state,
        currentPage: payload
      }
    }
    default:
      return state
  }
}

export default pageReducer