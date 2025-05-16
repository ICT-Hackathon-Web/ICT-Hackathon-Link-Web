<!-- 데이터과학부 -->
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
    <section class="title-section">
        <div class="wrap_sub_visual">
          <div class="container center-only">
            <p class="visual_intro"><strong>데이터과학부</strong></p>
            <p class="subtitle a">DataScience</p>
            
          </div>
        </div>
    </section>
    <section class="info-section">

      <div class="info-box">
        <h2>학부 소개</h2>
        <p>데이터과학부는 제4차 산업혁명의 필요한 전문인 양성을 적합한 교육과정을 제공한다. 이에 따라 데이터 분석에서부터 인공지능 알고리즘 개발 및 실행에 필요한 전문 지식을 익히도록 한다.</p>

        <p>데이터과학 전공에서는 데이터 처리를 위한 IT 기술과 데이터의 분석 및 의사결정, 빅데이터 처리 및 응용력 습득, 머신러닝을 위한 알고리즘, 딥러닝의 구조와 원리 및 인공지능의 알고리즘 구현 등을 가능하도록 하며, 이에 필요한 수학, 통계학 이론 및 소프트웨어 교육과정을 제공하며, 캡스톤 디자인을 통하여 사회 및 산업계에 필요한 지식 등을 학습하여 데이터 과학자로 성장할 수 있도록 한다.</p>

        <p>본 학부에서는 R과 Python 등 다양한 프로그램 언어를 실습할 수 있는 컴퓨터실을 제공하며, 머신러닝 랩을 활용할 수 있도록 하고, 산업계와의 협업으로 현장에 필요한 교육을 제공하여, 학생 스스로 데이터분석 전문가로서 비전을 설계하고 만들어 가도록 협력을 한다.</p>

        <p>본 학부의 교과과정은 새로운 문제를 도출하고 해결 능력을 갖춘 창의적 데이터 과학자를 양성하는 것이다.</p>
      </div>

      <div class="info-box">
        <h2>학과장 소개</h2>
        <div class="chair-card">
            <div class="chair-item">
            <span class="icon">👤</span> 성명 : 정진명
            </div>
            <div class="chair-item">
            <span class="icon">🏫</span> 소속 : 데이터과학부 데이터과학
            </div>
            <div class="chair-item">
            <span class="icon">📍</span> 위치 : 경상대학 918호
            </div>
            <div class="chair-item">
            <span class="icon">📞</span> 대표전화 : 031-220-2521
            </div>
            <div class="chair-item">
            <span class="icon">📠</span> FAX :
            </div>
            <div class="chair-item">
            <span class="icon">@</span> E-mail : jmjung@suwon.ac.kr
            </div>
    </div>
