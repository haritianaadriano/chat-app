import { Channel } from "@/types/Channel";
import Cookies from "js-cookie";

export default function ChannelComponent({
  response,
  movetToChannelChat,
}: any) {
  return (
    <div>
      {response &&
        response.channels?.map((channel: Channel) => {
          Cookies.set("channel_id", channel.id?.toString());
          Cookies.set("channel_name", channel.name);
          return (
            <div className="channel-nav" onClick={movetToChannelChat}>
              <div className="container-prime">
                <div className="container-img">
                  <img src="/images/avatar.jpg" alt="Avatar" />
                </div>
                <div key={channel.id}>
                  <h3>{`channel: ${channel.name}`}</h3>
                </div>
                <div>
                  <h3>{`owner name: ${channel.owner.name}`}</h3>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
