import { GET_FEATURED_CHARACTERS, SEARCH_CHARACTERS, UPDATE_FAVOURITES } from './action-types/types';

export const getFeaturedChars = () => {
  return {
    type: GET_FEATURED_CHARACTERS
  }
}

export const search = () => {
  return {
    type: SEARCH_CHARACTERS
  }
}

export const updateFavourites = (fdata) => {
  return {
    type: UPDATE_FAVOURITES,
    fdata: fdata
  }
}

