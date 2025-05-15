<template>
  <div class="main-container">
    <header class="header">
      <img
        src="https://www.suwon.ac.kr/usr/images/suwon/logo.png"
        class="logo"
      />
      <nav>
        <div class="center-menu">
          <a href="#">대학 안내</a>
          <div class="divider"></div>
          <a href="#">학과 안내</a>
          <div class="divider"></div>
          <a href="#">정보 광장</a>
          <div class="divider"></div>
          <a href="#">공지</a>
        </div>
        <div class="right-menu">
          <a class="mini">register</a>
          <a class="mini">login</a>
          <span class="search">🔍</span>
        </div>
      </nav>
    </header>

    <section class="club-section">
      <h1>동아리</h1>
      <div class="club-list">
        <div class="club-card" v-for="(club, index) in clubs" :key="index">
          <img :src="club.image" alt="club image" class="club-image" />
          <h3>{{ club.name }}</h3>
          <p>{{ club.description }}</p>
        </div>
      </div>
    </section>
    <img class="chatbot-icon" src="@/assets/chatbot-icon.png" alt="chatbot" />
  </div>
</template>

<script>
export default {
  name: 'ClubInfo',
  data() {
    return {
      clubs: [
        {
          name: 'Flag',
          description: '보안과 해킹 관련 학습 동아리입니다.',
          image: require('@/assets/InfoCom.png'),
        },
        {
          name: 'DNA',
          description: 'AI 및 데이터 분석 중심의 프로젝트 동아리.',
          image: require('@/assets/InfoCom.png'),
        },
        {
          name: 'semico',
          description: '하드웨어 및 임베디드 시스템 동아리.',
          image: require('@/assets/InfoCom.png'),
        },
        {
          name: 'WriteUp',
          description: 'CTF 및 보안 문제풀이 활동 동아리.',
          image: require('@/assets/InfoCom.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-family: 'Nanum Gothic', sans-serif;
}

.main-container {
  background-image: url('@/assets/background1.png');
  background-size: cover; /* 이미지를 요소에 맞게 꽉 채움 */
  background-repeat: no-repeat; /* 반복 안 함 */
  background-position: center; /* 가운데 정렬 */
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  padding: 1.3rem 2rem;
  background-color: #1b1d53;
  color: white;
}
.logo {
  height: 40px;
  margin-right: 2rem;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}
.center-menu {
  display: flex;
  justify-content: center;
  gap: 50px;
  transform: translateX(25rem);
}
.center-menu a {
  color: white;
  padding: 0 10px;
  text-decoration: none;
}
.divider {
  height: 20px;
  width: 1px;
  background-color: white;
  opacity: 0.6;
}
.right-menu {
  display: flex;
  gap: 10px;
}
.right-menu a {
  font-size: 0.8rem;
  color: #aaa;
  text-decoration: none;
}
.search {
  font-size: 1.2rem;
  color: white;
}
.mini {
  font-size: 0.8rem;
  color: #aaa;
}

.club-section {
  padding: 2rem;
  text-align: center;
}
.club-section h1 {
  font-size: 2rem;
  margin-bottom: 4rem;
  border-bottom: 2px solid white;
  display: inline-block;
  padding-bottom: 0.5rem;
  color: white;
}

.club-list {
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
}

.club-card {
  width: 280px;
  text-align: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.club-image {
  width: 250px;
  height: 400px;
  object-fit: contain;
}
.club-card h3 {
  margin: 0.8rem 0 0.3rem;
  font-weight: bold;
}
.club-card p {
  font-size: 0.9rem;
  color: #333;
}
.chatbot-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
}
</style>
