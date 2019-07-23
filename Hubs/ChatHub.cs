namespace SignalRTestApp.Hubs
{
    using Microsoft.AspNetCore.SignalR;
    using System;
    using System.Threading.Tasks;

    public class ChatHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            Clients.All.SendAsync("sendMessage", $"{Context.ConnectionId} joined the chat.").Wait();
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            Clients.All.SendAsync("sendMessage", $"{Context.ConnectionId} left the chat.").Wait();
            return base.OnDisconnectedAsync(exception);
        }

        public Task SendMessage(string msg)
        {
            return Clients.All.SendAsync("sendMessage", $"{Context.ConnectionId} says: {msg}");
        }
    }
}
