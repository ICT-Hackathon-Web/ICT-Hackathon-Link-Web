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
            @click="navigateTo('announcePage')"
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
            <p class="visual_intro"><strong>정보통신학부</strong></p>
            <p class="subtitle a">InformatioCommunication</p>
            
          </div>
        </div>
    </section>
    <section class="info-section">

      <div class="info-box">
        <h2>학부 소개</h2>
        <p>
          수원대학교 정보통신학부는 정보통신융합(ICT) 기술의 핵심인 정보통신과
          정보보호 분야를 깊이 있고 폭넓게 공부하고, 다양한 실습을 통하여 실무
          역량을 갖출 수 있도록 교육함으로써 4차 산업혁명시대에 필요한 핵심 기술
          인력을 양성합니다.
        </p>
        <p>
          정보통신공학전공은 ICT와 사물인터넷(IoT) 시대에 부응하여 미래를 개척할
          공학인을 양성하는 것을 교육 목표로, 정보통신분야에서의 전문가적 지식,
          현장을 기반으로 실무 경험, 융합교과를 통한 창의력 배양을 실천전략으로
          삼고 있습니다.
        </p>
        <p>
          정보의 생성과 가공, 전달을 위한 정보처리, 네트워크 및 통신기술에 관한
          전반적인 이론 습득은 물론 소프트웨어, 하드웨어 설계 능력 및 실습
          능력을 배양하며, 다양한 통신망을 활용한 정보통신 실습으로 스마트
          정보화 사회에 능동적으로 대처할 수 있는 창의성과 기술개발 및
          커뮤니케이션 능력을 갖춘 고급 ICT 인력을 육성합니다.
        </p>
        <p>
          주요 교과분야는 통신 및 유무선 네트워크 시스템, 멀티미디어 신호처리 및
          시스템, IoT 임베디드 시스템 분야로 구성되어 있습니다. 특히
          융합교과로서 로봇을 특화하여 졸업 작품 전시, 대내외 공모전 및 각종
          경진대회 참가를 지원하고 있습니다.
        </p>
        <p>
          정보보호 전공은 4차 산업혁명 시대의 다양한 서비스 및 시스템의 보안을
          책임질 전문 보안인력 양성을 교육 목표로, 시스템 및 서비스 개론 및
          개발, 정보보호 실무 기술, 융복합 교육 등을 통한 핵심 기술 역량을 갖춘
          인재를 길러내고 있습니다.
        </p>
        <p>
          주요 교과분야는 정보보호개론, 암호학, 접근통제, 네트워크 및 시스템
          보안, 응용 보안 등 정보보호 관련 전 분야를 체계적으로 교육할 수 있도록
          구성되어 있으며, SW 프로그래밍 기술 교육 및 실습을 통하여 정보보호
          분야뿐만 아니라 ICT 시스템 및 서비스 개발 역량을 갖출 수 있도록
          교육합니다.
        </p>
        <p>
          특히, 프로젝트 중심 교육을 통하여 대내외 공모전 및 경진대회에 참여할
          수 있도록 지도하고 있습니다.
        </p>
        <p>
          졸업 후, 정보보호 관리 및 운영, 정보보호 컨설팅, 시스템 개발 등 다양한
          분야로 진출할 수 있습니다.
        </p>
      </div>

      <div class="info-box">
        <h2>학과장 소개</h2>
        <div class="chair-card">
          <div class="chair-item">
            <span class="icon">👤</span> 성명 : 김대엽
          </div>
          <div class="chair-item">
            <span class="icon">🏫</span> 소속 : 정보통신학부 정보보호
          </div>
          <div class="chair-item">
            <span class="icon">📍</span> 위치 : 지능형SW융합대학 525호실
          </div>
          <div class="chair-item">
            <span class="icon">📞</span> 대표전화 : 031-229-8352
          </div>
          <div class="chair-item"><span class="icon">📠</span> FAX :</div>
          <div class="chair-item">
            <span class="icon">@</span> E-mail : daeyoub69@suwon.ac.kr
          </div>
        </div>
      </div>

      <div class="info-box">
        <h2>전공 및 학위 과정</h2>
        <img src="@/assets/InfoComMajor.png" alt="InfoCom" />
      </div>

      <div class="info-box">
        <h2>교수 소개</h2>
        <div class="professor-grid">
          <div
            class="professor-card"
            v-for="(prof, index) in professors"
            :key="index"
          >
            <h3>
              <a :href="prof.link" target="_blank" rel="noopener noreferrer">{{
                prof.name
              }}</a>
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
        <div class="wrap">
          <div class="foot_info">
            <div class="fnb">
              <ul class="inGuideFnb">
                <li>
                  <a @click="showPrivacy = true" style="cursor: pointer">개인정보처리방침</a>
                </li>
              </ul>
            </div>
            <address>
              18323 경기도 화성시 봉담읍 와우안길 17
              <span>Tel : 031-220-2114</span>
            </address>
            <p>
              <span>Copyright (C) THE UNIVERSITY OF SUWON.</span>
              All rights reserved.
            </p>
          </div>
          <div class="foot_sns">
            <ul>
              <li class="n_blog">
                <a title="수원대학교 블로그" href="https://blog.naver.com/usw1982" target="_blank">
                  <img src="@/assets/blog.png" />
                </a>
              </li>
              <li class="facebook">
                <a title="수원대학교 페이스북" href="https://www.facebook.com/SuwonUniv/" target="_blank">
                  <img src="@/assets/facebook.png" />
                </a>
              </li>
              <li class="instagram">
                <a title="수원대학교 인스타그램" href="https://www.instagram.com/usw1982/" target="_blank">
                  <img src="@/assets/insta.png" />
                </a>
              </li>
              <li class="youtube">
                <a title="수원대학교 유튜브" href="https://www.youtube.com/channel/UC4JfyRGKu5AfBjvaFMCj3cg" target="_blank">
                  <img src="@/assets/youtube.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </footer>
  <PrivacyPolicy v-if="showPrivacy" @close="showPrivacy = false" />
  </div>
