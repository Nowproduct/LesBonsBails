// Here import of the action type to tell the app what to do with such action type
import { ADD_MOVIE } from "../constants/action-types"

const initialState = 
{
    movies: []
};

const rootReducer = (state = initialState, action) => 
{
    switch (action.type)
    {
        // Here we verify if its an "ADD_MOVIE" action type and do accordingly
        case ADD_MOVIE:
            return { ...state, movies: [...state.movies, (action.payload)] }
        default:
            return state
    }
}

export default rootReducer