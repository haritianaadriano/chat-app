import { useEffect, useState } from "react";
import Nav from "@/utils/ui/layout/navbar";
import { ResponseChannel } from "@/utils/types/Channel";
import { getChannels } from "@/lib/api/channelApi";
import ChannelComponent from "@/components/channel/channelComponent";
import { useRouter } from "next/router";

export default function Channel() {
  const router = useRouter();
  const moveToCreateChannel = () => {router.push("/channel/create")};
  const [response, setResponse] = useState<ResponseChannel>();
  useEffect(() => {
    setInterval(() => {
      getChannels(setResponse);
    }, 1000);
  }, []);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <div>
        <ChannelComponent response={response} />
      </div>
      <div className="welcoming">
        <h1>Welcome to my channel</h1>
        <button onClick={moveToCreateChannel}>Wanna create new Channel ?</button>
      </div>
    </div>
  );
}
