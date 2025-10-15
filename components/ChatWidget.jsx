// ✅ Imports
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";

export default function ChatWidget() {
  const [userEmail, setUserEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I’m AiChan, Christian’s assistant bot. Please leave your message here, and I’ll make sure he immediately receives it.",
    },
  ]);

  // --- Animation Controls ---
  const [showChatButton, setShowChatButton] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  // ✅ Appear + loop dialog every 7s
  useEffect(() => {
    const showBtnTimer = setTimeout(() => setShowChatButton(true), 800);

    const loopDialog = () => {
      setShowDialog(true);
      setTimeout(() => setShowDialog(false), 3700); // visible duration
    };

    // Start initial dialog
    const startTimer = setTimeout(loopDialog, 1700);

    // Loop every 7 seconds
    const loopInterval = setInterval(loopDialog, 7000);

    return () => {
      clearTimeout(showBtnTimer);
      clearTimeout(startTimer);
      clearInterval(loopInterval);
    };
  }, []);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUserSentMessage, setHasUserSentMessage] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnnnybwq";

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;
    const userMsg = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setHasUserSentMessage(true);
    setIsTyping(true);

    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, message: input }),
      });

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
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Oops! Failed to send the message. Please try again later." },
      ]);
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* ✨ Floating Button + Dialog */}
      <AnimatePresence>
        {showChatButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              opacity: { duration: 0.6 },
              y: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
            }}
            className="fixed bottom-[100px] right-6 z-50 flex flex-col items-end gap-2"
          >
            {/* 💬 Repeating Slide-up Dialog with AiChan Avatar (Clickable) */}
            <AnimatePresence>
              {showDialog && (
                <motion.div
                  onClick={() => setIsOpen(true)} // ✅ Opens chat modal
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white border border-yellow-300 shadow-lg rounded-xl px-3 py-2 text-sm text-gray-800 mb-2 max-w-[230px] flex items-center gap-3 cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  {/* 👩 AiChan Avatar */}
                  <img
                    src="/img/chatbot-profile.gif"
                    alt="AiChan"
                    className="w-8 h-8 rounded-full flex-shrink-0 border border-yellow-300"
                  />

                  {/* Text */}
                  <div>
                    <p className="font-medium text-black leading-tight">
                      Hey! 👋 Wanna reach Christian?
                    </p>
                    <p className="text-yellow-600 text-xs mt-1 font-semibold">Chat Him Here!</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 🟡 Animated Chat Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              className="relative w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 shadow-lg flex items-center justify-center transition-all"
            >
              <IoChatbubbleEllipsesOutline className="w-7 h-7 text-black" />
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center shadow"
              >
                1
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 💬 Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-24 right-6 w-[320px] bg-white rounded-xl shadow-2xl z-50 overflow-hidden text-sm flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 text-black px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src="/img/chatbot-profile.gif" alt="Bot" className="w-8 h-8 rounded-full" />
                <div>
                  <p className="text-sm leading-none font-medium">AiChan</p>
                  <p className="text-xs text-black/80">Wanna reach Christian? Type it in here!</p>
                </div>
              </div>
              <FaChevronDown
                className="cursor-pointer hover:text-gray-700 transition"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Messages */}
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
                    {msg.sender === "bot" && idx === 0 && !hasUserSentMessage ? (
                      <Typewriter words={[msg.text]} typeSpeed={30} delaySpeed={0} cursor={false} />
                    ) : (
                      <p>{msg.text}</p>
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

            {/* Input Area */}
            <div className="border-t border-gray-200 px-2 py-2 bg-white flex flex-col gap-2">
              {!emailSubmitted ? (
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-600">
                    Please enter your Gmail to continue:
                  </label>
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="your@gmail.com"
                    className="w-full text-sm px-3 py-2 rounded-md border border-gray-300 focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      const isValidGmail = /^[^\s@]+@gmail\.com$/i.test(userEmail.trim());
                      if (isValidGmail) setEmailSubmitted(true);
                      else alert("Please enter a valid Gmail address (must end with @gmail.com).");
                    }}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm py-2 rounded-md transition"
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder={isTyping ? "Bot is typing..." : "Type a message..."}
                    disabled={isTyping}
                    className="w-full text-sm px-3 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none disabled:opacity-50"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={isTyping}
                    title="Send message"
                    className="w-7 h-7 opacity-80 hover:opacity-100 transition disabled:opacity-40"
                  >
                    <img src="/svg/send-mail.svg" alt="Send" className="w-full h-full object-contain" />
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-4 py-2 bg-white text-gray-500 text-xs flex items-center justify-between">
              <span></span>
              <span className="flex items-center gap-1">
                Powered by <span className="text-yellow-500 hover:text-yellow-600">AiChan</span>.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
