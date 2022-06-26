import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

// 1. Init State
export const initState = {
    job: '',
    jobs: []
  }
  

// 3. Reducer
const reducer = (state, action) => {
  
    // console.log('Action: ', action)
    // console.log('Prev state: ', state)
    
    switch(action.type){
      case SET_JOB:
        return {
          ...state,
          job: action.payLoad
        }    
      case ADD_JOB:
        return {
            ...state,
            jobs: [...state.jobs, action.payLoad]
        }
      case DELETE_JOB:
        const newJobs = [...state.jobs]
        newJobs.splice(action.payLoad, 1)
        return {
          ...state,
          jobs: newJobs
        }
      default:
        throw new Error('Invalid action')
    }
}

export default reducer