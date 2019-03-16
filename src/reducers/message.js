import * as Message from './../constants/Message';
import * as types from './../constants/ActionType';
const messageInitialState = Message.MSG_WELCOME;

const message = (state = messageInitialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message
        default:
            return state;
    }
}
export default message;