import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';

const hub: HubConnection = new HubConnectionBuilder().withUrl('/chat').build();

export default hub;