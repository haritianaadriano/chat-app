import ChannelMessageComponent from "@/components/channel/channelMessageComponent";
import { getMessageByChannelId, sendMessage } from "@/lib/api/messageApi";
import { CreateMessage, ResponseMessage } from "@/types/Message";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ChannelMessage() {
  const router = useRouter();
  const [data, setData] = useState<ResponseMessage>();
  const [messageContent, setMessageContent] = useState<String>();

  class messageForm {
    channelId: number;
    recipientId: number;
    content: String | undefined;

    constructor(
      channelId: number,
      recipientId: any,
      content: String | undefined
    ) {
      this.channelId = channelId;
      this.recipientId = recipientId;
      this.content = content;
    }
  }

  function handleClick() {
    let channel_id = parseInt(Cookies.get("channel_id") || "", 10);
    let recipient_id = null;

    const message = new messageForm(channel_id, recipient_id, messageContent);
    sendMessage(message);
  }

  function moveToEditChannel() {
    router.push(`/channel/edit/${Cookies.get("channel_id")}`);
  }

  useEffect(() => {
    const channel_id = parseInt(Cookies.get("channel_id") || "", 10);

    if (!isNaN(channel_id)) {
      getMessageByChannelId(setData, channel_id);
    }

    const fetchData = () => {
      if (!isNaN(channel_id)) {
        getMessageByChannelId(setData, channel_id);
      }
      setTimeout(fetchData, 1000);
    };

    const timeout = setTimeout(fetchData, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() =>{
    
  })

  return (
    <div>
      <ChannelMessageComponent
        response={data}
        setMessageContent={setMessageContent}
        handleClick={handleClick}
        moveToEditChannel={moveToEditChannel}
      />
    </div>
  );
}
