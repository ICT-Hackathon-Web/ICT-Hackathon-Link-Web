<!-- 공지 -->
<template>
  <div class="notice-container">
    <!-- ✅ 헤더 -->
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
                  <li>학사일정</li>
                  <li>동아리</li>
                  <li>분실물</li>
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
    <!-- ✅ 서브 비주얼 영역 -->
    <div class="wrap_sub_visual">
      <div class="container center-only">
        <p class="visual_intro"><strong>공지사항</strong></p>
      </div>
    </div>

    <!-- ✅ 공지사항 본문 -->
    <section class="notice-section">
      <div class="notice-header">
        <p>
          총 <strong>{{ filteredNotices.length }}</strong
          >개의 게시물이 있습니다.
        </p>
        <div class="search-box-wrapper">
          <select v-model="selectCategory">
            <option value="all_annonce">통합공지</option>
            <option value="major_annonce">학과공지</option>
          </select>
          <select v-model="searchColumn">
            <option value="title">제목</option>
            <option value="author">작성자</option>
          </select>
          <input type="text" v-model="searchTerm" placeholder="검색어 입력" />
          <button @click="search">
            <img src="../assets/SearchBarIcon.png" />
          </button>
        </div>
      </div>

      <table class="notice-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>첨부</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(notice, index) in filteredNotices" :key="index">
            <td>{{ notice.id }}</td>
            <td>
              <a href="">{{ notice.title }}</a>
            </td>
            <td>{{ notice.author }}</td>
            <td>{{ notice.date }}</td>
            <td>
              <span v-if="notice.files > 0">📎 {{ notice.files }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NoticePage',
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
      searchTerm: '',
      searchColumn: 'title',
      selectCategory: 'all_annonce',
      notices: [
        {
          id: 48,
          title: '배고프고 졸리고 염병천병',
          author: 'ICT 306',
          date: '2025.05.14',
          views: 37,
          files: 2,
          category: 'major_annonce',
        },
        {
          id: 47,
          title: '홍혜원팀 ICT 해커톤 최우수상 수상',
          author: 'dsml 개발실',
          date: '2025.05.01',
          views: 52,
          files: 0,
          category: 'all_annonce',
        },
        {
          id: 46,
          title: '화아팅',
          author: '홍혜원원',
          date: '2025.02.14',
          views: 27,
          files: 0,
          category: 'major_annonce',
        },
      ],
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
  },
};
</script>

<style scoped>
* {
  font-family: 'Nanum Gothic', sans-serif;
}
.notice-container {
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  background-color: #f7f7f7;
  min-height: 100vh;
}

/* 헤더 */
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
/* 서브 비주얼 영역 */
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

/* ✅ 공지사항 영역 */
.notice-section {
  max-width: 960px;
  margin: 3rem auto;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
}
.notice-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.notice-header p {
  font-size: 1rem;
}
.search-box-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.search-box-wrapper select,
.search-box-wrapper input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.notice-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}
.notice-table th,
.notice-table td {
  border: 1px solid #ccc;
  padding: 0.6rem;
  text-align: center;
}
.notice-table th {
  background-color: #f4f4f4;
  color: #1b1d53;
}
.notice-table td a {
  color: #1b1d53;
  text-decoration: none;
}
</style>
