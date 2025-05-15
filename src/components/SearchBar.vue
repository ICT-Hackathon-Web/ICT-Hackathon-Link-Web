<template>
  <div class="search-overlay">
    <div class="search-box">
      <div class="search-header">
        <div class="usw-title">
          <p>USW</p>
          <p>SEARCH</p>
        </div>
        <button class="close-btn" @click="navigateTo('Main')">&#10005;</button>
      </div>

      <form class="search-form" @submit.prevent="handleSearch">
        <input
          type="text"
          v-model="query"
          placeholder="검색어를 입력하세요."
          class="search-input"
        />

        <button type="submit" class="search-icon">🔍</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'USWSearch',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName }).catch((err) => {
        if (err.name !== 'NavigationDuplicated') {
          //동일한 경로일 때, 오류 무시하기
          throw err;
        }
      });
    },
    handleSearch() {
      if (this.query.trim()) {
        alert(`'${this.query}' 검색 실행`);
      }
    },
  },
};
</script>

<style scoped>
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/background.png');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.search-box {
  width: 80%;
  max-width: 800px;
  border: 4px solid white;
  padding: 40px;
  background: rgba(24, 0, 102, 0.38);
  color: white;
  position: relative;
}

.search-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.usw-title {
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
  font-style: italic;
}

.close-btn {
  font-size: 32px;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
}

.search-form {
  margin-top: 30px;
  display: flex;
  border-bottom: 1px solid white;
}

.search-input {
  flex: 1;
  padding: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-icon {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.keywords {
  margin-top: 30px;
}

.keyword-title {
  color: #00e3ff;
  font-weight: bold;
  margin-bottom: 10px;
}

.keyword-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.keyword {
  background: transparent;
  border: 1px solid #ccc;
  color: white;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
