import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import React from "react";
import Todos from "../src/components/Todos/Todos";
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
  state: {
    todos: [],
  },
  widgets: [
    {
      widgetName: "todos",
      widgetFunc: (props) => <Todos {...props} />,
      mapStateToProps: ["todos"],
    },
  ],
};

export default config;
