import React, { useState } from "react";
import "./App.css";
import { FormControl, Button, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
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
        <Message message={message} />
      ))}
    </div>
  );
}

export default App;
