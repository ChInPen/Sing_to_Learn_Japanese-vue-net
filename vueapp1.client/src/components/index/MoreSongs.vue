<template>
  <div class="container">
    <h1 class="songs-title">
      <span class="title-text">更多歌曲</span>
      <div class="title-underline"></div>
    </h1>
    <div class="card-container">
      <div class="card" v-for="(item, index) in moreSongs" :key="index">
        <router-link :to="`/song/${item.id}`" class="card-link">
          <div class="image-container">
            <img :src="item.img" alt="item.title">
            <div class="play-overlay">
              <div class="play-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
          <div class="info">
            <h2>{{ item.title }}</h2>
            <p>{{ item.artist }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { songs } from '@/data/songs'
const moreSongs = songs // 之後可以用 filter 分類
</script>

<style scoped>

.container {
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.card-container {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(5, 1fr);
  align-items: start;
  margin-bottom: 100px;

}

/* 圖片 */
.image-container {
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  margin: 20px auto 0;
  border-radius: 12px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  border-radius: 10px;
  transition: transform 0.4s ease;
}

.card {
  background-color: rgba(0, 0, 0, 0.664);
  width: 100%;
  height: 100%;
  justify-items: center;
  text-align: center;
  border-radius: 40px;
}

.music-item:hover img {
  transform: scale(1.15);
}

/* 音樂連結 */
.music-link {
  display: flex;
  text-decoration: none;
  color: inherit;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.music-link:hover {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}

/* 播放覆蓋層 */
.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .play-overlay {
  opacity: 1;
}

.play-button {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: transform 0.2s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

/* 音樂連結 */
.card-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  width: 100%;
}

.card:hover {
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}

/* 標題樣式 */
.songs-title {
  position: relative;
}

.title-text {
  font-size: 2.5rem;
  letter-spacing: 2px;
  color: white;
}

.title-underline {
  width: 180px;
  height: 4px;
  background: linear-gradient(90deg, transparent, white, transparent);
  border-radius: 2px;
  animation: shimmer 2s ease-in-out infinite;
}

/* 卡片文字 */
.info {
  color: white;
}

.info p {
  color: rgb(156, 156, 156);
  font-size: 1.2rem;
}

@keyframes shimmer {

  0%,
  100% {
    opacity: 0.6;
    transform: scaleX(1);
  }

  50% {
    opacity: 1;
    transform: scaleX(1.2);
  }
}
</style>