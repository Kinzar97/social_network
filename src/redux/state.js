let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi! How are you?', likes: 2 },
            { id: 2, message: 'YOOO', likes: 20 },
            { id: 3, message: 'FIREEE', likes: 30 },
        ],
    },
    messagesPage: {
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'Hello' },
            { id: 3, message: 'How are you?' },
        ],
        dialogues: [
            { id: 1, name: 'Igor Zaripov' },
            { id: 2, name: 'Roman Zaripov' },
            { id: 3, name: 'Nikita Kuznetsov' }
        ],
    }
}

export default state;