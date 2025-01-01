import React from "react";
import { getSocket } from "../lib/SocketProvider";

function useSocketTracker() {
  const isLocal = true;

  if (!isLocal) {
    return;
  }

  const socket = getSocket();

  socket.on("connect", () => {
    console.log("CONNECT");
  });

  socket.on("disconnect", () => {
    console.log("DISCONNECT");
  });

  socket.onAny((event, ...arg) => {
    console.log("EVENT ", event, arg);
  });
}

export default useSocketTracker;
