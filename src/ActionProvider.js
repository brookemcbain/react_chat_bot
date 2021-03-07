class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  helloWorldHandler = () => {
    const message = this.createChatbotMessage("Hello, I'm the chatbot");
    this.setChatbotMessage(message);
  };

  todosHandler = () => {
    const message = this.createChatBotMessage("Sure, here's your todos!", {
      widget: 'todos',
    }) (property) ActionProvider.setChatbotMessage: (message: any) => void
    this.setChatbotMessage(message)
  };
  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
