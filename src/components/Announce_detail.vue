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
                <ul style="font-weight: bold">
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
          src="../assets/SearchBarIcon.png"
          @click="navigateTo('search')"
          alt="SearchBar"
          style="cursor: pointer"
        />
      </div>
    </header>

    <!-- ✅ 서브 비주얼 -->
    <div class="wrap_sub_visual">
      <div class="container center-only">
        <p class="visual_intro"><strong>공지사항</strong></p>
      </div>
    </div>

    <!-- ✅ 상세 정보 -->
    <section class="notice-detail">
      <div class="view-info">
        <h2 class="view-title">{{ notice.title }}</h2>
        <div class="view-meta">
          <span><strong>작성자</strong> {{ notice.publisher }}</span>
          <span class="divider">|</span>
          <span><strong>조회수</strong> {{ notice.views }}</span>
          <span class="divider">|</span>
          <span><strong>등록일</strong> {{ notice.created_at }}</span>
        </div>
      </div>

      <!-- ✅ 본문 -->
      <div class="view-content">
        <p v-html="notice.content"></p>
      </div>

      <!-- ✅ 첨부파일 -->
      <div class="attachments" v-if="notice.files && notice.files.length">
        <div v-for="(file, idx) in notice.files" :key="idx" class="file-item">
          <span class="file-icon">📎</span>
          <span class="file-name">{{ file.name }}</span>
          <button class="preview-btn">미리보기</button>
        </div>
      </div>

      <!-- ✅ 이전/다음글 -->
      <div class="nav-links">
        <div class="nav-item">
          <span class="arrow">⬆</span>
          <strong>이전글</strong>
          <span>{{ prevNotice?.title || '이전글이 없습니다.' }}</span>
        </div>
        <div class="nav-item">
          <span class="arrow">⬇</span>
          <strong>다음글</strong>
          <span>{{ nextNotice?.title || '다음글이 없습니다.' }}</span>
        </div>
      </div>

      <!-- ✅ 목록 버튼 -->
      <div class="back-btn-wrapper">
        <button class="back-btn" @click="goBack">목록</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NoticeDetailPage',
  data() {
    return {
      showChat: false,
      activeDropdown: null, // 마우스가 어디에 올라가있는지 체크...
      navHovered: false, // nav바에 마우스가 올라갔는지 boolean으로 체크함
      allItems: [
        { title: '홈페이지' },
        { title: '캔버스' },
        { title: '수강신청사이트' },
        { title: '포털' },
      ],
      slideIndex: 0,
      showDepartments: false,
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
      notice: {
        notice_id: 1149893,
        title: '배고프고 졸리고 염병천병',
        publisher: 'ICT 306',
        views: 41,
        created_at: '2025.05.07',
        updated_at: '2025.05.07',
        content: `안녕하세요.<br><br>ㅔ홍홍홍입니다.<br>으하하하하ㅏ하ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ<br><br> ㅃㅃㅃ`,
        files: [{ name: '첨부파일 없음' }],
      },
      prevNotice: {
        title: '홍혜원팀 ICT 해커톤 최우수상 수상',
      },
      nextNotice: null,
    };
  },
  computed: {
    visibleItems() {
      return this.allItems.slice(this.slideIndex, this.slideIndex + 4);
    },
  },
  methods: {
    filteredNotices() {
      return this.notices
        .filter((n) => this.selectCategory === "all_annonce" || n.category === this.selectCategory)
        .filter((n) => {
          const field = this.searchColumn;
          return n[field].toLowerCase().includes(this.searchTerm.toLowerCase());
        });
    },
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
        컴퓨터학부: 'computer',
        컴퓨터SW: 'computerSW',
        미디어SW: 'mediaSW',
        정보통신학부: 'infoCommunication',
        정보통신학과: 'infoCommunicationCollege',
        정보보호학과: 'infoSecurity',
        데이터과학부: 'dataScience',
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
    goBack() {
      this.$router.push({ name: 'NoticeListPage' }); // 목록 페이지 라우터명으로 수정
    },
  },
};
</script>

<style scoped>
* {
  font-family: 'Nanum Gothic', sans-serif;
}
.main-container {
  background-image: url('@/assets/background1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
}
.notice-container {
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  background-color: #f7f7f7;
  min-height: 100vh;
}

/* ✅ Header */
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

.dropdown {
  position: absolute;
  justify-content: center;
  left: 0;
  /* transform: translateX(-50%); */
  top: 100%;
  width: 100vw;
  background-color: #2c2d4f;
  display: flex;
  gap: 3rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: white;
  opacity: 0.8;
  border-radius: 4px;
  z-index: 1000;
  height: 120px;
  /* position: absolute;
  top: 100%;  header 바로 아래
  left: 0;
  width: 100vw;
  background-color: #2c2d4f;
  display: flex;
  justify-content: center;
  gap: 3rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: white;
  opacity: 0.8;
  border-radius: 4px;
  z-index: 1000; */
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
/* ✅ 서브 비주얼 */
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
  font-weight: bold;
  text-align: center;
  flex: 1;
  color: white;
}

/* ✅ 상세 본문 */
.notice-detail {
  max-width: 960px;
  margin: 3rem auto;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
}
.view-info {
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}
.view-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.view-meta {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #555;
  font-size: 0.95rem;
}
.view-meta .divider {
  color: #aaa;
}
.view-meta strong {
  font-weight: 600;
  margin-right: 0.2rem;
}
.view-content {
  line-height: 1.7;
  font-size: 1rem;
  color: #333;
}

/* ✅ 첨부파일 */
.attachments {
  border-top: 1px solid #ddd;
  padding-top: 1rem;
  margin-top: 2rem;
}
.file-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.file-icon {
  font-size: 1.2rem;
}
.file-name {
  font-weight: 500;
}
.preview-btn {
  background-color: #2c4e33;
  color: white;
  border: none;
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
  font-size: 0.8rem;
  cursor: pointer;
}

/* ✅ 이전글/다음글 */
.nav-links {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #000;
  margin-top: 2rem;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  font-size: 0.95rem;
}
.nav-item strong {
  width: 60px;
}
.arrow {
  font-size: 1.1rem;
}

/* ✅ 목록 버튼 */
.back-btn-wrapper {
  text-align: center;
  margin: 2rem 0;
}
.back-btn {
  background-color: #333;
  color: white;
  padding: 0.6rem 2rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}
</style>
