export interface Message {
  type: "incoming" | "outgoing";
  text: string;
}
