import { HubConnectionState } from '@aspnet/signalr';
import { Actions, State, useStoreActions, useStoreState } from 'easy-peasy';
import * as React from 'react';
import hub from '../hub/hub';
import { AppState } from '../store/types';

export const Chat = () => {
    const { msgs } = useStoreState((state: State<AppState>) => state.chat);
    const { addMsg, sendMsg } = useStoreActions((actions: Actions<AppState>) => actions.chat);

    const [input, setInput] = React.useState('');

    React.useEffect(() => {
        hub.start();
        hub.on('sendMessage', msg => addMsg(msg));
    }, []);

    return (
        <React.Fragment>
            <p>Status: {hub.state === HubConnectionState.Connected ? 'Connected!' : 'Disconnected.'}</p>
            <button onClick={() => hub.start()}>Connect</button>
            <button onClick={() => hub.stop()}>Disconnect</button>
            <input type='text' value={input} onChange={e => setInput(e.target.value)} />
            <p>Input: {input}</p>
            <button onClick={() => sendMsg(input)}>Send</button>
            {msgs.map(m => <p>{m}</p>)}
        </React.Fragment>
    )
}