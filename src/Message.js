import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message__card ${isUser && "message_user"}`}>
      <Card className={`${isUser ? "current_user" : "guest_user"}`}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {!isUser && `${message.username || "Unknown User"}:`}{" "}
            {message.message}d
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
