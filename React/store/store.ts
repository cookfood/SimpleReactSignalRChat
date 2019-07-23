import { createStore } from 'easy-peasy';
import { AppState } from './types';
import chat from './models/chat';

var state: AppState = {
    chat
}

export const store = createStore(state);