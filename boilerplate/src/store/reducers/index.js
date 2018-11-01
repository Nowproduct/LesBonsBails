// Here import of the action type to tell the app what to do with such action type
import * as actionsTypes from "../../constants/action-types";

const initialState = 
{
    user: []
};

const rootReducer = (state = initialState, action) => 
{
    switch (action.type)
    {
        // Here we verify if its an "ADD_MOVIE" action type and do accordingly
        case actionsTypes.ADD_USER:
            return { ...state, user: [(action.payload)] }
        default:
            return state
    }
}

export default rootReducer