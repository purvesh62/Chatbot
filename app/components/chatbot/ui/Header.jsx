import React from "react";
import { AiOutlineClose, AiOutlineClear } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import ChatBotConfigurations from "../configurations/ChatBotConfigurations";
import useMessageStore from "../state/MessageStore";

const Header = ({ handleToggle }) => {
  const clearMessages = useMessageStore((state) => state.clearMessages);

  return (
    <div className="header">
      <div className="header-title">
        <BsRobot size={25} />
        {ChatBotConfigurations.botName}
      </div>
      <div className="flex gap-1">
        <button
          onClick={clearMessages}
          className="header-close"
          title="Clear chat">
          <AiOutlineClear />
        </button>
        <button onClick={handleToggle} className="header-close" title="Close">
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default Header;
