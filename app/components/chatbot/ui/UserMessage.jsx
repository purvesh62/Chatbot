import React from "react";
import { Avatar } from "antd";
import Image from "next/image";

export default function UserMessage({ message }) {
  return (
    <div
      className="message-container"
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "end",
        alignItems: "end",
        paddingRight: "10px",
      }}>
      <Avatar
        src={
          <Image
            src={"/img/bot-img/user-icon-2.png"}
            unoptimized={true}
            priority={true}
            height={0}
            width={0}
            alt="avatar"
          />
        }
        style={{ marginBottom: "10px" }}
        size={35}>
        U
      </Avatar>
      <div className="user-message">{message}</div>
    </div>
  );
}
