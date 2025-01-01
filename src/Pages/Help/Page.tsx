import React from "react";
import { useTranslation } from "react-i18next";
import { disconnectSocket, getSocket } from "../../lib/SocketProvider";
import { useHelpStateState } from "../../state/HelpState";
import useSocketTracker from "../../Hooks/useSocketTracker";
import { Message } from "../../types/Socket";
import { SOCKET } from "../../enums/Socket";
import { TiDelete } from "react-icons/ti";
import { GiHamburger } from "react-icons/gi";
import { MenuOutlined } from "@ant-design/icons";

const Page = () => {
  const Socket = getSocket();

  const [t] = useTranslation();
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState<string>("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const { setHelpModal } = useHelpStateState();

  useSocketTracker();

  React.useEffect(() => {
    Socket.on(SOCKET.EVENT_SEND_MESSAGE, (msg: string) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: SOCKET.INCOMING, text: msg },
      ]);
    });

    return () => {
      disconnectSocket();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      Socket.emit(SOCKET.EVENT_SEND_MESSAGE, input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: SOCKET.OUTGOING, text: input },
      ]);
      setInput("");
      scrollToBottom();
    }
  };
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="help">
        <header> {t("Need Helps ?")}  </header>
        <main>
          {messages?.length > 0 && (
            <div className="messages">
              {messages.map((msg: Message, index) => (
                <div
                  key={index}
                  className={
                    msg.type === SOCKET.INCOMING
                      ? SOCKET.INCOMING
                      : SOCKET.OUTGOING
                  }
                >
                  {msg.text}
                </div>
              ))}
              <div className="messagesEndRef" ref={messagesEndRef}></div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="socket_input"
              placeholder={t("Enter your model name")}
              type="text"
            />
          </form>
        </main>
        <div ref={messagesEndRef}></div>
      </div>
      <article onClick={() => setHelpModal()} className="black_bg" />
    </>
  );
};

export default Page;
