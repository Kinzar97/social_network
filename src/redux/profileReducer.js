const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'I love you', likes: 2 },
        { id: 2, message: 'YOOO', likes: 20 },
        { id: 3, message: 'FIREEE', likes: 30 },
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) =>{
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