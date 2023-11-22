"use client";
import React from "react";
import { useEffect, useState } from "react";
import Messages from "./ui/Messages";
import Input from "./ui/Input";
import Header from "./ui/Header";
import { motion } from "framer-motion";
import useMessageStore from "./state/MessageStore";
import axios from "axios";
import { v4 as uuid4 } from "uuid";
import ChatBotConfigurations from "./configurations/ChatBotConfigurations";
import ChatBotToggle from "./ChatBotToggle";
import "./chatbot.css";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const messages = useMessageStore((state) => state.messages);
  const addMessage = useMessageStore((state) => state.addMessage);
  const userSessionID = useMessageStore((state) => state.userSessionID);
  const addSessionID = useMessageStore((state) => state.addSessionID);

  const deleteTypingMessage = useMessageStore(
    (state) => state.deleteTypingMessage
  );

  useEffect(() => {
    if (messages.length == 0) {
      if (userSessionID == "") {
        addSessionID(uuid4());
      }
      console.log(ChatBotConfigurations);
      addMessage({
        type: "bot",
        message: ChatBotConfigurations.initialMessage,
      });
    }
  }, []);

  const send = async (text) => {
    addMessage({
      type: "user",
      message: text,
    });
    addMessage({
      type: "typing",
      message: text,
    });

    axios
      .post(process.env.NEXT_PUBLIC_LEX_URL, {
        text: text,
        sessionID: userSessionID,
      })
      .then((res) => {
        // console.log(res);
        deleteTypingMessage({
          type: "typing",
          messages: "...",
        });
        addMessage({
          type: "bot",
          message: res.data.messages[0].content,
        });
      })
      .catch((err) => {
        console.error(err.response);
        deleteTypingMessage({
          type: "typing",
          messages: "...",
        });

        addMessage({
          type: "bot",
          message: err.response.data.message,
        });
      });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="animate-about-me-reveal">
      {isOpen ? (
        <motion.div
          className="chatbot bg-gray-100"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}>
          <Header handleToggle={handleToggle} />
          <Messages messages={messages} />
          <Input onSend={send} />
        </motion.div>
      ) : (
        <ChatBotToggle handleToggle={handleToggle} />
      )}
    </div>
  );
}