</div>

      <div class="info-box">
        <h2>전공 및 학위 과정</h2>
        <img src="@/assets/DataScienceMajor.png" alt="DataScienceMajor">
      </div>

      <div class="info-box">
        <h2>교수 소개</h2>
        <div class="professor-grid">
          <div class="professor-card" v-for="(prof, index) in professors" :key="index">
            <h3>
                <a :href="prof.link" target="_blank" rel="noopener noreferrer">{{ prof.name }}</a>
            </h3>
            <p class="dept">{{ prof.dept }}</p>
            <p><strong>전공 : </strong> {{ prof.major }}</p>
            <p><strong>이메일 : </strong> {{ prof.email }}</p>
            <p><strong>연구실 : </strong> {{ prof.lab }}</p>
            <p><strong>연락처 : </strong> {{ prof.phone }}</p>
          </div>
        </div>
      </div>
    </section>

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
  name: 'dataScience',
  components: {
    ChatBot
  },
  data() {
    return {
      showChat: false,
      activeDropdown: null,
      navHovered: false,
      departments: [
        { name: '컴퓨터학부', majors: ['컴퓨터SW', '미디어SW'] },
        { name: '정보통신학부', majors: ['정보통신학과', '정보보호학과'] },
        { name: '데이터과학부', majors: [] },
        { name: '클라우드융복합', majors: [] },
      ],
      professors: [
        { name: '박진우', dept: '데이터과학부', major: '통계학(표본이론)', email: 'jwpark@suwon.ac.kr', lab: '글로벌경상관 908호', phone: '-', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1931463' },
        { name: '고영미', dept: '데이터과학부', major: '수학', email: 'ymkoh@suwon.ac.kr', lab: '글로벌경상관 913호', phone: '031-220-2166', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1931467' },
        { name: '김진흠', dept: '데이터과학부', major: '다변량통계학 / 생물통계학', email: 'jkimdt65@gmail.com', lab: '글로벌경상관 904호', phone: '031-220-2394', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1961566' },
        { name: '정형철', dept: '데이터과학부', major: '통계학', email: 'jeong.hc@suwon.ac.kr', lab: '글로벌경상관 912호', phone: '031-229-8153', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1050009' },
        { name: '한경훈', dept: '데이터과학부', major: '수학', email: 'kyunghoon.han@gmail.com', lab: '글로벌경상관 917호', phone: '031-229-8156', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1110243' },
        { name: '정진명', dept: '데이터과학부', major: '생물정보학', email: 'jmjung@suwon.ac.kr', lab: '글로벌경상관 918호', phone: '031-229-8671', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1174107' },
        { name: '김남국', dept: '데이터과학부', major: '클라우드 컴퓨팅', email: 'ngkim@suwon.ac.kr', lab: '미래혁신관 414호', phone: '031-229-8655', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1174073' },
        { name: '황용득', dept: '데이터과학부', major: '생물정보학', email: 'ydhwang@suwon.ac.kr', lab: '글로벌경상관 911호', phone: '031-220-2301', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1174108' },
        { name: '안홍렬', dept: '데이터과학부', major: '바이오·의료 인공지능', email: 'hrahn@suwon.ac.kr', lab: '글로벌경상관 1012호', phone: '031-229-8762', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1200091' },
        { name: '염희란', dept: '데이터과학부', major: '생물정보학', email: 'huiran.yeom@gmail.com', lab: '글로벌경상관 1018호', phone: '031-220-8833', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1234816' },
        { name: '김진현', dept: '데이터과학부', major: '바이오·의료 인공지능', email: 'jinhyun.kim@suwon.ac.kr', lab: '글로벌경상관 914호', phone: '031-220-2472', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1240102' },
        { name: '김순찬', dept: '데이터과학부', major: '바이오·의료 인공지능', email: 'soonchan.kim@suwon.ac.kr', lab: '글로벌경상관 901호', phone: '031-220-2479', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1255130' },
        { name: '김인환', dept: '데이터과학부', major: 'Computer Science', email: '-', lab: '미래혁신관 508', phone: '010-2328-8055', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1255129' },
        { name: '방효은', dept: '데이터과학부', major: '생물정보학', email: 'hebang@suwon.ac.kr', lab: '글로벌경상관 1011호', phone: '031-229-8763', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1255125' },
        { name: '안주희', dept: '데이터과학부', major: '보건빅데이터통계', email: 'jhahn@suwon.ac.kr', lab: '글로벌경상관 1017호', phone: '031-220-8831', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1255126' },
        { name: '이상욱', dept: '데이터과학부', major: 'Combinatorics', email: 'swree@suwon.ac.kr', lab: '글로벌경상관 914호', phone: '031-220-2472', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1961562' },
        { name: '정문자', dept: '데이터과학부', major: '수학', email: 'mjeong@suwon.ac.kr', lab: '-', phone: '--', link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1941507' }
        ]
    };
  },
  methods: {
    navigateTo(routeName) {
      this.isIntro = routeName === 'infoSecurityIntro';
      this.$router.push({ name: routeName }).catch((err) => {
        if (err.name !== "NavigationDuplicated") throw err;
      });
    },
    navigateToMajor(majorName) {
      const routeMap = {
        컴퓨터학부: "computerPage",
        컴퓨터SW: "computerSW",
        미디어SW: "mediaSW",
        정보통신학부: "infoCommunication",
        정보통신학과: "infoCommunicationCollege",
        정보보호학과: "infoSecurity",
        데이터과학부: "dataScience",
        클라우드융복합: "CloudPage",
      };
      const route = routeMap[majorName];
      if (route) this.navigateTo(route);
    },
    hideAllDropdowns() {
      this.activeDropdown = null;
      this.navHovered = false;
    },
  },
};
</script>

<style scoped>
* {
  font-family: 'Nanum Gothic', sans-serif;
}


.wrap_sub_visual {
  background-image: url('@/assets/background1.png');
  background-size: cover;
  background-position: center;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrap_sub_visual .container.center-only {
  justify-content: center;
}

.visual_intro {
  font-size: 2.2rem;
  font-weight: 3px bold;
  text-align: center;
  flex: 1;
  color: white;
}

.subtitle.a {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  flex: 1;
  color: white;
}
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
  margin-right: 2rem;
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
.chatbot-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 10%; /* ✅ 기존보다 가로폭 확대 */
  height: auto; /* ✅ 높이 자동으로 비율 유지 */
  object-fit: contain; /* ✅ 이미지 전체가 보이도록 조정 */
  z-index: 10; 
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

.info-section {
  background-color: transparent;
}

.title-box {
  padding: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  border-bottom: 2px solid white;
  margin-bottom: 2rem;
}

.title-box h1 {
    color: white;
}

.info-box {
  background-color: rgba(0, 0, 0, 0.6); 
  padding: 1.5rem;
  margin-bottom: 2rem;
  color: white;
  font-weight: bold; /* 매우 중요한 코드 */
  font-size: 1.1rem;
}

.info-box p {
  line-height: 1.8;
  margin-bottom: 0.8rem;

}

.info-box img {
  display: block;         /* block 요소로 만들어야 margin auto가 적용됨 */
  margin: 1.5rem auto;    /* 상하 여백 + 가로 중앙 정렬 */
  max-width: 80%;         /* 최대 가로 너비 제한 */
  height: auto;           /* 세로 비율 유지 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* 그림자 효과 (선택) */
}

.info-box h2{
    font-size: 2rem;
}


.professor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개씩 배치 */
  gap: 2rem; /* 카드 간 간격 */
  padding: 1rem;
}

.professor-card a {
    color: white;
    text-decoration: underline;
    text-underline-offset: 4px;
}

.professor-card {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  color: white;
}

.professor-card h3 {
  margin: 0;
  font-size: 1.7rem;
  color: white;
}

.professor-card .dept {
  font-size: 0.9rem;
  color: white;
  margin-bottom: 0.5rem;
}

.chair-card {
  border: 2px solid #ddd;
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 0.8rem;
  column-gap: 1.5rem;
}

.chair-item {
  display: flex;
  align-items: center;
  font-size: 1rem;
}

.icon {
  background-color: #e9b93e;
  color: #333;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  margin-right: 0.6rem;
  font-size: 0.9rem;
}

@media (max-width: 1000px) {
  .professor-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .professor-grid {
    grid-template-columns: 1fr;
  }
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
