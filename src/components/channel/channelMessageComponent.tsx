import { Message } from "@/utils/types/Message";
import Nav from "@/utils/ui/layout/navbar";
import Cookies from "js-cookie";

export default function ChannelMessageComponent({ response }: any) {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <h1>{Cookies.get("channel_name")}</h1>
      <div>
        {response &&
          response.messages?.map((message: Message) => {
            return (
              <>
                <div>
                  <h2>{message.sender?.name}</h2>
                  <div>
                    <p>{message.content}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
