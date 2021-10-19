import { bindActionCreators } from "redux";
import { RECEIVE_STEP } from "../actions/step_actions";
import { RECEIVE_STEPS } from "../actions/step_actions";
import { REMOVE_STEP } from "../actions/step_actions";

const intialState = {1: { // this is the step with id = 1
    id: 1,
        title: 'walk to store',
            done: false,
                todo_id: 1
},
2: { // this is the step with id = 2
    id: 2,
        title: 'buy soap',
            done: false,
                todo_id: 1
}
    }

const newSteps = [{ id: 1, title: 'Dispatch actions', done: false, todo_id: 1 }, { id: 2, title: "Chicken" }];

window.newSteps = newSteps;

export const stepsReducer = (state = intialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_STEPS:
            nextState = {}
            action.steps.forEach(step => {
                nextState[step.id] = step;
            });
        return nextState;

        case RECEIVE_STEP:
            nextState[action.step.id] = step.id;
            return nextState;

        case REMOVE_STEP:
            Object.values(state).forEach(step => {
                if(step.id !== action.step.id){
                    nextState[step.id] = step
                }
            })
            return nextState;
    
        default:
            return state;
    }

}