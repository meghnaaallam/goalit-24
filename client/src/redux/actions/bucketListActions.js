import {ActionTypes} from "../constants/actionTypes";
import axios from 'axios'


//get all goals data from api

export const getBucketList = () => async(dispatch) => {
  try {
     dispatch({type: ActionTypes.GET_GOALS})
     const {data} = await axios.get('http://127.0.0.1:8000/goals/dashboard/')
     dispatch({
     type: ActionTypes.RETRIEVE_GOALS_SUCCESS,
       payload: data
               })
  }catch(error){
    dispatch({
    type: ActionTypes.RETRIEVE_GOALS_FAIL,
    payload: error.response && error.response.data.message
  })
}
}

//post goal to db

export const addGoal = (goalsData) => async(dispatch) => {
  try {
     dispatch({type: ActionTypes.ADD_GOAL_REQUEST})
     const {data} = await axios.post('http://127.0.0.1:8000/goals/dashboard/', goalsData)
     dispatch({
     type: ActionTypes.ADD_GOAL_SUCCESS,
       payload: data
               })
  }catch(error){
    dispatch({
    type: ActionTypes.ADD_GOAL_FAIL,
    payload: error.response && error.response.data.message
  })
}
}


export const deleteGoal = (id) => async(dispatch) => {
  try {
     dispatch({type: ActionTypes.DELETE_GOAL_REQUEST})
     const {data} = await axios.delete(`http://127.0.0.1:8000/goals/dashboard/${id}/`)
     dispatch({
     type: ActionTypes.DELETE_GOAL_SUCCESS,
       payload: data
               })
  }catch(error){
    dispatch({
    type: ActionTypes.DELETE_GOAL_FAIL,
    payload: error.response && error.response.data.message
  })
}
}