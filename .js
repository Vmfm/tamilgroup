supabase
  .channel('messages_channel')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'messages',
    },
    (payload) => {
      // Add new message to the chat instantly
      const msg = payload.new;
      addMessageToDOM(msg.username, msg.message, msg.created_at);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  )
  .subscribe();
