export interface Channel {
        id?: number,
        name?: string,
        type?: string,
        createdAt?: string,
        updatedAt?: string,
        ownerId?: number,
        owner: {
            id?: String,
            name?: string,
            email?: string
        }
}

export interface ResponseChannel {
    status?: boolean,
    channels?: [Channel]
}

export interface User {
    status?: boolean,
    user: {
        id?: number,
        email?: String,
        name?: String,
        googleId?: any,
        bio?: String,
        status?: any,
        createdAt?: String,
        updatedAt?: String,
        deletedAt?: any,
        token?: any
    }
}

export interface Message {
    id?: number,
    senderId?: number,
    channelId?: number,
    recipientId?: any,
    content?: String,
    updatedAt?: String,
    createdAt?: String
}   

export interface ResponseMessage {
    status?: boolean,
    messages?: [Message]
}

export interface Login {
    email?: String,
    password?: String
}