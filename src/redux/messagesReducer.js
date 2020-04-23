const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let _newMessage = {
                id: 4,
                message: state.newMessageText,
            };
            state.messages.push(_newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const AddMessageActionCreator = ()=>({type: ADD_MESSAGE});
export const UpdateNewMessageTextActionCreator = (newText)=>({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText});

export default messagesReducer ;