</template>

<script>
import ChatBot from '@/components/ChatBot.vue'
import PrivacyPolicy from '@/components/PrivacyPolicy.vue'
export default {
  name: 'infoCommunication',
  components: {
    ChatBot,
    PrivacyPolicy
  },
  data() {
    return {
      showPrivacy: false,
      showDepartments: false,
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
        {
          name: '양윤기',
          dept: '정보통신',
          major: '디지털통신, 디지털시스템설계',
          email: 'ygyang@suwon.ac.kr',
          lab: 'IT 대학 506호',
          phone: '031-220-2589',
          link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1971627',
        },
        {
          name: '양수미',
          dept: '정보보호',
          major: '정보 보호',
          email: 'smyang@suwon.ac.kr',
          lab: 'IT대학 504호',
          phone: '031-229-8138',
          link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1043806',
        },
        {
          name: '김시현',
          dept: '정보통신',
          major: '신호처리, 디지털통신, 비디오/오디오 신호처리, SoC 설계',
          email: 'seehyun@suwon.ac.kr',
          lab: 'IT대학 529호',
          phone: '031-229-8217',
          link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1100135',
        },
        {
          name: '변희정',
          dept: '정보통신',
          major: 'Network control',
          email: 'heejungbyun@suwon.ac.kr',
          lab: 'IT대학 524호',
          phone: '031-229-8048',
          link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1100134',
        },
        {
          name: '김대엽',
          dept: '정보보호',
          major: '대수학 & 암호학',
          email: '없음',
          lab: 'IT 대학 525호실',
          phone: '031-229-8352',
          link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1120129',
        },
        {
          name: '박두식',
          dept: '정보보호',
          major: '정보통신',
          email: 'dspark@suwon.ac.kr',
          lab: 'IT대학 523호',
          phone: '031-229-8650',
          link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1224742',
        },
        {
          name: '이중무',
          dept: '정보통신',
          major: '전산학',
          email: 'leejm@suwon.ac.kr',
          lab: '-',
          phone: '-',
          link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1234830',
        },
        {
          name: '김아람',
          dept: '정보보호',
          major: '정보보호',
          email: 'aramkim@suwon.ac.kr',
          lab: 'IT대학 527호',
          phone: '031-229-8219',
          link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1234913',
        },
        {
          name: '전상훈',
          dept: '정보보호',
          major: '웨어러블컴퓨팅, 의료인공지능, CPS보안',
          email: 'shjeon.usw@gmail.com',
          lab: 'IT대학 528호',
          phone: '031-229-8069',
          link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1234912',
        },
        {
          name: '정원용',
          dept: '정보통신',
          major: '-',
          email: 'infovis@naver.com',
          lab: '-',
          phone: '-',
          link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1080164',
        },
        {
          name: '고승철',
          dept: '정보보호',
          major: '정보보호',
          email: '-',
          lab: 'IT대학 520호',
          phone: '031-229-8284',
          link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1110145',
        },
        {
          name: '홍기천',
          dept: '정보통신',
          major: '인공지능 연계 상황인지 시스템, 멀티미디어 신호처리 및 시스템',
          email: 'kchong@suwon.ac.kr',
          lab: '-',
          phone: '-',
          link: 'https://www.suwon.ac.kr/mainHp/prointro/detail.html?eno=1981649',
        },
      ],
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
  display: block; /* block 요소로 만들어야 margin auto가 적용됨 */
  margin: 1.5rem auto; /* 상하 여백 + 가로 중앙 정렬 */
  max-width: 80%; /* 최대 가로 너비 제한 */
  height: auto; /* 세로 비율 유지 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* 그림자 효과 (선택) */
}

.info-box h2 {
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
footer .inGuideFnb{
  margin-bottom: 40px;
  color: white;
}
</style>
