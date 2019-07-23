import { HubConnectionBuilder } from '@aspnet/signalr';
const hub = new HubConnectionBuilder().withUrl('/chat').build();
export default hub;
//# sourceMappingURL=hub.js.map