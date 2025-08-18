import { pretenderLyrics } from "./Lyrics/pretenderLyrics"
export const songs = [
  {
    id: 'bling-bang-bang-born',
    title: 'Bling-Bang-Bang-Born',
    artist: 'Creepy Nuts',
    img: '/images/music/Creepy Nuts-Bling-Bang-Bang-Born.jpg',
    videoUrl: '/video/Creepy Nuts-Bling-Bang-Bang-Born.mp4',
    releaseDate: '2024-01-07',
    lyrics: []
  },
  {
    id: 'zenzenzense',
    title: '前前前世',
    artist: 'RADWIMPS',
    img: '/images/music/RADWIMPS-前前前世.jpg',
    videoUrl: '/video/RADWIMPS-前前前世.mp4',
    releaseDate: '2016-08-24',
    lyrics: []
  },
  {
    id: 'lemon',
    title: 'Lemon',
    artist: '米津玄師',
    img: '/images/music/米津玄師-Lemon.jpg',
    videoUrl: '/video/米津玄師-Lemon.mp4',
    releaseDate: '2018-03-14',
    lyrics: []
  },
  {
    id: 'pretender',
    title: 'Pretender',
    artist: 'Official髭男dism',
    lyricist:'藤原聡',
    arranger:"Official髭男dism",
    composer:"藤原聡",
    videoSource:"https://www.youtube.com/watch?v=TQ8WlA2GXbk",
    img: '/images/music/Official髭男dism-Pretender.jpg',
    videoUrl: '/video/Official髭男dism - Pretender.mp4',
    releaseDate: '2019-05-15',
    lyrics: pretenderLyrics
  },
  {
    id: 'idol',
    title: 'Idol',
    artist: 'Yoasobi',
    img: '/images/music/Yoasobi-Idol.png',
    videoUrl: '/video/Yoasobi-Idol.mp4',
    releaseDate: '2023-04-12',
    lyrics: []
  },
  {
    id: 'gray-and-blue',
    title: '灰色と青',
    artist: '米津玄師',
    img: '/images/music/米津玄師-灰色と青.jpg',
    videoUrl: '/video/米津玄師-灰色と青.mp4',
    releaseDate: '2017-11-01',
    lyrics: []
  },
  {
    id: 'banquet-song',
    title: '晚餐歌',
    artist: 'tuki',
    img: '/images/music/tuki-晚餐歌.jpg',
    videoUrl: '/video/tuki-晚餐歌.mp4',
    releaseDate: '2024-06-10',
    lyrics: []
  },
  {
    id: 'hai-yorokonde',
    title: 'はいよろこんで',
    artist: 'Kocchi no Kento',
    img: '/images/music/Kocchi no Kento-はいよろこんで.jpg',
    videoUrl: '/video/Kocchi no Kento-はいよろこんで.mp4',
    releaseDate: '2024-03-01',
    lyrics: []
  },
  {
    id: 'kaibutsu',
    title: '怪物',
    artist: 'Yoasobi',
    img: '/images/music/Yoasobi-怪物.jpg',
    videoUrl: '/video/Yoasobi-怪物.mp4',
    releaseDate: '2021-01-06',
    lyrics: []
  },
  {
    id: 'ai-no-shoumikigen',
    title: '愛の賞味期限',
    artist: 'tuki',
    img: '/images/music/tuki-愛の賞味期限.jpg',
    videoUrl: '/video/tuki-愛の賞味期限.mp4',
    releaseDate: '2024-07-15',
    lyrics: []
  }
]

/**
 * 取得歌曲清單（給首頁 / 更多歌曲用，不需要歌詞）
 */
export function getAllSongs() {
  return songs.map(({ id, title, artist, img, releaseDate }) => ({
    id, title, artist, img, releaseDate
  }))
}

/**
 * 依 id 取得單首歌（給 /song/:id 用，包含歌詞、影片）
 */
export function getSongById(id) {
  return songs.find(s => s.id === id) || null
}
