import React from "react";
import { Box, Skeleton, TableCell, TableRow } from "@mui/material";
import messageSkeletonStyle from "./message-skeleton.styles";

type MessagesSkeletonType = {
  rows: string[];
};

const MessageSkeleton: React.FC<MessagesSkeletonType> =
  function MessageSkeleton({ rows }) {
    return (
      <TableRow>
        {rows.map((item, index) => {
          if (index === 0) {
            return (
              <TableCell key={item} sx={messageSkeletonStyle.cell}>
                <Box sx={messageSkeletonStyle.avatar}>
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={44}
                    height={44}
                  />
                  <Skeleton animation="wave" height={30} width="40%" />
                </Box>
              </TableCell>
            );
          }
          if (item.toLowerCase() === "priority") {
            return (
              <TableCell key={item} sx={messageSkeletonStyle.cell}>
                <Skeleton
                  animation="wave"
                  height={30}
                  width="40%"
                  sx={{ margin: "auto" }}
                />
              </TableCell>
            );
          }
          return (
            <TableCell key={item} sx={messageSkeletonStyle.cell}>
              <Skeleton
                animation="wave"
                height={30}
                width="40%"
                color="secondary"
              />
            </TableCell>
          );
        })}
      </TableRow>
    );
  };

export default MessageSkeleton;
