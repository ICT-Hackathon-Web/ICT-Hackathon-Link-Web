<template>
  <div class="signup-wrapper">
    <div class="signup-box">
      <h2>회원가입</h2>

      <form @submit.prevent="handleSignup">
        <!-- 아이디 + 중복확인 -->
        <div class="form-group">
          <label for="id">아이디</label>
          <div class="id-check-row">
            <input type="text" id="id" v-model="id" placeholder="아이디(5~13자 입력)" />
            <button type="button" class="check-btn" @click="checkId">중복확인</button>
          </div>
          <p v-if="idMessage" :class="{ success: idAvailable, error: !idAvailable }">
            {{ idMessage }}
          </p>
        </div>

        <div class="form-group">
          <label for="pw">비밀번호</label>
          <input type="password" id="pw" v-model="pw" placeholder="비밀번호(영어, 숫자, 특수문자 모두 포함)" />
        </div>

        <div class="form-group">
          <label for="repw">비밀번호 재입력</label>
          <input type="password" id="repw" v-model="repw" placeholder="비밀번호 재입력" />
        </div>

        <div class="form-group">
          <label for="name">이름</label>
          <input type="text" id="name" v-model="name" placeholder="이름" />
        </div>

        <div class="form-group">
          <label for="email">이메일</label>
          <div class="email-row">
            <input type="text" id="email" v-model="email" placeholder="이메일" />
            <button type="button" class="email-btn" @click="numBox = true">인증번호 전송</button>
          </div>
        </div>

        <div v-if="numBox" class="num">
          <input type="text" v-model="number" placeholder="인증번호 입력" />
          <button type="button" class="numCheck" @click="handleVerification">인증하기</button>
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
      idAvailable: false,
      idMessage: '',
    };
  },
  methods: {
  async checkId() {
    if (!this.id) {
      this.idAvailable = false;
      this.idMessage = '아이디를 입력하세요.';
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/check-id?id=${this.id}`);
      if (response.status === 409) {
        this.idAvailable = false;
        this.idMessage = '이미 사용 중인 아이디입니다.';
      } else if (response.status === 201) {
        this.idAvailable = true;
        this.idMessage = '사용 가능한 아이디입니다.';
      } else {
        this.idAvailable = false;
        this.idMessage = '알 수 없는 응답입니다.';
      }
    } catch (error) {
      console.error('중복확인 오류:', error);
      this.idAvailable = false;
      this.idMessage = '서버 오류가 발생했습니다.';
    }
  },

  handleSignup() {
    if (!this.id || !this.pw || !this.repw || !this.name || !this.email) {
      this.showError = true;
      return;
    }

    this.showError = false;

    // 아이디 길이 검사
    if (this.id.length < 5 || this.id.length > 13) {
      alert('아이디는 5자 이상 13자 이하로 입력해주세요.');
      return;
    }

    // 비밀번호 복잡도 검사
    const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#?*^]).{1,}$/;
    if (!pwRegex.test(this.pw)) {
      alert('비밀번호는 영어, 숫자, 특수문자(!, ?, @, #, *, ^)를 모두 포함해야 합니다.');
      return;
    }

    if (this.pw !== this.repw) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!this.idAvailable) {
      alert('아이디 중복확인을 해주세요.');
      return;
    }

    if (!this.check) {
      alert('이메일 인증을 완료해주세요.');
      return;
    }

    alert('회원가입이 완료되었습니다!');
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
}
};
</script>

<style scoped>
.signup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.signup-box {
  background-color: #ffffff;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  width: 30%;
  height: auto;
  text-align: center;
}

h2 {
  font-family: 'Nanum Gothic', sans-serif;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

label {
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  margin-bottom: 7px;
  width: 70%;
  text-align: left;
}

input {
  font-family: 'Nanum Gothic', sans-serif;
  width: 70%;
  padding: 8px;
  box-sizing: border-box;
}

.id-check-row {
  display: flex;
  gap: 10px;
  width: 70%;
}

.check-btn {
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

.success {
  color: blue;
  font-size: 12px;
}

.error {
  color: red;
  font-size: 12px;
}

.email-row {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 70%;
}

.email-row input {
  flex: 2;
}

.email-btn {
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
  font-size: 13px;
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
  gap: 10px;
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
</style>