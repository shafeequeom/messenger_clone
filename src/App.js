import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Button, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const name = prompt("Please enter you name");
    setUsername(name);
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter a message</InputLabel>
          <Input
            value={input}
            type="text"
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            type="submit"
            onClick={sendMessage}
          >
            Send
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
