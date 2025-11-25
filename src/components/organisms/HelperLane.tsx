// import { useState } from "react";
// import {
//   Conversation,
//   ConversationContent,
//   ConversationScrollButton,
// } from "@/components/ui/shadcn-io/ai/conversation";
// import { Message, MessageContent } from "../ui/shadcn-io/ai/message";
// import {
//   PromptInput,
//   PromptInputTextarea,
//   PromptInputToolbar,
//   PromptInputSubmit,
// } from "../ui/shadcn-io/ai/prompt-input";

// interface ChatMessage {
//   id: string;
//   from: "user" | "assistant";
//   content: string;
// }

// export const HelperLane = () => {
//   const [messages, setMessages] = useState<ChatMessage[]>([
//     {
//       id: "1",
//       from: "assistant",
//       content: "Hallo! Wie kann ich Ihnen bei Ihrer Gebäudeerfassung helfen?",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [status, setStatus] = useState<"idle" | "submitted" | "streaming">(
//     "idle"
//   );
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage: ChatMessage = {
//       id: Date.now().toString(),
//       from: "user",
//       content: input,
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setStatus("streaming");

//     // TODO: Replace with your actual AI API call
//     setTimeout(() => {
//       const assistantMessage: ChatMessage = {
//         id: (Date.now() + 1).toString(),
//         from: "assistant",
//         content:
//           "Das ist eine Platzhalter-Antwort. Verbinden Sie hier Ihre KI-API.",
//       };
//       setMessages((prev) => [...prev, assistantMessage]);
//       setStatus("idle");
//     }, 1000);
//   };
//   return (
//     <aside className="bg-muted/30 p-4 rounded-lg">
//       <h3 className="font-semibold mb-4">Additional Info</h3>
//       <p className="text-sm text-muted-foreground">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris.
//       </p>
//       <section className="">
//         <Conversation className="flex-1 relative">
//           <ConversationContent>
//             {messages.map((message) => (
//               <Message key={message.id} from={message.from}>
//                 <MessageContent>{message.content}</MessageContent>
//               </Message>
//             ))}
//           </ConversationContent>
//           <ConversationScrollButton />
//         </Conversation>
//         <div className="p-4 border-t">
//           <PromptInput onSubmit={handleSubmit}>
//             <PromptInputTextarea
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Stellen Sie eine Frage..."
//               minHeight={48}
//               maxHeight={120}
//             />
//             <PromptInputToolbar>
//               <div className="flex-1" />
//               <PromptInputSubmit status={status} />
//             </PromptInputToolbar>
//           </PromptInput>
//         </div>
//       </section>
//     </aside>
//   );
// };

import { useState, useEffect, useRef } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ui/shadcn-io/ai/conversation";
import { Message, MessageContent } from "../ui/shadcn-io/ai/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputSubmit,
} from "../ui/shadcn-io/ai/prompt-input";

interface ChatMessage {
  id: string;
  from: "user" | "assistant";
  content: string;
}

export const HelperLane = () => {
  const chatContainerRef = useRef<HTMLElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      from: "assistant",
      content: "Hallo! Wie kann ich Ihnen bei Ihrer Gebäudeerfassung helfen?",
    },
  ]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"ready" | "submitted" | "streaming">(
    "ready"
  );

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      from: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setStatus("streaming");

    // TODO: Replace with your actual AI API call
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        from: "assistant",
        content:
          "Das ist eine Platzhalter-Antwort. Verbinden Sie hier Ihre KI-API.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setStatus("ready");
    }, 1000);
  };

  return (
    <aside className="bg-muted/30 p-4 rounded-lg">
      <h3 className="font-semibold mb-4"> Wiki </h3>
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <section className="mt-8" ref={chatContainerRef}>
        <h3 className="font-semibold mb-4"> Chat </h3>
        <Conversation className="h-[300px] overflow-y-auto">
          <ConversationContent>
            {messages.map((message) => (
              <Message key={message.id} from={message.from}>
                <MessageContent>{message.content}</MessageContent>
              </Message>
            ))}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
        <div className="p-4 border-t">
          <PromptInput onSubmit={handleSubmit}>
            <PromptInputTextarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Stellen Sie eine Frage..."
              minHeight={48}
              maxHeight={120}
            />
            <PromptInputToolbar>
              <div className="flex-1" />
              <PromptInputSubmit status={status} />
            </PromptInputToolbar>
          </PromptInput>
        </div>
      </section>
    </aside>
  );
};
