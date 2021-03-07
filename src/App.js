import "./App.css";
import React from "react";
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "../src/MessageParser";
import ActionProvider from "../src/ActionProvider";
import config from "./config";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </header>
    </div>
  );
}

export default App;
