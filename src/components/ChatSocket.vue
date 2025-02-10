<template>
    <div>
      <h2>Chat Room</h2>
      <br />
      <input v-model="pseudo" placeholder="Entrez votre pseudo" />
      <br />
      <br />
      <button @click="joinRoom">Rejoindre</button>

      <div v-if="joined">
        <div v-for="msg in messages" :key="msg.dateEmis">
          <strong>{{ msg.pseudo }}:</strong> {{ msg.content }} ({{ msg.dateEmis }})
        </div>

        <input v-model="message" placeholder="Écrire un message" />
        <button @click="sendMessage">Envoyer</button>
      </div>
    </div>
  </template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { io, Socket } from 'socket.io-client';

  interface Message {
    pseudo: string;
    content: string;
    dateEmis: string;
  }

export default defineComponent({
  setup() {
    const socket = ref<Socket | null>(null);
    const pseudo = ref<string>('');
    const message = ref<string>('');
    const messages = ref<Message[]>([]);
    const joined = ref<boolean>(false);
    const roomId = 'general';

    const joinRoom = () => {
      console.log('Tentative de connexion...');
      socket.value = io('https://mohammedelmehdi.makhlouk.angers.mds-project.fr:40220', {
        transports: ['websocket'],
      });

      socket.value.on('connect', () => {
        console.log('Connecté au serveur Socket.IO');
      });

      socket.value.on('connect_error', (error) => {
        console.error('Erreur de connexion au serveur:', error);
      });

      socket.value.emit('chat-join-room', {
        pseudo: pseudo.value,
        roomId,
      });

      socket.value.on('chat-msg', (data: Message) => {
        console.log('Message reçu :', data);
        messages.value.push(data);
      });

      joined.value = true;
    };

    const sendMessage = () => {
      if (!message.value.trim()) {
        console.error('Le message est vide, il ne sera pas envoyé');
        return;
      }

      const msgData = {
        pseudo: pseudo.value,
        content: message.value,
        roomId,
      };

      console.log('Envoi du message:', msgData);
      socket.value?.emit('chat-msg', msgData);
      message.value = '';
    };

    return {
      pseudo,
      message,
      messages,
      joined,
      joinRoom,
      sendMessage,
    };
  },
});
</script>

  <style scoped>
  div {
    color: #0767a3;
  }
  button {
    padding: 10px 15px;
    font-size: 11px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
    font-weight: 500;
  }
  button:hover {
    background-color: #da098d;
  }
  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
  }
  </style>
