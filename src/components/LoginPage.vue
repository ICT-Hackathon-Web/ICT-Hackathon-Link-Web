<template>
  <div class="login-wrapper">
    <div class="login-box">
      <div class="login-title">
        <img src="@\assets\ui_img08.png" class="login-logo" />
      </div>

      <form @submit.prevent="handleLogin">
        
        <div class="input_item id">
          <input type="text" id="id" v-model="id" placeholder="ID" />
        </div>
        <div class="input_item pw">
          <input type="password" id="pw" v-model="pw" placeholder="PASSWORD" />
        </div>
        <p v-if="showError" class="empty">아이디 또는 비밀번호를 입력하세요</p>
        <button type="submit" class="login-btn">로그인</button>
      </form>
      <p class="signup-text">
        아직 회원이 아니신가요? <a href="/signup">회원가입</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      id: '',
      pw: '',
      showError: false,
    };
  },
  methods: {
    handleLogin() {
      if (!this.id | !this.pw) {
        this.showError = true;
      } else {
        this.showError = false;
      }
      if (this.id == 'admin' && this.pw == '1234') {
        alert('로그인 성공');
      } else {
        if (this.showError == false) {
          alert('로그인 실패');
        }
      }
      // 실제 로그인 처리 로직 연결
      console.log('ID:', this.id);
      console.log('PW:', this.pw);
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/background.png');
  background-size: cover; /* 이미지 꽉 채우기 */
  background-position: center; /* 가운데 정렬 */
  background-repeat: no-repeat;
}

.login-box {
  background-color: #ffffff;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  width: 500px;
  height: auto;
  text-align: center;
}
.login-title {
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  gap: 12px; /* 이미지와 텍스트 사이 간격 */
  margin-bottom: 20px;
}

.login-logo {
  height: 80px;
}

.input_item {
  position: relative;
  padding: 20px 15px 8px;
  border: 1px solid #c5ccd2;
  border-radius: 8px;
  box-sizing: border-box;
  z-index: 100;

  width: 70%;
  height: 50px;
  margin: 0 auto;
}

.input_item.id {
  border-radius: 8px 8px 0 0;
}

.input_item.pw {
  border-top: 0;
  border-radius: 0 0 8px 8px;
}

input {
  display: block;
  width: 100%;
  height: 70%;
  padding: 5px;
  font-size: 16px;
  border: none;
  outline: none;
  box-sizing: border-box;
}

.empty {
  font-family: 'Nanum Gothic', sans-serif;
  color: red;
  font-size: 12px;
}

.login-btn {
  width: 40%;
  padding: 10px;
  background-color: #060947;
  color: #ffffff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-top: 5%;
}

.signup-text {
  font-family: 'Nanum Gothic', sans-serif;
  margin-top: 40px;
  font-size: 12px;
  color: #5a5959;
}

.signup-text a {
  font-family: 'Nanum Gothic', sans-serif;
  margin-left: 5px;
  text-decoration: none;
  font-weight: bold;
  color: #2b2b2b;
}
</style>
