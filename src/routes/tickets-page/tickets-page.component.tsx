import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MessagesTable from "../../components/messages-table/messages-table.component";

import Wrapper from "../../components/wrapper/wrapper.component";
import {
  Category,
  CategoryItem,
  MESSAGES_DATA_TYPES,
} from "../../store/messages/messages.types";
import { RootState } from "../../store/store";

const TicketsPage: React.FC = function TicketsPage() {
  const [messages, setMessages] = useState<CategoryItem[]>([]);
  const data = useSelector((state: RootState) => state.messages.messages);

  const rows = ["Message details", "Customer name", "Date", "Priority", ""];
  const selected = [
    MESSAGES_DATA_TYPES.message,
    MESSAGES_DATA_TYPES.name,
    MESSAGES_DATA_TYPES.date,
    MESSAGES_DATA_TYPES.priority,
  ];

  useEffect(() => {
    if (data.length > 0) {
      const messagesObj: Category = data[0];
      setMessages(messagesObj.items);
    }
  }, [data]);

  return (
    <Wrapper>
      <MessagesTable rows={rows} data={messages} selected={selected} />
    </Wrapper>
  );
};

export default TicketsPage;
