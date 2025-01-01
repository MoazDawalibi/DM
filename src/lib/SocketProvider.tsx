const BASE_URL = "ws://localhost:5000";

import { io, Socket } from "socket.io-client";

var socket: null | Socket = null;
export const getSocket = () => {
  if (!socket) {
    socket = io(BASE_URL, {
      autoConnect: true,
      transports: ["websocket"],
    });
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
