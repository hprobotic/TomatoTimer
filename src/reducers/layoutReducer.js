import { SIDEBAR_TOGGLE } from '../actions'

const initialState = {
  sidebar: {
    isShowing: false,
    showingItem: 'charts'
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SIDEBAR_TOGGLE:
      return {
        ...state,
        sidebar: {
          isShowing: !state.sidebar.isShowing,
          showingItem: action.payload.menuItem || state.sidebar.showingItem
        }
      }
    default:
      return state
  }
}
