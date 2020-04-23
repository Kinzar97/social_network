const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) =>{
    switch(action.type){
    case ADD_POST:
        let _newPost = {
            id: 4,
            message: state.newPostText,
            likes: 0,
        };
        state.posts.push(_newPost);
        state.newPostText = '';
        return state;
    case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        return state;
    default:
        return state
}
}

export const AddPostActionCreator = ()=>({type: ADD_POST});
export const UpdateNewPostTextActionCreator = (newText)=>({type: UPDATE_NEW_POST_TEXT, newText: newText});

export default profileReducer;