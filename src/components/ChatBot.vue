<template>
  <div class="chatbot-container" :class="{ open: isOpen }">
    <div class="chat-header">
        <div class="title"><img class="icon" src="@/assets/chatbot-icon.png">Suri</div>
        <img class="close" src="@/assets/close.png" @click="$emit('close')">
    </div>

    <div class="chat-body" >
      <div class="messages">
        <div
            v-for="(msg, index) in messages"
            :key="index"
            :class="['message-bubble', msg.sender]"
        >
            {{ msg.text }}
        </div>
      </div>

      <div class="chat-input">
        <input v-model="input" @keydown.enter="sendMessage" placeholder="메시지를 입력하세요..." />
        <button @click="sendMessage">전송</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'ChatBot',
  emits: ['close'], 
  data() {
    return {
      isOpen: false,
      input: '',
      messages: [
        { sender: 'bot', text: '안녕하세요! 무엇을 도와드릴까요?' }
      ]
    };
  },
  methods: {
    toggleChat() {
      this.isOpen = !this.isOpen;
    },
    sendMessage() {
      if (this.input.trim()) {
        const userText = this.input;
        this.messages.push({ sender: 'user', text: userText });
        this.input = '';
        this.sendToServer(userText); // ✅ 여기서 자동으로 서버에 전송!
      }
    },
    async sendToServer(userMessage) {
      try {
        const response = await axios.post('http://localhost:5000/chat', {
          message: userMessage,
        });

        this.messages.push({ sender: 'bot', text: response.data.reply });
      } catch (error) {
        this.messages.push({ sender: 'bot', text: '죄송합니다. 오류가 발생했어요.' });
        console.error('서버 통신 오류:', error);
      }
    }
  },

};
</script>

<style scoped>
* {
  font-family: 'Nanum Gothic', sans-serif;
}

.chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40%;
  font-family: sans-serif;
  z-index: 10;
}
.chat-header {
  display: flex;
  justify-content: space-between; /* 좌우 정렬 */
  align-items: center;
  background-color: #1b1d53;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

.title {
  display: flex;
  align-items: center;
}

.close {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.icon {
  width: 40px;
  height: 24px;
  margin-right: 8px;
}
.chat-body {
  background-color: white;
  border: 1px solid #ccc;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
}
.messages {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  overflow-y: auto;
  max-height: 500px;
}

/* 기본 말풍선 스타일 */
.message-bubble {
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 18px;
  line-height: 1.4;
  word-break: break-word;
  display: inline-block;
}

/* 사용자 메시지 (오른쪽 정렬) */
.user {
  align-self: flex-end;
  background-color: #1b1d53;
  color: white;
  border-bottom-right-radius: 0;
}

/* 챗봇 메시지 (왼쪽 정렬) */
.bot {
  align-self: flex-start;
  background-color: #f1f1f1;
  color: #000;
  border-bottom-left-radius: 0;
}

.chat-input {
  display: flex;
  border-top: 1px solid #ccc;
  border-radius: 0 20px 0 20px;
  height: 10%;
}
.chat-input input {
  flex: 1;
  border: none;
  padding: 10px;
  outline: none;
  border-radius: 15px;
}
.chat-input button {
  background-color: #1b1d53;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 0 0 10px 0;
}


</style>
