export interface Channel {
  id: number;
  name: string;
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

export interface CreateChannel {
  name?: String;
  type?: String;
}

export interface EditChannel{
  channelId?: number 
  members?: [number]
}

export interface UserOption {
  label: String
  value: number
}
