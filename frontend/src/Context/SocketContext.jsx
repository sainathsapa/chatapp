import React, { createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:8080";
const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = useMemo(() => io(ENDPOINT), []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => {
  const socket = useContext(SocketContext);
  if (!socket) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return socket;
};
