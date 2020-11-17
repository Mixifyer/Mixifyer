// Action Creator

const EDIT_SEARCH = 'EDIT_SEARCH'

export const updateSearchWord = searchWord => ({type: EDIT_SEARCH, searchWord})

//reducer
export default function(state = '', action) {
  switch (action.type) {
    case EDIT_SEARCH:
      return action.searchWord
    default:
      return state
  }
}
