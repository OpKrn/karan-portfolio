const localTracks = import.meta.glob('../assets/music-mp3/*.{mp3,m4a,mp4}', {
  eager: true,
  import: 'default',
  query: '?url',
})

export const musicTracks = Object.entries(localTracks)
  .map(([path, src]) => ({
    title: decodeURIComponent(path.split('/').pop()).replace(/\.(mp3|m4a|mp4)$/i, ''),
    src,
  }))
  .sort((first, second) => first.title.localeCompare(second.title))

export const radioStations = [
  {
    name: 'Lofi Girl · lofi-radio',
    url: 'https://play.streamafrica.net/lofiradio',
    style: 'Popular music',
  },
  {
    name: 'Music Radio · Lo-fi',
    url: 'https://radio.musicradio.ai/listen/music_radio_lo-fi/radio.mp3',
    style: 'Lo-fi',
  },
  {
    name: 'Mixify · Hindi Radio',
    url: 'https://server.mixify.in/listen/new_hits/radio.mp3',
    style: 'Popular music',
  },
  {
    name: 'Zeno Radio',
    url: 'https://stream.zeno.fm/s4e0u5bqhtzuv',
    style: 'Live radio',
  },
  {
    name: 'Laut.fm · Relaxing Piano',
    url: 'https://stream.laut.fm/relaxing-piano',
    style: 'Instrumental',
  },
  {
    name: 'Laut.fm · Hit Radio',
    url: 'https://stream.laut.fm/hit-radio',
    style: 'Popular music',
  },
]
