import React from "react";
import { Avatar } from "antd";
import Image from "next/image";

export default function BotMessage({ message }) {
  return (
    <div
      className="message-container"
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "end",
        paddingLeft: "10px",
      }}>
      <Avatar
        size={35}
        src={
          <Image
            src={"/img/bot-img/bot-avatar.jpeg"}
            unoptimized={true}
            priority={true}
            height={0}
            width={0}
            alt="avatar"
          />
        }
        style={{ marginBottom: "10px" }}
      />
      <div
        className="
      bot-message
      ">
        {message}
      </div>
    </div>
  );
}
