<template>
  <header>
    <!-- 導覽列 -->
    <nav class="custom-header">
      <div class="custom-container">
        <!-- 左側Logo -->
        <a class="logo-link" href="/Sing_to_Learn_Japanese/index.html">
          <img src="/images/icon/logo.png" class="logo-img" />
        </a>
        <!-- 選單 -->
        <div class="menu">
          <ul class="menu-left">
            <li>
              <span class="navText" @click.prevent="toggleJapanese">
                日語學習<i class="fas fa-book-open"></i>
              </span>
              <PopupNotice :visible="showJapanese" @close="showJapanese = false">
                <h1>敬請期待！</h1>
              </PopupNotice>

            </li>
            <li>
              <span class="navText" @click.prevent="toggleNotice">
                訊息公告<i class="fas fa-comment"></i>
              </span>
              <PopupNotice :visible="showNotice" @close="showNotice = false">
                <h1>目前歌曲還在陸續更新中</h1>
                <h1>有任何問題都歡迎在錯誤回報那邊傳送訊息</h1>
                <h1>感謝各位的配合！</h1>
              </PopupNotice>
            </li>
          </ul>
          <ul class="menu-right">
            <li>
              <span class="navText" href="./messages.html">
                錯誤回報
                <i class="fa-solid fa-question"></i>
              </span>
            </li>
            <li>
              <span class="navText" href="#" @click.prevent="openLoginModal">登入<i class="fa-solid fa-user"></i></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <LoginModal :visible="showLoginModal" @close="closeModal" />


  </header>
</template>

<script setup>
import { ref } from 'vue'
import PopupNotice from '../Modal/PopupNotice.vue'
import LoginModal from '../Modal/LoginModal.vue'

const showJapanese = ref(false)
const showNotice = ref(false)
const showLoginModal = ref(false)

function toggleJapanese() {
  showJapanese.value = !showJapanese.value
}
function toggleNotice() {
  showNotice.value = !showNotice.value
}
function openLoginModal() {
  showLoginModal.value = true
}
function closeModal() {
  showLoginModal.value = false
}
</script>


<style scoped>
.navText {
  cursor: pointer;
  padding: 5px 10px;
  color: #333;
  font-size: 1.1rem;
}

.navText:hover {
  background-color: #f0f0f0;
  border-radius: 5px;
  transition: background-color 0.8s ease;
}

.custom-header {
  background-color: #fff;
  padding: 10px 20px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.custom-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  gap: 30px;
}

.logo-img {
  width: 80px;
}

.menu {
  display: flex;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.menu-left,
.menu-right {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 15px;
}

.menu-right {
  margin-left: auto;
}

@media (max-width: 768px) {
  .custom-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .menu {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }

  .menu-left,
  .menu-right {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .menu-right {
    align-items: flex-end;
  }
}
</style>
