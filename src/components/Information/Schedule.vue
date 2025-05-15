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
          <a class="intro" @click="navigateTo('intro')" style="cursor: pointer"
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
          src="../../assets/SearchBarIcon.png"
          @click="navigateTo('search')"
          alt="SearchBar"
          style="cursor: pointer"
        />
      </div>
    </header>

    <!-- ✅ 서브 비주얼 영역 -->
    <div class="wrap_sub_visual">
      <div class="container center-only">
        <p class="visual_intro"><strong>학사일정</strong></p>
      </div>
    </div>

    <!-- ✅ 본문: 이미지(left) + 표(right) -->
    <div class="wrap-content">
      <div class="left">
        <img src="@/assets/calender_may.png" alt="학사일정 이미지" />
      </div>
      <div class="right">
        <div class="select-year">
          <select v-model="selectedYear" @change="onYearChange">
            <option v-for="year in availableYears" :key="year" :value="year">
              {{ year }}학년도 학사일정
            </option>
          </select>
        </div>
        <div class="table-card">
          <table>
            <thead>
              <tr>
                <th>날짜</th>
                <th>행사일정</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in scheduleList" :key="index">
                <td>{{ item.date }}</td>
                <td>
                  <strong>{{ item.title }}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleInfo',
  data() {
    return {
      activeDropdown: null, // 마우스가 어디에 올라가있는지 체크...
      navHovered: false, // nav바에 마우스가 올라갔는지 boolean으로 체크함
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
      selectedYear: '2025',
      availableYears: ['2025', '2024', '2023', '2022', '2021', '2020', '2019'],
      scheduleData: {
        2025: [
          {
            date: '2024.12.23(월) ~ 2025.01.10(금)',
            title: '동계 계절학기(예정)',
          },
          {
            date: '2025.01.02(목)',
            title: '시무식(Opening ceremony for the year)',
          },
          {
            date: '2025.01.15(수) ~ 2025.01.19(일)',
            title: '신입생선발 실기고사(“나”군)',
          },
          {
            date: '2025.01.24(금) ~ 2025.01.26(일)',
            title: '신입생선발 실기고사(“다”군)',
          },
          { date: '2025.02.03(월) ~ 2025.02.06(목)', title: '휴학/복학 신청' },
          {
            date: '2025.02.12(수)',
            title: '2024학년도 학위수여식(Commencement)',
          },
          {
            date: '2025.02.17(월) ~ 2025.02.21(금)',
            title: '재학생 제1학기 등록기간',
          },
          {
            date: '2025.02.18(화) ~ 2025.02.21(금)',
            title: '재학생 제1학기 수강신청 기간',
          },
          {
            date: '2025.03.04(화)',
            title: '2025학년도 입학식(Freshman Admission Ceremony)',
          },
          {
            date: '2025.03.05(수)',
            title: '제1학기 개강(Spring Semester begins)',
          },
          { date: '2025.04.23(수) ~ 2025.04.29(화)', title: '수업일수 1/2' },
          { date: '2025.05.23(금)', title: '수업일수 3/4' },
          {
            date: '2025.06.11(수) ~ 2025.06.17(화)',
            title: '학기말고사 (Final)',
          },
          { date: '2025.06.18(수) ~ 2025.06.24(화)', title: '보강기간' },
          { date: '2025.06.25(수)', title: '하계방학(Summer Vacation)(예정)' },
          {
            date: '2025.06.30(월) ~ 2025.07.18(금)',
            title: '하계 계절학기(예정)',
          },
          { date: '2025.08.04(월) ~ 2025.08.07(목)', title: '휴학/복학 신청' },
          { date: '2025.08.13(수)', title: '2024학년도 후기 학위수여일' },
          {
            date: '2025.08.18(월) ~ 2025.08.22(금)',
            title: '재학생 제2학기 등록기간',
          },
          {
            date: '2025.08.19(화) ~ 2025.08.22(금)',
            title: '재학생 제2학기 수강신청기간',
          },
          {
            date: '2025.08.25(월)',
            title: '제2학기 개강(Fall Semester begins)',
          },
          {
            date: '2025.09.25(목)',
            title: '개교기념일(University Foundation Day)',
          },
          { date: '2025.10.13(월) ~ 2025.10.17(금)', title: '수업일수 1/2' },
          { date: '2025.11.12(수)', title: '수업일수 3/4' },
          {
            date: '2025.12.01(월) ~ 2025.12.05(금)',
            title: '학기말고사 (Final)',
          },
          { date: '2025.12.08(월) ~ 2025.12.12(금)', title: '보강기간' },
          { date: '2025.12.15(월)', title: '동계방학(Winter Vacation)(예정)' },
          {
            date: '2025.12.22(월) ~ 2026.01.09(금)',
            title: '동계 계절학기(예정)',
          },
        ],
        2024: [],
      },
    };
  },
  computed: {
    scheduleList() {
      return this.scheduleData[this.selectedYear] || [];
    },
  },
  methods: {
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
        클라우드융복합: 'cloud',
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
    onYearChange() {
      console.log(`선택한 연도: ${this.selectedYear}`);
    },
  },
};
</script>

<style scoped>
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

/* 서브 비주얼 */
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

/* 본문: 왼쪽 이미지 + 오른쪽 표 */
.wrap-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  padding: 4rem 6rem;
  flex-wrap: wrap;
}

.left {
  flex: 4;
  max-width: 650px;
}

.left img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
}

.right {
  flex: 6;
  min-width: 400px;
}

.select-year {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.table-card {
  background-color: white;
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.table-card table {
  width: 100%;
  border-collapse: collapse;
}

.table-card th,
.table-card td {
  border: 1px solid #ccc;
  padding: 0.8rem;
  font-size: 0.95rem;
  text-align: left;
}

.table-card th {
  background-color: #f7f7f7;
}

.table-card tbody tr:hover {
  background-color: #fafafa;
}

/* ✅ 반응형 대응 */
@media (max-width: 768px) {
  .wrap-content {
    flex-direction: column;
    align-items: center;
  }

  .left,
  .right {
    flex: none;
    width: 100%;
    max-width: 100%;
  }

  .select-year {
    justify-content: center;
  }

  .table-card {
    padding: 1rem;
  }

  .table-card th,
  .table-card td {
    font-size: 0.85rem;
    padding: 0.6rem;
  }

  .visual_intro {
    font-size: 1.6rem;
  }
}
</style>
