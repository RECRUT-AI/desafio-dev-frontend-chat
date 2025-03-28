export interface Message {
  messageId: number;
  senderId: "user" | "agent";
  content: string;
  datetime: string;
}

export interface Job {
  jobId: number;
  jobName: string;
  companyName: string;
}
