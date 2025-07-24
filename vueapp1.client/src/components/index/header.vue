<template>
  <header class="header-wrapper">
    <!-- 導覽列 -->
    <nav class="custom-header">
      <div class="custom-container">
        <!-- 左側Logo -->
        <a class="logo-link" href="/Sing_to_Learn_Japanese/index.html">
          <div class="logo-container">
            <img src="/images/icon/logo.png" class="logo-img" alt="網站Logo" />
            <span class="logo-text">日語音樂學習</span>
          </div>
        </a>
        
        <!-- 漢堡選單按鈕 (手機版) -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: showMobileMenu }">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- 選單 -->
        <div class="menu" :class="{ 'mobile-open': showMobileMenu }">
          <ul class="menu-left">
            <li class="nav-item">
              <span class="navText" @click.prevent="toggleJapanese">
                <i class="fas fa-book-open nav-icon"></i>
                <span class="nav-label">日語學習</span>
                <i class="fas fa-chevron-down dropdown-arrow"></i>
              </span>
              <PopupNotice :visible="showJapanese" @close="showJapanese = false">
                <h1>敬請期待！</h1>
              </PopupNotice>
            </li>
            <li class="nav-item">
              <span class="navText" @click.prevent="toggleNotice">
                <i class="fas fa-comment nav-icon"></i>
                <span class="nav-label">訊息公告</span>
                <i class="fas fa-chevron-down dropdown-arrow"></i>
              </span>
              <PopupNotice :visible="showNotice" @close="showNotice = false">
                <h1>目前歌曲還在陸續更新中</h1>
                <h1>有任何問題都歡迎在錯誤回報那邊傳送訊息</h1>
                <h1>感謝各位的配合！</h1>
              </PopupNotice>
            </li>
          </ul>
          <ul class="menu-right">
            <li class="nav-item">
              <a class="navText" href="./messages.html">
                <i class="fa-solid fa-question nav-icon"></i>
                <span class="nav-label">錯誤回報</span>
              </a>
            </li>
            <li class="nav-item">
              <span class="navText login-btn" @click.prevent="openLoginModal">
                <i class="fa-solid fa-user nav-icon"></i>
                <span class="nav-label">登入</span>
              </span>
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
const showMobileMenu = ref(false)

function toggleJapanese() {
  showJapanese.value = !showJapanese.value
}

function toggleNotice() {
  showNotice.value = !showNotice.value
}

function openLoginModal() {
  showLoginModal.value = true
  showMobileMenu.value = false // 關閉手機選單
}

function closeModal() {
  showLoginModal.value = false
}

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value
}
</script>

<style scoped>
/* 頭部容器 */
.header-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

/* 導航欄主體 */
.custom-header {
  background: transparent;
  padding: 0;
  transition: all 0.3s ease;
}

.custom-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  position: relative;
}

/* Logo 區域 */
.logo-link {
  text-decoration: none;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.05);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-img {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.logo-img:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
}

/* 漢堡選單按鈕 */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.mobile-menu-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.mobile-menu-btn span {
  display: block;
  width: 24px;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
  margin: 3px 0;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* 選單容器 */
.menu {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: nowrap;
}

.menu-left,
.menu-right {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 8px;
}

/* 導航項目 */
.nav-item {
  position: relative;
}

.navText {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  color: #374151;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}

.navText::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s ease;
}

.navText:hover::before {
  left: 100%;
}

.navText:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

/* 導航圖標 */
.nav-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.navText:hover .nav-icon {
  transform: scale(1.1);
}

/* 下拉箭頭 */
.dropdown-arrow {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  margin-left: 4px;
}

.navText:hover .dropdown-arrow {
  transform: rotate(180deg);
}

/* 登入按鈕特殊樣式 */
.login-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.login-btn:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .custom-container {
    padding: 12px 16px;
  }

  .logo-text {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    border-radius: 0 0 16px 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    gap: 0;
    padding: 20px;
    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  .menu.mobile-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .menu-left,
  .menu-right {
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }

  .menu-right {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .navText {
    justify-content: flex-start;
    padding: 16px 20px;
    margin: 0 -20px;
    border-radius: 8px;
    font-size: 1rem;
  }

  .nav-label {
    flex: 1;
  }

  .dropdown-arrow {
    margin-left: auto;
  }
}

@media (max-width: 480px) {
  .custom-container {
    padding: 8px 12px;
  }

  .logo-img {
    width: 40px;
    height: 40px;
  }

  .menu {
    padding: 16px;
  }

  .navText {
    padding: 14px 16px;
    margin: 0 -16px;
    font-size: 0.95rem;
  }
}

/* 動畫效果 */
@keyframes slideIn {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.nav-item {
  animation: slideIn 0.3s ease forwards;
}

.nav-item:nth-child(1) { animation-delay: 0.1s; }
.nav-item:nth-child(2) { animation-delay: 0.2s; }
.nav-item:nth-child(3) { animation-delay: 0.3s; }
.nav-item:nth-child(4) { animation-delay: 0.4s; }

/* 滾動時的樣式變化 */
.header-wrapper.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>