export interface Message {
    id?: number;
    senderId?: number;
    channelId?: number;
    recipientId?: any;
    content?: String;
    updatedAt?: String;
    createdAt?: String;
  }
  
  export interface ResponseMessage {
    status?: boolean;
    messages?: [Message];
  }
  