<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-left">
        <button class="like-btn">
          <i class="fa-solid fa-thumbs-up"></i> 4.8
        </button>
      </div>
      <ul class="footer-links">
        <li><a href="#">首頁</a></li>
        <li><a href="#">訊息公告</a></li>
        <li><a href="#">會員問題</a></li>
        <li><a href="#">錯誤回報</a></li>
        <li><a href="#">舉報歌曲</a></li>
        <li><a href="#">隱私條款聲明</a></li>
        <li><a href="#">支援本站</a></li>
      </ul>
      <div class="footer-right">
        <img src="/images/icon/logo.png" alt="Positive" class="positive-icon" />
      </div>
    </div>
    <div class="footer-bottom">
      © 2025 ChInPen All Rights Reserved.
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #2f3a45;
  color: #fff;
  padding: 20px;
  font-size: 14px;
  width: 100%;
  overflow-x: hidden;
}

.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 80%; 
  margin: 0 auto;
}

.footer-left {
  display: flex;
  align-items: center;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 0;
  padding: 0;
  max-width: 100%; /* ✅ 防止超出畫面 */
}

.footer-links li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links li a:hover {
  color: #ffd700;
}

.footer-right {
  display: flex;
  align-items: center;
}


.footer-bottom {
  text-align: center;
  font-size: 12px;
  border-top: 1px solid #444;
  margin-top: 10px;
  padding-top: 10px;
}

.like-btn {
  background: none;
  border: 1px solid #fff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.like-btn:hover {
  background: #fff;
  color: #2f3a45;
}

.positive-icon {
  width: 80px;
  height: auto;
}

</style>
