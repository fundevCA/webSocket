const socket = new WebSocket("ws://localhost:8080");

//Listen for messages
socket.onmessage = ({ data }) => {
  console.log(`From app: ${data}`);
};

document.querySelector("button").onclick = () => {
  socket.send("Hey server");
};
