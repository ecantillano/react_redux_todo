import { createStore } from 'redux';
const INITIAL_STATE = {
    tasks: [
        {
            id: 0,
            title: "Primera tarea",
            completed: true
        },
        {
            id: 1,
            title: "Segunda tarea",
            completed: true
        },
        {
            id: 2,
            title: "Tercera tarea",
            completed: false
        }
    ]
};
const reducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
        case 'NEW_TASK':
            return [
                ...state,
                {
                id: action.id,
                text: action.text,
                completed: false
                }
                ];

            default:
            return state;
        }
}

export default createStore(reducer); 

