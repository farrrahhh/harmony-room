"use client";
import React, { useState } from "react";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([]);
  const [inputMessage, setInputMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([
        ...messages,
        { sender: selectedChat!, message: inputMessage }, // Mengirim pesan dari chat yang dipilih
      ]);
      setInputMessage(""); // Clear input after sending
    }
  };

  const handleSelectChat = (chat: string) => {
    setSelectedChat(chat);
    setMessages([]); // Clear previous messages on chat change
  };

  return (
    <div className="flex h-screen bg-white text-dark2">
      {/* Sidebar Chat List */}
      <div className="w-1/3 border-r border-gray-300 bg-white">
        <div className="mt-12"></div>
        <div className="p-4">
          <h2 className="font-bold">Chats</h2>
          <ul className="space-y-3">
            {["Alice", "Bob"].map((chat) => (
              <li
                key={chat}
                onClick={() => handleSelectChat(chat)}
                className={`p-3 cursor-pointer rounded-lg ${
                  selectedChat === chat
                    ? "bg-primary text-white"
                    : "hover:bg-gray-200"
                } flex items-center`}
              >
                <img
                  src={`/${chat.toLowerCase()}.png`} // Asumsi gambar dengan nama chat (alice.png, bob.png)
                  alt={chat}
                  className="w-8 h-8 rounded-full mr-4"
                />
                {chat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Chat Box */}
      <div className="flex-grow flex flex-col">
        <div className="mt-12"></div>
        {selectedChat ? (
          <div className="flex flex-col h-full">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-300 bg-white">
              <h2 className="font-bold">{selectedChat}</h2>
            </div>

            {/* Messages */}
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    msg.sender === selectedChat ? "text-right" : ""
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      msg.sender === selectedChat
                        ? "bg-primary text-white"
                        : "bg-gray-300 text-black"
                    } inline-block`}
                    style={{ maxWidth: "80%" }}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-300 bg-white flex">
              <input
                type="text"
                className="flex-grow p-2 border border-gray-300 rounded-l-lg"
                placeholder="Type a message"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button
                className="p-2 bg-primary text-white rounded-r-lg"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center flex-grow bg-white">
            <p className="sb2">Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
