import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

export default function Input({ onSend }) {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onSend(text);
    setText("");
  };

  return (
    <div className="input">
      <form onSubmit={handleSend}>
        <input
          type="text"
          onChange={handleInputChange}
          value={text}
          placeholder="Enter your message here"
        />
        <button className="button-send" title="Send message">
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
}
