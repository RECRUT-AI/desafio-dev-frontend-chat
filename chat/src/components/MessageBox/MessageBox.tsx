"use client";

import { Message } from "@chat/types";
import { SmartToy } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import JobsList from "../JobsList/JobsList";

export interface MessageBoxProps {
  message: Message;
}

const CustomComponents: { [key: string]: unknown } = {
  JobsList: JobsList,
};

const MessageBox = ({ message }: MessageBoxProps) => {
  const parseContent = (content: string): React.ReactNode => {
    const regex = new RegExp(/\$\[(.*?)\:(.*?)\](.*?)\$\[(.*?)\]/);
    const regexResult = regex.exec(content);

    if (regexResult && regexResult.length > 1) {
      const breakContent = content.split(regexResult[0]);

      const Component = CustomComponents[regexResult[2] as string] as React.FC;
      const props = JSON.parse(regexResult[3]);

      let length = 0;
      const htmlContent = [];
      for (const part of breakContent) {
        if (length >= regexResult.index) {
          htmlContent.push(<Component {...props} />);
        }
        htmlContent.push(<span dangerouslySetInnerHTML={{ __html: part }} />);
        length += part.length;
      }

      return htmlContent;
    }

    return <span dangerouslySetInnerHTML={{ __html: content }} />;
  };

  return (
    <div
      className={`flex w-full px-6 py-1 ${
        message.senderId === "agent" ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className="flex flex-col gap-3 max-w-[90%] rounded-lg p-4"
        style={{
          backgroundColor: message.senderId === "agent" ? "#f8e4e8" : "#fbfbfb",
        }}
      >
        {message.senderId === "agent" && (
          <div className="flex gap-2 items-center">
            <Avatar sx={{ width: 24, height: 24, bgcolor: "primary.main" }}>
              <SmartToy fontSize="small" />
            </Avatar>
            <Typography className="font-bold">IA Agente</Typography>
          </div>
        )}
        {parseContent(message.content)}
      </div>
    </div>
  );
};

export default MessageBox;
