// Here is the import of the action type
import { ADD_MOVIE } from '../constants/action-types'

// Here is the export of the function tied to the action type
export const addMovie = movie => ({ type: ADD_MOVIE, payload: movie })