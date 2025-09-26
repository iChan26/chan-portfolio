// ✅ Imports remain the same
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";

export default function ChatWidget() {
  const [userEmail, setUserEmail] = useState("");
const [emailSubmitted, setEmailSubmitted] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Yo! I’m AiChan, Christian’s robot sidekick 🤖. Drop a message here and I’ll bug him until he reads it!",
    },
  ]);

  // Inside your ChatWidget component
const [showChatButton, setShowChatButton] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowChatButton(true);
  }, 1000); // 7 seconds

  return () => clearTimeout(timer);
}, []);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null); // ✅ NEW: File state
  const [isTyping, setIsTyping] = useState(false);
  const [hasUserSentMessage, setHasUserSentMessage] = useState(false);
  const chatRef = useRef(null);
  const fileInputRef = useRef(null); // ✅ NEW

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnnnybwq"; // Replace with your actual endpoint

const sendMessage = async () => {
  if (!input.trim() || isTyping) return;

  const userMsg = {
    sender: "user",
    text: input.trim(),
  };

  setMessages((prev) => [...prev, userMsg]);
  setInput("");
  setHasUserSentMessage(true);
  setIsTyping(true);

  try {
    // Send to Formspree
    await fetch(FORMSPREE_ENDPOINT, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: userEmail,
    message: input,
  }),
});


    // Bot Response
    const botReplies = [
      "Thank you for your message! 😊",
      "I’ve forwarded it to Christian’s email.",
    ];

    botReplies.forEach((line, idx) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: line }]);
        if (idx === botReplies.length - 1) {
          setTimeout(() => setIsTyping(false), 1000);
        }
      }, idx * 2000);
    });
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: "Oops! Failed to send the message. Please try again later.",
      },
    ]);
    setIsTyping(false);
  }
};



  return (
    <>
            {/* Floating Button with Delay + Fade-Up + Floating Animation */}
         <AnimatePresence>
  {showChatButton && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -6, 0] }} // floating
      exit={{ opacity: 0, y: 20 }}
      transition={{
        opacity: { duration: 0.6, delay: 5 }, // fade in once after 5s
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }
      }}
      className="fixed bottom-[100px] right-6 z-50"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center"
      >
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
          1
        </span>
        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v14H8l-5 5V3z" />
        </svg>
      </button>
    </motion.div>
  )}
</AnimatePresence>



    {/* Chat Box */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 font-mono right-6 w-[320px] bg-white rounded-xl shadow-2xl z-50 overflow-hidden text-sm flex flex-col"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 text-black px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/img/chatbot-profile.gif" alt="Bot" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-extrabold leading-none">Chan Ai</p>
            <p className="text-xs text-black/80">You can send me a message here..</p>
          </div>
        </div>
        <FaChevronDown className="cursor-pointer" onClick={() => setIsOpen(false)} />
      </div>

      {/* Chat Messages */}
      <div
        ref={chatRef}
        className="flex-1 bg-gray-50 px-4 py-3 space-y-3 overflow-y-auto max-h-[250px]"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <img
                src="/img/chatbot-profile.gif"
                alt="Bot"
                className="w-6 h-6 rounded-full mt-1"
              />
            )}
            <div
              className={`max-w-[85%] px-3 py-2 rounded-xl text-sm shadow ${
                msg.sender === "user"
                  ? "bg-[#eaeaea] text-black ml-auto"
                  : "bg-white text-gray-800"
              }`}
            >
              {/* Bot typewriter for first message */}
              {msg.sender === "bot" && idx === 0 && !hasUserSentMessage ? (
                <Typewriter
                  words={[msg.text]}
                  typeSpeed={30}
                  delaySpeed={0}
                  cursor={false}
                />
              ) : (
                <>
                  {msg.text && <p>{msg.text}</p>}
                  {msg.file && (
                    <div className="mt-2 text-xs break-words">
                      {msg.file.type?.startsWith("image/") && msg.previewUrl ? (
                        <a
                          href={msg.previewUrl}
                          download={msg.file.name}
                          className="block mt-1 rounded-md border hover:opacity-90 transition"
                          title="Click to download"
                        >
                          <img
                            src={msg.previewUrl}
                            alt="uploaded"
                            className="rounded-md max-w-full max-h-32 object-contain"
                          />
                        </a>
                      ) : (
                        <>
                          📎{" "}
                          <a
                            href={URL.createObjectURL(msg.file)}
                            download={msg.file.name}
                            className={`underline ${
                              msg.sender === "user"
                                ? "text-black hover:text-[#454545]"
                                : "text-[#343434]"
                            }`}
                            title="Download file"
                          >
                            {msg.file.name}
                          </a>
                        </>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start gap-2 justify-start">
            <img
              src="/img/chatbot-profile.gif"
              alt="Bot"
              className="w-6 h-6 rounded-full mt-1"
            />
            <div className="max-w-[85%] px-3 py-2 rounded-xl text-sm shadow bg-white text-gray-500 animate-pulse">
              Typing...
            </div>
          </div>
        )}
      </div>

      {/* Input Area (with email validation first) */}
      <div className="border-t border-gray-200 px-2 py-2 bg-white flex flex-col gap-2">
        {!emailSubmitted ? (
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-gray-600">
              Please enter your email to continue:
            </label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full text-sm px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
            <button
                    onClick={() => {
                      const isValidGmail = /^[^\s@]+@gmail\.com$/i.test(userEmail.trim());
                      if (isValidGmail) {
                        setEmailSubmitted(true);
                      } else {
                        alert("Please enter a valid Gmail address (must end with @gmail.com).");
                      }
                    }}

              className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm py-2 rounded-md font-semibold transition"
            >
              Continue
            </button>
          </div>
        ) : (
          <>
            {file && (
              <div className="mt-1 px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-2 overflow-hidden">
                  {file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      className="w-10 h-10 rounded border object-cover"
                    />
                  ) : (
                    <span className="text-gray-600">📎</span>
                  )}
                  <span className="truncate max-w-[160px]">{file.name}</span>
                </div>
                <button
                  onClick={() => setFile(null)}
                  title="Remove"
                  className="text-red-500 text-xs hover:underline ml-2"
                >
                  ✕
                </button>
              </div>
            )}

            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder={isTyping ? "Bot is typing..." : "Type a message..."}
                  disabled={isTyping}
                  className="w-full text-sm px-3 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none disabled:opacity-50"
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => {
                    if (e.target.files.length > 0) {
                      setFile(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                />
              
              </div>

              <button
                onClick={sendMessage}
                disabled={isTyping}
                title="Send message"
                className="w-6 h-6 opacity-80 hover:opacity-100 transition disabled:opacity-40"
              >
                <img
                  src="/svg/send-mail.svg"
                  alt="Send"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-4 py-2 bg-white text-gray-500 text-xs flex items-center justify-between">
        <span> </span>
        <span className="flex items-center gap-1">
          Powered by{" "}
          <span className="text-yellow-500 font-extrabold hover:text-yellow-600">
            Chan Ai.
          </span>
        </span>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
}
