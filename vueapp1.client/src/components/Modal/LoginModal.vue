<!-- LoginModal.vue -->
<template>
  <div id="customBackdrop" class="custom-backdrop" v-show="visible" @click.self="$emit('close')">
    <div id="customModal" class="custom-modal2" :class="{ active: visible }">
      <!-- 登入表單 -->
      <form @submit.prevent="" v-if="!showRegister">
        <div id="loginForm">
          <h2>登入</h2>
          <div class="form-group">
            <label for="loginUsername">信箱：</label>
            <input type="text" id="loginUsername" placeholder="請輸入信箱" name="email" />
          </div>
          <div class="form-group">
            <label for="loginPassword">密碼：</label>
            <input type="password" id="loginPassword" placeholder="請輸入密碼" name="password" />
          </div>
          <button type="submit">登入</button>
          <p class="toggle-text">還沒有帳號？
            <a href="#" @click.prevent="showRegister = true">註冊</a>
          </p>
        </div>
      </form>

      <!-- 註冊表單 -->
      <form @submit.prevent="" v-else>
        <div id="registerForm">
          <h2>註冊</h2>
          <div class="form-group">
            <label for="Username">姓名(暱稱)：</label>
            <input type="text" id="Username" placeholder="請輸入帳號" name="username" />
          </div>
          <div class="form-group">
            <label for="UserEmail">信箱：</label>
            <input type="text" id="UserEmail" placeholder="請輸入信箱" name="email_2" />
          </div>
          <div class="form-group">
            <label for="registerPassword">密碼：</label>
            <input type="password" id="registerPassword" placeholder="請輸入密碼" name="password_2" />
          </div>
          <div class="form-group">
            <label for="registerConfirmPassword">確認密碼：</label>
            <input type="password" id="registerConfirmPassword" placeholder="請再次輸入密碼" name="confirm_password" />
          </div>
          <button type="submit">註冊</button>
          <p class="toggle-text">已經有帳號了？
            <a href="#" @click.prevent="showRegister = false">登入</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// 接收外部控制顯示的 props
defineProps({
  visible: Boolean,
})

// 通知外部關閉 Modal
defineEmits(['close'])

const showRegister = ref(false)
</script>
<style scoped>
.custom-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
    background-color: rgba(0, 0, 0, 0.2); /* 遮罩效果 */
  z-index: 999;                /* 確保在上層 */
}
.custom-modal2{
  background-color: rgb(255, 255, 255);
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
</style>
