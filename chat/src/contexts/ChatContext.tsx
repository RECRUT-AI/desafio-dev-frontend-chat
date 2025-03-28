"use client";

import React, { createContext, useContext, useState } from "react";

export type Output = "text" | "audio";

interface ChatContextProps {
  outputType: Output;
  setOutputType: (data: Output) => void;
  isAgentSpeaking: boolean;
  setIsAgentSpeaking: (data: boolean) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [outputType, setOutputType] = useState<Output>("text");
  const [isAgentSpeaking, setIsAgentSpeaking] = useState(false);

  return (
    <ChatContext.Provider
      value={{ outputType, setOutputType, isAgentSpeaking, setIsAgentSpeaking }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error(
      "useChatContext must be used within an ChatContextProvider"
    );
  }
  return context;
};
