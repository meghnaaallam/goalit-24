// to get the goals from our backend api,
// if the fetch is successful
//  if the fetch request is not successful
// now based on these actiontypes we need to trigger our actions and pass them onto our reducers

export const ActionTypes = {
       GET_GOALS: "GET_GOALS",
       RETRIEVE_GOALS_SUCCESS: "RETRIEVE_GOALS_SUCCESS",
       RETRIEVE_GOALS_FAIL: "RETRIEVE_GOALS_FAIL",
       ADD_GOAL_REQUEST: "ADD_GOAL_REQUEST",
       ADD_GOAL_SUCCESS: "ADD_GOAL_SUCCESS",
       ADD_GOAL_FAIL: "ADD_GOAL_FAIL",
       ADD_GOAL_RESET: "ADD_GOAL_RESET",
       DELETE_GOAL_REQUEST: "DELETE_GOAL_REQUEST",
       DELETE_GOAL_SUCCESS: "DELETE_GOAL_SUCCESS",
       DELETE_GOAL_FAIL: "DELETE_GOAL_FAIL",
}
