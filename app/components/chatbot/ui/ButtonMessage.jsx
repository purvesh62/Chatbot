import React from "react";
import { Avatar } from "antd";
import Image from "next/image";

export default function ButtonMessage({ message }) {
  return (
    <div
      className="message-container w-full"
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "end",
        paddingLeft: "10px",
      }}>
      <Avatar
        className="w-20 h-15"
        src={<Image src={"/img/bot/bot-avatar.jpeg"} alt="avatar" />}
        style={{ marginBottom: "30px" }}
      />
      <div className="flex flex-col">
        <div className="bot-message">{message}</div>
        <div className="flex pl-3 pb-1 justify-start gap-4">
          <button class="btn">
            <span class="text">Education</span>
          </button>
          <button class="btn">
            <span class="text">Experience</span>
          </button>
          <button class="btn">
            <span class="text">About me</span>
          </button>
        </div>
      </div>
    </div>
  );
}
