import { Socket } from "socket.io-client";
import IMessage from "./IMessage";
export default interface ISocketContext {
	socket: Socket | undefined;
	messages: IMessage[];
}
