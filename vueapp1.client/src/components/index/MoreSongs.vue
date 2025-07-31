<template>
  <div class="container">
    <h1>更多歌曲</h1>
    <div class="card-container">
      <div class="card" v-for="(item, index) in moreSongs" :key="index">
        <div class="image-container">
          <img :src="item.img" alt="item.title">
        </div>
        <div>
          <span>{{ item.title }}</span>
          <span>{{ item.artist }}</span>
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
  display: flex;
  border: 2px seashell solid;
}

.image-container img {
  width: 100px;
}
.card{
  width: 1000px;
}
</style>