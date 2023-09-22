import React, { useEffect, useRef, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../Styles/Chat.css";

export const Chat = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const currentMessage = useRef("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(messagesRef, orderBy("createdAt"));
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messagesList = [];
      snapshot.forEach((doc) => {
        messagesList.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messagesList);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage === "") return;

    await addDoc(messagesRef, {
      createdAt: serverTimestamp(),
      text: newMessage,
      user: auth.currentUser.displayName,
    });
    setNewMessage("");
  };
  console.log(auth.currentUser);
  return (
    <div className="chat-container">
      <div className="message-container">
        {messages.map((message) => (
          <div>
            {auth.currentUser.displayName === message.user ? (
              <span className="message-right">
                <img alt="User Photo" src={auth.currentUser.photoURL} />
                <p id="user-name">{message.user} :</p>
                <h4>{message.text}</h4>
              </span>
            ) : (
              <span>
                <img alt="User Photo" src={auth.currentUser.photoURL} />
                <p id="user-name">{message.user} :</p>
                <h4>{message.text}</h4>
              </span>
            )}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          className="new-message-input"
          placeholder="Type In a Message..."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button className="send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
