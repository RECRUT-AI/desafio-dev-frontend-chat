import { NextRequest } from "next/server";
import { Job, Message } from "@chat/types";

const mockedJobsList: Job[] = [
  {
    jobId: 1,
    jobName: "Frontend Javascript Developer",
    companyName: "Empresa Inc.",
  },
  {
    jobId: 2,
    jobName: "Frontend React Developer",
    companyName: "Devs Inc.",
  },
  {
    jobId: 3,
    jobName: "Senior Frontend React Developer",
    companyName: "Devs Inc.",
  },
  {
    jobId: 4,
    jobName: "Seinor Frontend Javascript Developer",
    companyName: "Empresa Inc.",
  },
  {
    jobId: 5,
    jobName: "Frontend Developer",
    companyName: "Icaros Inc.",
  },
];

const mockedData: Message[] = [
  {
    messageId: 1,
    senderId: "user",
    content:
      "Olá! Gostaria de aplicar para uma vaga de desenvolvedor Frontend React",
    datetime: "2025-03-28T12:00:00",
  },
  {
    messageId: 2,
    senderId: "agent",
    content: `Tenho algumas opções que podem fazer sentido para você: $[CUSTOM_COMPONENT:JobsList]{"jobs":${JSON.stringify(
      mockedJobsList
    )}}$[/CUSTOM_COMPONENT]`,
    datetime: "2025-03-28T12:00:00",
  },
];

export async function POST(request: NextRequest) {
  const body = await request.json();
  mockedData.push(body);
  return Response.json(body);
}

export async function GET() {
  return Response.json(mockedData);
}
