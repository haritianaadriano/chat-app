export interface Channel {
    id?: number;
    name?: string;
    type?: string;
    createdAt?: string;
    updatedAt?: string;
    ownerId?: number;
    owner: {
      id?: String;
      name?: string;
      email?: string;
    };
  }
  
  export interface ResponseChannel {
    status?: boolean;
    channels?: [Channel];
  }
  