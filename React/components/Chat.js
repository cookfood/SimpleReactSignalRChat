import { HubConnectionState } from '@aspnet/signalr';
import { useStoreActions, useStoreState } from 'easy-peasy';
import * as React from 'react';
import hub from '../hub/hub';
export const Chat = () => {
    const { msgs } = useStoreState((state) => state.chat);
    const { addMsg, sendMsg } = useStoreActions((actions) => actions.chat);
    const [input, setInput] = React.useState('');
    React.useEffect(() => {
        hub.start();
        hub.on('sendMessage', msg => addMsg(msg));
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null,
            "Status: ",
            hub.state === HubConnectionState.Connected ? 'Connected!' : 'Disconnected.'),
        React.createElement("button", { onClick: () => hub.start() }, "Connect"),
        React.createElement("button", { onClick: () => hub.stop() }, "Disconnect"),
        React.createElement("input", { type: 'text', value: input, onChange: e => setInput(e.target.value) }),
        React.createElement("p", null,
            "Input: ",
            input),
        React.createElement("button", { onClick: () => sendMsg(input) }, "Send"),
        msgs.map(m => React.createElement("p", null, m))));
};
//# sourceMappingURL=Chat.js.map