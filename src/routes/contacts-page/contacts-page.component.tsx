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

const ContactsPage: React.FC = function ContactsPage() {
  const [messages, setMessages] = useState<CategoryItem[]>([]);
  const data = useSelector((state: RootState) => state.messages.messages);

  const rows = ["Customer name", "Email", "Address", "Created At", ""];
  const selected = [
    MESSAGES_DATA_TYPES.name,
    MESSAGES_DATA_TYPES.email,
    MESSAGES_DATA_TYPES.address,
    MESSAGES_DATA_TYPES.date,
  ];

  useEffect(() => {
    if (data.length > 0) {
      const messagesObj: Category = data[0];
      setMessages(messagesObj.items);
    }
  }, [data]);

  return (
    <Wrapper>
      <MessagesTable
        rows={rows}
        data={messages}
        selected={selected}
        perPageVariants={[8, 4, 2]}
        filterItems={[
          { title: "Filter by name", data: "name" },
          { title: "Filter by date", data: "date" },
          { title: "Filter by email", data: "email" },
          { title: "Filter by address", data: "address" },
          { title: "Clear filter", data: "none" },
        ]}
      />
    </Wrapper>
  );
};

export default ContactsPage;
