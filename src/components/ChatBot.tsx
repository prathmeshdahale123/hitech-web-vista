
import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Welcome to Hi-Tech Institute of Technology! How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickReplies = [
    "Admission Process",
    "Courses Offered",
    "Fee Structure",
    "Contact Information"
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: "user", text: inputValue }]);
      setInputValue("");
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: "bot", 
          text: "Thank you for your query. Our team will get back to you soon. For immediate assistance, please call (0240) 2552240." 
        }]);
      }, 1000);
    }
  };

  const handleQuickReply = (reply: string) => {
    setMessages([...messages, { type: "user", text: reply }]);
    
    setTimeout(() => {
      let response = "";
      switch (reply) {
        case "Admission Process":
          response = "For admissions, please visit our Admissions page or contact our admission office at admissions@hitech.edu.in";
          break;
        case "Courses Offered":
          response = "We offer B.Tech programs in Civil, Mechanical, Computer Science, and CSE (AI & ML). Visit our Departments page for details.";
          break;
        case "Fee Structure":
          response = "Please check our Downloads section for the latest fee structure or contact the accounts office.";
          break;
        case "Contact Information":
          response = "Phone: (0240) 2552240 | Email: info@hitech.edu.in | Address: Waluj MIDC, Chh. Sambhajinagar";
          break;
        default:
          response = "Thank you for your query. Please contact us for more information.";
      }
      setMessages(prev => [...prev, { type: "bot", text: response }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-900 text-white p-4 rounded-t-lg flex items-center justify-between">
            <h3 className="font-semibold">Hi-Tech Support</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="p-4 border-t">
              <p className="text-xs text-gray-600 mb-2">Quick Questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
