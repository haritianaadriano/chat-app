import { Channel } from "@/utils/types/Channel";
import { ChannelProps } from "@/utils/types/propsTypes";

export default function ChannelComponent({ response }: any) {
  return (
    <div>
      {response &&
        response.channels?.map((channel: Channel) => {
          return (
            <div className="channel-nav" onClick={close}>
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
