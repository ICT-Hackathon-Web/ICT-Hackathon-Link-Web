<template>
  <div class="main-container">
    <header
      class="header"
      @mouseleave="hideAllDropdowns"
      @mouseenter="navHovered = true"
    >
      <img
        src="https://www.suwon.ac.kr/usr/images/suwon/logo.png"
        class="logo"
        @click="navigateTo('Main')"
        style="padding: 1.3rem 2rem"
      />

      <nav>
        <!-- 대학 안내 -->
        <div class="center-menu">
          <a class="intro" @click="navigateTo('introCollege')" style="cursor: pointer"
            >대학 안내</a
          >
          <div class="divider"></div>

          <!-- 학과 안내 -->
          <div
            class="department-wrapper"
            @mouseenter="activeDropdown = 'department'"
          >
            <a class="department" style="cursor: default">학과 안내</a>
            <div
              class="dropdown"
              v-show="activeDropdown === 'department'"
              @mouseenter="navHovered = true"
              @mouseleave="hideAllDropdowns"
            >
              <div
                class="department-block"
                v-for="(dept, index) in departments"
                :key="index"
              >
                <h4 @click="navigateToMajor(dept.name)" style="cursor: pointer">
                  {{ dept.name }}
                </h4>

                <ul v-if="dept.majors.length">
                  <li
                    v-for="(major, idx) in dept.majors"
                    :key="idx"
                    @click="navigateToMajor(major)"
                    style="cursor: pointer"
                  >
                    {{ major }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <!-- 정보 광장 -->
          <div class="department-wrapper" @mouseenter="activeDropdown = 'info'">
            <a class="information" style="cursor: default">정보 광장</a>
            <div
              class="dropdown dropdown-info"
              v-show="activeDropdown === 'info'"
              @mouseenter="navHovered = true"
              @mouseleave="hideAllDropdowns"
            >
              <div class="department-block">
                <ul>
                  <li @click="navigateTo('schedulePage')">학사일정</li>
                  <li @click="navigateTo('ClubPage')">동아리</li>
                  <li @click="navigateTo('lostArticle')">분실물</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <a
            class="announcememt"
            @click="navigateTo('announcement')"
            style="cursor: pointer"
            >공지</a
          >
        </div>
      </nav>
      <div class="right-menu">
        <a
          class="login"
          @click="navigateTo('LoginPage')"
          style="cursor: pointer"
          >login</a
        >
        <img
          class="searchBar"
          src="@/assets/SearchBarIcon.png"
          @click="navigateTo('search')"
          alt="SearchBar"
          style="cursor: pointer"
        />
      </div>
    </header>
    <!-- 여기까지 -->

    <section class="top-section">
      <img
        class="calendar"
        src="@/assets/calender_may.png"
        @click="navigateTo('schedulePage')"
        alt="Calendar"
      />

      <div class="cards">
        <div class="card computerSW-card" @click="navigateTo('computerPage')">
          <h2>컴퓨터학부</h2>
          <hr />
          <p>지능형SW융합대학<br />컴퓨터학부를 안내드립니다.</p>
        </div>
        <div class="card DataScience-card" @click="navigateTo('dataScience')">
          <h2>데이터과학부</h2>
          <hr />
          <p>지능형SW융합대학<br />데이터과학부를 안내드립니다.</p>
        </div>
        <div
          class="card InfoCommunication-card"
          @click="navigateTo('infoCommunication')"
        >
          <h2>정보통신학부</h2>
          <hr />
          <p>지능형SW융합대학<br />정보통신학부를 안내드립니다.</p>
        </div>
      </div>
    </section>

    <div class="slider-container">
      <div class="slider-items">
        <div
          v-for="(item, index) in visibleItems"
          :key="index"
          class="slider-item"
        >
          <h3
            class="schoolSite"
            @click="navigateToSite(item.title)"
            navigateToSite
          >
            {{ item.title }}
          </h3>
        </div>
      </div>
    </div>
    <img class="chatbot-icon"  src="@/assets/chatbot-icon.png" alt="chatbot" @click="showChat = !showChat"/>
    
    <ChatBot v-if="showChat" @close="showChat = false" />
    <footer>
      <div class="container">
      <!-- <div class="fnb">
        <ul class="inGuideFnb"><li><a href="" title="새창" target="_blank" class="a_1">개인정보처리방침</a></li><li><a href="https://www.konkuk.ac.kr/konkuk/13291/subview.do" title="새창" target="_blank">개인정보제공내역공지</a></li><li><a href="https://www.konkuk.ac.kr/konkuk/13292/subview.do" title="새창" target="_blank">정보공개</a></li><li><a href="https://www.konkuk.ac.kr/konkuk/2263/subview.do" title="새창" target="_blank">예결산공고</a></li><li><a href="https://www.academyinfo.go.kr/pubinfo/pubinfo1600/doInit.do?schlId=0000052" title="새창" target="_blank">대학정보공시</a></li><li><a href="https://www.konkuk.ac.kr/konkuk/13293/subview.do" title="새창" target="_blank">이메일주소 무단수집거부</a></li><li><a href="https://www.konkuk.ac.kr/konkuk/2063/subview.do" title="새창" target="_blank">찾아오시는길</a></li></ul>
      </div> -->
      <div class="wrap">
        <div class="foot_info">
        <address>
          18323 경기도 화성시 봉담읍 와우안길 17   <span>Tel :  031-220-2114</span>
        </address>
        <p><span>Copyright (C) THE UNIVERSITY OF SUWON. </span>All rights reserved.</p>
        </div>
        <div class="foot_sns">
        <ul>
              <li class="n_blog"><a title="수원대학교 블로그" href="https://blog.naver.com/usw1982" target="_blank"><img src="@/assets/blog.png"></a></li>
              <li class="facebook"><a title="수원대학교 페이스북" href="https://www.facebook.com/SuwonUniv/" target="_blank"><img src="@/assets/facebook.png"></a></li>
              <li class="instagram"><a title="수원대학교 인스타그램" href="https://www.instagram.com/usw1982/" target="_blank"><img src="@/assets/insta.png"></a></li>
              <li class="youtube"><a title="수원대학교 유튜브" href="https://www.youtube.com/channel/UC4JfyRGKu5AfBjvaFMCj3cg" target="_blank"><img src="@/assets/youtube.png"></a></li>
        </ul>
        </div>
      </div>
      </div>
	</footer>
  </div>
</template>

<script>
import ChatBot from '@/components/ChatBot.vue'
export default {
  
  name: 'MainPage',
  components: {
    ChatBot
  },
  data() {
    return {
      // 여기부터..
      activeDropdown: null, // 마우스가 어디에 올라가있는지 체크...
      navHovered: false, // nav바에 마우스가 올라갔는지 boolean으로 체크함
      showDepartments: false,
      showChat: false,
      departments: [
        {
          name: '컴퓨터학부',
          majors: ['컴퓨터SW', '미디어SW'],
        },
        {
          name: '정보통신학부',
          majors: ['정보통신학과', '정보보호학과'],
        },
        {
          name: '데이터과학부',
          majors: [],
        },
        {
          name: '클라우드융복합',
          majors: [],
        },
      ],
      // 여기까지..

      slideIndex: 0,
      allItems: [
        { title: '홈페이지' },
        { title: '캔버스' },
        { title: '수강신청사이트' },
        { title: '포털' },
      ],
    };
  },
  computed: {
    visibleItems() {
      return this.allItems.slice(this.slideIndex, this.slideIndex + 4);
    },
  },
  
  methods: {

    
    //여기부터
    navigateTo(routeName) {
      this.$router.push({ name: routeName }).catch((err) => {
        if (err.name !== 'NavigationDuplicated') {
          //동일한 경로일x 때, 오류 무시하기
          throw err;
        }
      });
    },
    navigateToMajor(majorName) {
      const routeMap = {
        컴퓨터학부: 'computerPage',
        컴퓨터SW: 'computerSW',
        미디어SW: 'mediaSW',
        정보통신학부: 'infoCommunication',
        정보통신학과: 'infoCommunicationCollege',
        정보보호학과: 'infoSecurity',
        데이터과학부: 'dataScience',
        클라우드융복합: 'CloudPage',
      };
      const route = routeMap[majorName];
      if (route) {
        this.navigateTo(route);
      } else {
        console.warn(`No route found for major: ${majorName}`);
      }
    },
    hideAllDropdowns() {
      this.activeDropdown = null;
      this.navHovered = false;
    },
    //여기까지

    navigateToSite(siteName) {
      const site = {
        홈페이지: 'https://www.suwon.ac.kr/',
        캔버스: 'https://canvas.suwon.ac.kr/',
        수강신청사이트: 'https://sugang.suwon.ac.kr/sugang/login.jsp',
        포털: 'https://portal.suwon.ac.kr/enview/index.html',
      };
      const url = site[siteName];
      if (url) {
        window.open(url, '_blank');
      } else {
        console.warn(`URL Error`);
      }
    },

    next() {
      if (this.slideIndex + 4 < this.allItems.length) this.slideIndex++;
    },
    prev() {
      if (this.slideIndex > 0) this.slideIndex--;
    },
  },
};
</script>

<style scoped>
* {
  font-family: 'Nanum Gothic', sans-serif;
}

/* 여기부터 */
.main-container {
  background-image: url('@/assets/background1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b1d53;
  color: white;
  height: 85px;
  position: relative;
}

.logo {
  height: 40px;
  margin-right: 5rem;
  cursor: pointer;
}

nav {
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center; */
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.center-menu {
  display: flex;
  gap: 50px;
}

.center-menu a {
  color: white;
  padding: 0 10px;
  position: relative;
  text-decoration: none;
}

.right-menu {
  display: flex;
  text-decoration: none;
  align-items: center;
  gap: 10px;
  color: white;
  margin-left: auto;
  margin-right: 2rem;
}

.intro:hover .announcement:hover {
  cursor: pointer;
}

.announcement {
  margin-right: 5rem;
}
.divider {
  height: 20px;
  width: 1px;
  background-color: white;
  opacity: 0.6;
}

.dropdown {
  position: absolute;
  justify-content: center;
  left: 0;
  /* transform: translateX(-50%); */
  top: 100%;
  width: 100vw;
  background-color: #2c2d4fee;
  display: flex;
  gap: 3rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: white;
  
  border-radius: 4px;
  z-index: 1000;
  height: 120px;
  
}

.dropdown-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100vw;
  height: 120px;
}

.dropdown-info .department-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.department {
  position: relative;
  color: white;
  text-decoration: none;
}

.department-block {
  min-width: 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-left: 90px; */
}

.department-block h4 {
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #666;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  white-space: nowrap;
}

.department-block ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.department-block li {
  margin-bottom: 0.3rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #ddd;
  white-space: nowrap;
}

.department-block li:hover {
  text-decoration: underline;
  color: #fff;
}

.right-menu a {
  font-size: 0.8rem;
  text-decoration: none;
}

.searchBar {
  margin-right: 10px;
}

nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}

.login .searchBar {
  display: flex;
  justify-content: center;
  gap: 5rem;
  margin-top: 2rem;
}

.login {
  margin-right: 15%;
  text-decoration: none;
  font-weight: bold;
}

.login:hover {
  text-shadow: 0 0 5px white;
}

/* 여기까지가 header CSS임. css는 여기까지 가져가면 됨. */

.calendar {
  width: 30%;
  margin-top: 15px;
  margin-left: 5%;
  opacity: 0.9;
}

.top-section {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 9rem;
}

.cards {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  margin-top: 0;
}
.card {
  position: relative;
  width: 270px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1.5rem;
  box-sizing: border-box;
}

.computerSW-card {
  background-color: rgba(0, 112, 198, 0.8); /* #0070c6 */
  color: white;
  padding-top: 2rem;
}

.DataScience-card {
  background-color: rgba(0, 62, 148, 0.8); /* #003E94 */
  color: white;
  padding-top: 2rem;
}

.InfoCommunication-card {
  background-color: #1b1d53;
  color: white;
  padding-top: 2rem;
}

.card h2 {
  font-size: 2rem;
  font-weight: bold;
}

.card hr {
  width: 30px;
  border: 2px solid white;
  margin: 1rem 0;
}

.card p {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.chatbot-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 10%; /* ✅ 기존보다 가로폭 확대 */
  height: auto; /* ✅ 높이 자동으로 비율 유지 */
  object-fit: contain; /* ✅ 이미지 전체가 보이도록 조정 */
  z-index: 10; 
}

.slider-container {
  margin-top: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 1rem;
  padding-left: 0;
  padding-right: 0;
  border-top: 2px solid white;
}

.slider-items {
  display: flex;
  gap: 1rem;
}

.slider-item {
  padding: 1rem;
  color: white;
  border-radius: 8px;
  min-width: 300px;
  text-align: center;
  z-index: 1000;
}

.schoolSite {
  cursor: pointer;
}

/*하단창*/
footer {
  background-color: #343539;
  color: #ccc;
  padding: 1rem 0.5rem;
  font-size: 0.9rem;
  line-height: 1.6
}

footer .container {
  max-width: 100%;
  margin: 0 auto;
}

footer .wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
}

footer .foot_info address {
  font-style: normal;
  color: #ccc;
}

footer .foot_info span {
  margin-left: 0.5rem;
}

footer .foot_info p {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #999;
}

footer .foot_sns ul {
  list-style: none;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 100px;
}

footer .foot_sns li a {
  color: #ccc;
  text-decoration: none;
  font-size: 0.85rem;
}

footer .foot_sns li a:hover {
  text-decoration: underline;
}

</style>
