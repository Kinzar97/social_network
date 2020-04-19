let store = {
    _state: {
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
    },

    getState(){
        return this._state
    },

    _callSubscriber() {
        console.log = 'State changed';
    },

    addPost() {
        let _newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likes: 0,
        };
        this._state.profilePage.posts.push(_newPost);
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText = '';
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    addMessage() {
        let _newMessage = {
            id: 4,
            message: this._state.messagesPage.newMessageText,
        };
        this._state.messagesPage.messages.push(_newMessage);
        this._callSubscriber(this._state);
        this._state.messagesPage.newMessageText = '';
    },

    updateNewMessageText(newText) {
        this._state.messagesPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
