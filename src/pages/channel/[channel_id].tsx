import ChannelMessageComponent from "@/components/channel/channelMessageComponent";
import { getMessageByChannelId } from "@/lib/api/messageApi";
import { ResponseMessage } from "@/utils/types/Message";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function ChannelMessage() {
  const [data, setData] = useState<ResponseMessage>();

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

  return (
    <div>
      <ChannelMessageComponent response={data} />
    </div>
  );
}
