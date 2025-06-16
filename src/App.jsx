import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  // Initialize state with the messages
  const [messages, setMessages] = useState(chatMessages);

  // Toggle liked state for a message by id
  const onLikeToggle = (id) => {
    const updatedMessages = messages.map(msg => {
      if (msg.id === id) {
        return { ...msg, liked: !msg.liked };
      }
      return msg;
    });
    setMessages(updatedMessages);
  };

  // Calculate total liked count
  const likedCount = messages.filter(msg => msg.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <section id="heartWidget">
          {likedCount} ❤️s
        </section>
      </header>
      <main>
        {/* Pass the updated messages and toggle handler */}
        <ChatLog entries={messages} onLikeToggle={onLikeToggle} />
      </main>
    </div>
  );
};

export default App;
