import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Wrapper from "../../components/wrapper/wrapper.component";
import { Category, CategoryItem } from "../../store/messages/messages.types";
import { RootState } from "../../store/store";

const MessageDetailsPage: React.FC = function MessageDetailsPage() {
  const { messageId } = useParams<{ messageId: string }>();
  const data = useSelector((state: RootState) => state.messages.messages);
  const [message, setMessage] = useState<CategoryItem | undefined>();

  useEffect(() => {
    if (data.length > 0) {
      const messagesObj: Category = data[0];
      const messages = messagesObj.items;
      const selectedMessage = messages.find(
        (item) => item.id === Number(messageId),
      );
      setMessage(selectedMessage);
    }
  }, []);

  return (
    <Wrapper>
      {message ? (
        <Box>
          <Avatar
            alt={message.name}
            src={message.avatar}
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="h2">User name: {message.name}</Typography>
          <Typography variant="body1">Date: {message.date}</Typography>
          <Typography variant="body1">
            Problem priority: {message.priority}
          </Typography>

          <Typography variant="body1">Email: {message.email}</Typography>
          <Typography variant="body1">
            Problem description : {message.message}
          </Typography>

          <Typography variant="body1">
            User address: {message.address}
          </Typography>
        </Box>
      ) : (
        <h2>Message not found</h2>
      )}
    </Wrapper>
  );
};

export default MessageDetailsPage;
