// Here is the import of the action type
import { ADD_USER } from '../constants/action-types'

// Here is the export of the function tied to the action type
export const addUser = user => ({ type: ADD_USER, payload: user });