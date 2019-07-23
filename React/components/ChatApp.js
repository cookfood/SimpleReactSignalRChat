import { StoreProvider } from 'easy-peasy';
import * as React from 'react';
import { store } from '../store/store';
import { Chat } from './Chat';
export const ChatApp = () => {
    return (React.createElement(StoreProvider, { store: store },
        React.createElement(Chat, null)));
};
//# sourceMappingURL=ChatApp.js.map