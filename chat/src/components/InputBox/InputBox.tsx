"use client";

import { useState } from "react";

import { useChatContext } from "@chat/contexts/ChatContext";

import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import SendOutlined from "@mui/icons-material/SendOutlined";
import MicOutlined from "@mui/icons-material/MicOutlined";
import ChatOutlined from "@mui/icons-material/ChatOutlined";
import StopIcon from "@mui/icons-material/Stop";

import "./InputBox.css";

const InputBox = () => {
  const { outputType, setOutputType, setIsAgentSpeaking } = useChatContext();

  const [message, setMessage] = useState("");
  const [isRecordStarted, setIsRecordStarted] = useState(false);

  const handleSendTextMessage = () => {
    // TODO: Enviar a mensagem para a LLM
  };

  const handleRecording = () => {
    setIsRecordStarted(!isRecordStarted);
    setIsAgentSpeaking(isRecordStarted);
    // TODO: Começar/encerrar gravação de áudio
  };

  return (
    <div className="flex gap-4 p-6 items-end">
      {outputType === "text" && (
        <>
          <TextField
            fullWidth
            multiline
            placeholder="Escreva aqui..."
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            slotProps={{ input: { className: "rounded-[16px]! bg-white" } }}
            maxRows={5}
          />

          {!!message ? (
            <Fab
              size="medium"
              color="primary"
              onClick={handleSendTextMessage}
              className="min-w-[56px]! h-[56px]!"
            >
              <SendOutlined />
            </Fab>
          ) : (
            <Tooltip title="Conversar por voz" placement="top-end">
              <Fab
                size="medium"
                color="primary"
                onClick={() => setOutputType("audio")}
                className="min-w-[56px]! h-[56px]!"
              >
                <MicOutlined />
              </Fab>
            </Tooltip>
          )}
        </>
      )}

      {outputType === "audio" && (
        <>
          <div className="flex flex-col justify-center items-center w-full">
            <Typography
              variant="caption"
              color="textSecondary"
              className="ml-[32px]! mb-4!"
            >
              Clique para {isRecordStarted ? "parar de" : "começar a"} gravar
            </Typography>
            <Fab
              size="large"
              color="primary"
              onClick={handleRecording}
              className={`w-[72px]! h-[72px]! ml-[32px]! ${
                isRecordStarted ? "recording" : ""
              }`}
            >
              {isRecordStarted ? (
                <StopIcon fontSize="large" />
              ) : (
                <MicOutlined fontSize="large" />
              )}
            </Fab>
          </div>

          <Tooltip title="Conversar por texto" placement="top-end">
            <Fab
              size="medium"
              color="primary"
              onClick={() => setOutputType("text")}
              className="min-w-[56px]! h-[56px]!"
            >
              <ChatOutlined />
            </Fab>
          </Tooltip>
        </>
      )}
    </div>
  );
};

export default InputBox;
