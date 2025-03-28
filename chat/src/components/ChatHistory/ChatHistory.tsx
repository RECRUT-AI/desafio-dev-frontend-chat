"use client";

import { useQuery } from "@tanstack/react-query";

import applicationService from "@chat/services/ApplicationService";
import { useChatContext } from "@chat/contexts/ChatContext";

import GraphicEq from "@mui/icons-material/GraphicEq";

import MessageBox from "../MessageBox/MessageBox";
import "./ChatHistory.css";

const ChatHistory = () => {
  const { outputType, isAgentSpeaking } = useChatContext();

  const { data: messages } = useQuery({
    queryKey: ["messages"],
    queryFn: () => applicationService.getMessages(),
  });

  return (
    <div className="flex flex-1 flex-col justify-end overflow-auto">
      {outputType === "audio" && (
        <div className="flex flex-1 items-center justify-center">
          <div className={`agent-avatar ${isAgentSpeaking ? "speaking" : ""}`}>
            <GraphicEq fontSize="large" />
          </div>
        </div>
      )}
      {outputType === "text" &&
        messages?.map((message) => (
          <MessageBox key={message.messageId} message={message} />
        ))}
    </div>
  );
};

export default ChatHistory;
