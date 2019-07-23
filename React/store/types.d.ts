import { Action, Thunk } from "easy-peasy";

export interface AppState {
    chat: ChatState;
}

export interface ChatState {
    msgs: string[];
    addMsg: Action<ChatState, string>;
    sendMsg: Thunk<ChatState, string>;
}