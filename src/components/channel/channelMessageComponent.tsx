import { Message } from "@/types/Message";
import { ChannelMessageProps } from "@/types/propsTypes";
import Nav from "@/utils/ui/layout/navbar";
import Cookies from "js-cookie";

export default function ChannelMessageComponent({
  response,
  setMessageContent,
  handleClick,
  moveToEditChannel,
}: ChannelMessageProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessageContent(event.target.value);
  }

  return (
    <div>
      <header>
        <Nav />
      </header>
      <h1>{Cookies.get("channel_name")}</h1>
      <button onClick={moveToEditChannel}>edit</button>
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
        <div>
          <input onChange={handleChange} />
          <button onClick={handleClick}>send</button>
        </div>
      </div>
    </div>
  );
}
