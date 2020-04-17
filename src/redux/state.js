let rerenderEntireTree = () => {
    console.log = 'State changed';
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi! How are you?', likes: 2 },
            { id: 2, message: 'YOOO', likes: 20 },
            { id: 3, message: 'FIREEE', likes: 30 },
        ],
        newPostText: '',
    },
    messagesPage: {
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'Hello' },
            { id: 3, message: 'How are you?' },
        ],
        newMessageText: '',
        dialogues: [
            { id: 1, name: 'Alexey' },
            { id: 2, name: 'Julia' },
            { id: 3, name: 'Nikita' },
        ],
    },
    navigationPage: {
        friends: [
            { id: 1, name: 'Julia', image: "https://sun9-41.userapi.com/c858332/v858332398/ac1f0/QGfA6499WV0.jpg" },
            { id: 2, name: 'Nikita', image: "https://sun9-51.userapi.com/c854416/v854416493/bc0bf/AvDokp4rysg.jpg" },
            { id: 3, name: 'Alexey', image: "https://sun9-61.userapi.com/c205824/v205824609/32c2b/T8RInD80Q0E.jpg" },
            { id: 3, name: 'Ilya', image: "https://sun9-61.userapi.com/c846019/v846019487/175efb/pMCHBf-f_Ks.jpg" },
        ],
    },
}

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likes: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = '';
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.messagesPage.newMessageText,
    }
    state.messagesPage.messages.push(newMessage);
    rerenderEntireTree(state);
    state.messagesPage.newMessageText = '';
}

export const updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
