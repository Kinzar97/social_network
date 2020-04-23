import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navigationReducer from "./navigationReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'I love you', likes: 2 },
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

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log = 'State changed';
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.navigationPage = navigationReducer(this._state.navigationPage, action);
        this._callSubscriber(this._state);
        }
    }


export default store;
