import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import React from "react";
const config = {
  initialMessages: [createChatBotMessage(`Hello! How may I help you?`)],
  botName: "Brooke's Chatbot",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "green",
    },
    chatButton: {
      backgroundColor: "green",
    },
  },
};

export default config;
