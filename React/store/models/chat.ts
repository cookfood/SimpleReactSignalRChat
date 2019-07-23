import { action, thunk } from 'easy-peasy';
import hub from "../../hub/hub";
import { ChatState } from "../types";

const chat: ChatState = {
    msgs: [],
    addMsg: action((state, payload) => {
        state.msgs.push(payload);
    }),
    sendMsg: thunk(async (actions, payload) => {
        await hub.send('sendMessage', payload);
    })
}

export default chat;