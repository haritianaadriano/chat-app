export interface Message {
    id?: number;
    content?: String
    createdAt?: String
    updatedAt?: String
    senderId?: String
    recipiendtId?: any
    channelId?: number
    sender?: {
      id?: number
      name?: String
      email?: String
    }
  }
  
  export interface ResponseMessage {
    status?: boolean;
    messages?: [Message];
  }
  