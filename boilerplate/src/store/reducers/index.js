// Here import of the action type to tell the app what to do with such action type
import { ADD_USER } from "../../constants/action-types";

const initialState = 
{
    user: []
};

const rootReducer = (state = initialState, action) => 
{
    switch (action.type)
    {
        // Here we verify if its an "ADD_MOVIE" action type and do accordingly
        case ADD_USER:
            return { ...state, user: [...state.user, (action.payload)] }
        default:
            return state
    }
}

export default rootReducer