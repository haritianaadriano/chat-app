import { useEffect, useState } from "react";
import Nav from "@/utils/ui/layout/navbar";
import { ResponseChannel } from "@/utils/types/Channel";
import { getChannels } from "@/lib/api/channelApi";
import ChannelComponent from "@/components/channel/channelComponent";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Channel() {
  const router = useRouter();

  if (Cookies.get("token") == null) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const moveToCreateChannel = () => {
    router.push("/channel/create");
  };
  const movetToChannelChat = () => {
    router.push(`/channel/${Cookies.get("channel_id")}`);
  };
  const [response, setResponse] = useState<ResponseChannel>();
  useEffect(() => {
    getChannels(setResponse);
  }, []);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <div>
        <ChannelComponent
          response={response}
          movetToChannelChat={movetToChannelChat}
        />
      </div>
      <div className="welcoming">
        <h1>Welcome to my channel</h1>
        <button onClick={moveToCreateChannel}>
          Wanna create new Channel ?
        </button>
      </div>
    </div>
  );
}
