<template>
  <div class="signup-wrapper">
    <div class="signup-box">
      <h2>회원가입</h2>

      <form @submit.prevent="handleSignup">
        <div class="form-group">
          <label for="id">아이디</label>
          <input type="text" id="id" v-model="id" placeholder="아이디" />
        </div>
        <div class="form-group">
          <label for="pw">비밀번호</label>
          <input type="password" id="pw" v-model="pw" placeholder="비밀번호" />
        </div>
        <div class="form-group">
          <label for="repw">비밀번호 재입력</label>
          <input
            type="password"
            id="repw"
            v-model="repw"
            placeholder="비밀번호 재입력"
          />
        </div>
        <div class="form-group">
          <label for="name">이름</label>
          <input type="text" id="name" v-model="name" placeholder="이름" />
        </div>
        <div class="form-group">
          <label for="email">이메일</label>
          <div class="email-row">
            <input
              type="text"
              id="email"
              v-model="email"
              placeholder="이메일"
            />
            <button type="button" class="email-btn" @click="numBox = true">
              인증번호 전송
            </button>
          </div>
        </div>
        <div v-if="numBox" class="num">
          <input type="text" v-model="number" placeholder="인증번호 입력" />
          <button type="button" class="numCheck" @click="handleVerification">
            인증하기
          </button>
        </div>
        <p v-if="check" class="checkmessage">인증 되었습니다</p>
        <p v-if="checkerror" class="checkempty">인증 실패하였습니다</p>

        <p v-if="showError" class="empty">모든 항목을 입력하세요</p>
        <button type="submit" class="signup-btn">등록</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
  data() {
    return {
      id: '',
      pw: '',
      repw: '',
      name: '',
      email: '',
      number: '',
      showError: false,
      numBox: false,
      check: false,
      checkerror: false,
      correctCode: '123456',
    };
  },
  methods: {
    handleSignup() {
      if (!this.id | !this.pw | !this.repw | !this.name | !this.email) {
        this.showError = true;
      } else {
        this.showError = false;
      }
      if (this.showError == false && this.check == true) {
        alert('회원가입이 완료되었습니다!');
      }

      console.log('회원가입 정보:', {
        id: this.id,
        pw: this.pw,
        repw: this.repw,
        name: this.name,
        email: this.email,
      });
    },
    handleVerification() {
      if (this.number === this.correctCode) {
        this.check = true;
        this.checkerror = false;
        this.numBox = false;
      } else {
        this.check = false;
        this.checkerror = true;
      }
    },
  },
};
</script>

<style scoped>
.signup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../assets/background.png');
  background-size: cover; /* 이미지 꽉 채우기 */
  background-position: center; /* 가운데 정렬 */
  background-repeat: no-repeat;
}

.signup-box {
  background-color: #ffffff;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  width: 400px;
  height: 600px;
  text-align: center;
}

h2 {
  font-family: 'Nanum Gothic', sans-serif;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center; /* 내부 요소들을 수직 가운데 정렬 */
  width: 100%;
  margin-bottom: 20px;
}

label {
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  margin-bottom: 7px;
  width: 70%; /* 너비만 고정 */
  text-align: left; /* 글자 자체는 왼쪽 정렬 */
}

input {
  font-family: 'Nanum Gothic', sans-serif;
  width: 70%; /* label과 같은 너비 */
  padding: 8px;
  box-sizing: border-box;
}

.signup-btn {
  width: 70px;
  height: 60%;
  font-family: 'Nanum Gothic', sans-serif;
  padding: 10px;
  background-color: #060947;
  color: #ffffff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 4px;
}

.email-row {
  display: flex;
  justify-content: center;
  gap: 10px; /* 입력창과 버튼 사이 간격 */
  width: 70%;
}

.email-row input {
  flex: 2;
}

.email-row .email-btn {
  width: 70px;
  flex: 1;
  padding: 8px;
  font-family: 'Nanum Gothic', sans-serif;
  background-color: #5e5e5e;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}
.checkmessage {
  font-family: 'Nanum Gothic', sans-serif;
  color: rgb(8, 0, 255);
  font-size: 14px;
}
.empty {
  font-family: 'Nanum Gothic', sans-serif;
  color: red;
  font-size: 12px;
}
.checkempty {
  font-family: 'Nanum Gothic', sans-serif;
  color: red;
  font-size: 14px;
}
.num {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* 입력창과 버튼 사이 간격 */
  width: 70%;
  margin: 0 auto;
}

.num input {
  flex: 2;
  padding: 8px;
  box-sizing: border-box;
}

.num .numCheck {
  flex: 1;
  height: 38px;
  padding: 8px;
  font-family: 'Nanum Gothic', sans-serif;
  background-color: #5e5e5e;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}
</style>
