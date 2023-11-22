import React, { useRef } from "react";
import BotMessage from "./BotMessage";
import { v4 } from "uuid";
import UserMessage from "./UserMessage";
import Typing from "./TypingMessage";

export default function Messages({ messages }) {
  const el = useRef(null);
  // console.log("Messages: ", messages);
  if (el.current) {
    el.current.scrollTop = el.current.scrollHeight;
  }

  return (
    <>
      <div className="messages" ref={el} id={"el"}>
        <div>
          {messages.map((message) => {
            if (typeof message.message == "object") {
              return message.message.map((msg) => {
                return <BotMessage key={v4()} message={msg} />;
              });
            } else {
              if (message.type === "bot") {
                return <BotMessage key={v4()} message={message.message} />;
              } else if (message.type === "typing") {
                return <Typing key={v4()} />;
              } else {
                return <UserMessage key={v4()} message={message.message} />;
              }
            }
          })}
        </div>
      </div>
    </>
  );
}
