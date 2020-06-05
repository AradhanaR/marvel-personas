import { cloneDeep } from 'lodash';
import { GET_FEATURED_CHARACTERS, SEARCH_CHARACTERS, UPDATE_FAVOURITES } from '../actions/action-types/types';

const initState = {
  app: {
    locale: 'en'
  },
  featuredChars: [],
  searchList: [],
  favourites: []
};


const reducer = (state = cloneDeep(initState), action) => {

  switch (action.type) {
    case GET_FEATURED_CHARACTERS: {
      const newState = cloneDeep(state);
      return newState;
    }
    case SEARCH_CHARACTERS: {
      const newState = cloneDeep(state);
      return newState;
    }
    case UPDATE_FAVOURITES: {
      const newState = cloneDeep(state);
      return newState;
    }
    default:
      return state;
  }
}
export default reducer;