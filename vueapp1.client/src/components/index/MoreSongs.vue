<template>
  <div class="container">
    <h1>更多歌曲</h1>
      <div class="card-container">
        <div class="card" v-for="(item, index) in moreSongs" :key="index">
          <div class="image-container">
            <img :src="item.img" alt="item.title">
          </div>
          <div>
            <h2>{{ item.title }}</h2>
            <p>{{ item.artist }}</p>
          </div>
        </div>
      </div>
  </div>
</template>
<script setup>
const moreSongs = [
  { title: "晚餐歌", artist: "tuki", img: "/images/music/tuki-晚餐歌.jpg", link: "./晚餐歌.html" },
  { title: "愛の賞味期限", artist: "tuki", img: "/images/music/tuki-愛の賞味期限.jpg", link: "" },
  { title: "Bling-Bang-Bang-Born", artist: "Creepy Nuts", img: "/images/music/Creepy Nuts-Bling-Bang-Bang-Born.jpg", link: "" },
  { title: "前前前世", artist: "RADWIMPS", img: "/images/music/RADWIMPS-前前前世.jpg", link: "" },
  { title: "Idol", artist: "Yoasobi", img: "/images/music/Yoasobi-Idol.png", link: "" },
  { title: "Lemon", artist: "米津玄師", img: "/images/music/米津玄師-Lemon.jpg", link: "" },
  { title: "Pretender", artist: "Official髭男dism", img: "/images/music/Official髭男dism-Pretender.jpg", link: "./Pretender.html" },
  { title: "怪物", artist: "Yoasobi", img: "/images/music/Yoasobi-怪物.jpg", link: "./怪物.html" },
  { title: "灰色と青", artist: "米津玄師", img: "/images/music/米津玄師-灰色と青.jpg", link: "" },
  { title: "はいよろこんで", artist: "Kocchi no Kento", img: "/images/music/Kocchi no Kento-はいよろこんで.jpg", link: "" }
]
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
  border: 2px seashell solid;
  grid-template-columns: repeat(5, 1fr);
  align-items: start;
}

.image-container {
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  margin-top: 20px
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 10px;
}

.card {
  background-color: rgba(0, 0, 0, 0.664);
  width: 100%;
  height: 100%;
  justify-items: center;
  text-align: center;
  border-radius: 40px;
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
</style>