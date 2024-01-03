import { ActionTypes } from "../constants/actionTypes"


export const bucketListReducer = (state={ goals:[] },action) => {
       switch(action.type) {
         case ActionTypes.GET_GOALS:
         return { loading:true, success:false, goals:[] };
         case ActionTypes.RETRIEVE_GOALS_SUCCESS:
         return {loading:false, success:true, goals: action.payload};
         case ActionTypes.RETRIEVE_GOALS_FAIL:
         return {loading:false, success:false, error: action.payload};
         default:
         return state;
       }
}

//using spread operator because we are adding new information which means we;ll have
//to make use of the state to change some information on the frontend. we need to make
//sure that the previous object is there and also the current object

export const addGoalReducer = (state={ },action) => {
       switch(action.type) {
         case ActionTypes.ADD_GOAL_REQUEST:
         return { loading:true, success:false };
         case ActionTypes.ADD_GOAL_SUCCESS:
         return {loading:false, success:true, ...state, goal: action.payload};
         case ActionTypes.ADD_GOAL_FAIL:
         return {loading:false, success:false, error: action.payload};
         case ActionTypes.ADD_GOAL_RESET:
         return {};
         default:
         return state;
       }
}


export const deleteGoalReducer = (state={ },action) => {
       switch(action.type) {
         case ActionTypes.DELETE_GOAL_REQUEST:
         return { loading:true, success:false };
         case ActionTypes.DELETE_GOAL_SUCCESS:
         return {loading:false, success:true, ...state, goal: state.goal.filter(g => g.id !== action.payload)};
         case ActionTypes.DELETE_GOAL_FAIL:
         return {loading:false, success:false, error: action.payload};
         default:
         return state;
       }
}