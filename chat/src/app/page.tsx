import { InputBox, Topbar } from "@chat/components";
import ChatHistory from "@chat/components/ChatHistory/ChatHistory";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full max-w-3xl m-auto shadow-xl">
      <Topbar />
      <ChatHistory />
      <InputBox />
    </main>
  );
}
