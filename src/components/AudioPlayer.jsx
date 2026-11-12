import { useEffect, useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ListMusic,
  Music2,
  Pause,
  Play,
  Radio,
  Volume2,
  X,
} from 'lucide-react'
import { musicTracks, radioStations } from '../data/audioLibrary'

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00'
  const minutes = Math.floor(seconds / 60)
  const remainder = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${minutes}:${remainder}`
}

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const playAttemptRef = useRef(0)
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('radio')
  const [trackIndex, setTrackIndex] = useState(0)
  const [stationIndex, setStationIndex] = useState(0)
  const [source, setSource] = useState(radioStations[0]?.url ?? '')
  const [playing, setPlaying] = useState(Boolean(radioStations[0]?.url))
  const [volume, setVolume] = useState(0.65)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [error, setError] = useState('')

  const currentTrack = musicTracks[trackIndex]
  const currentStation = radioStations[stationIndex]
  const title = mode === 'music' ? currentTrack?.title : currentStation?.name

  useEffect(() => {
    if (!audioRef.current) return

    const audio = audioRef.current
    if (!source) {
      audio.removeAttribute('src')
      audio.load()
      return
    }

    audio.src = source
    audio.load()
  }, [source])

  useEffect(() => {
    if (!open) return undefined

    function closeOnScroll() {
      setOpen(false)
    }

    window.addEventListener('scroll', closeOnScroll, { passive: true })
    return () => window.removeEventListener('scroll', closeOnScroll)
  }, [open])

  useEffect(() => {
    if (!audioRef.current || !source) return
    const audio = audioRef.current
    const playAttempt = ++playAttemptRef.current
    if (playing) {
      audio.play().catch(() => {
        if (playAttemptRef.current !== playAttempt) return
        setPlaying(false)
        setError('Playback failed. Try another track or station.')
      })
    } else {
      audio.pause()
    }

    return () => {
      playAttemptRef.current += 1
    }
  }, [source, playing])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  function togglePlayback() {
    setError('')
    if (!source) {
      const selectedSource = mode === 'music' ? currentTrack?.src : currentStation?.url
      if (!selectedSource) return
      setTime(0)
      setDuration(0)
      setSource(selectedSource)
      setPlaying(true)
    } else {
      setPlaying((current) => !current)
    }
  }

  function playTrack(index) {
    setMode('music')
    setTrackIndex(index)
    setTime(0)
    setDuration(0)
    setSource(musicTracks[index].src)
    setPlaying(true)
    setError('')
  }

  function playStation(index) {
    setMode('radio')
    setStationIndex(index)
    setTime(0)
    setDuration(0)
    setSource(radioStations[index].url)
    setPlaying(true)
    setError('')
  }

  function skipTrack(direction) {
    const next = (trackIndex + direction + musicTracks.length) % musicTracks.length
    playTrack(next)
  }

  function handleEnded() {
    if (mode === 'music') {
      skipTrack(1)
    } else {
      setPlaying(false)
    }
  }

  return (
    <div className="audio-player">
      <button
        className={`audio-player__trigger${playing ? ' audio-player__trigger--playing' : ''}`}
        type="button"
        aria-label={open ? 'Close music player' : 'Open music player'}
        aria-expanded={open}
        aria-controls="audio-player-panel"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={17} /> : <Music2 size={17} />}
        <span className="audio-player__trigger-label">Music</span>
        {playing && <i aria-hidden="true" />}
      </button>

      {open && (
        <section
          className="audio-panel glass-panel"
          id="audio-player-panel"
          aria-label="Music and radio player"
        >
          <div className="audio-panel__heading">
            <div>
              <span className="eyebrow">YOUR SOUNDTRACK</span>
              <h2>{playing ? 'Now playing' : 'Find your frequency'}</h2>
            </div>
            <button
              className="audio-panel__close"
              type="button"
              aria-label="Close music player"
              onClick={() => setOpen(false)}
            >
              <X size={17} />
            </button>
          </div>

          <div className="audio-panel__now-playing">
            <span className="audio-panel__cover" aria-hidden="true">
              {mode === 'radio' ? <Radio size={22} /> : <Music2 size={22} />}
            </span>
            <span className="audio-panel__track">
              <strong title={title}>{title || 'Choose a track'}</strong>
              <span>{mode === 'music' ? 'PERSONAL LIBRARY' : currentStation?.style || 'RADIO'}</span>
            </span>
            <button
              className="audio-panel__play"
              type="button"
              onClick={togglePlayback}
              aria-label={playing ? 'Pause playback' : 'Start playback'}
            >
              {playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
            </button>
          </div>

          {mode === 'music' && duration > 0 && (
            <div className="audio-panel__timeline">
              <input
                type="range"
                min="0"
                max={duration}
                value={time}
                aria-label="Track position"
                onChange={(event) => {
                  const nextTime = Number(event.target.value)
                  audioRef.current.currentTime = nextTime
                  setTime(nextTime)
                }}
              />
              <span>{formatTime(time)} <i /> {formatTime(duration)}</span>
            </div>
          )}

          <div className="audio-panel__controls">
            {mode === 'music' && (
              <>
                <button type="button" aria-label="Previous track" onClick={() => skipTrack(-1)}>
                  <ChevronLeft size={18} />
                </button>
                <button type="button" aria-label="Next track" onClick={() => skipTrack(1)}>
                  <ChevronRight size={18} />
                </button>
              </>
            )}
            <Volume2 size={15} aria-hidden="true" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              aria-label="Playback volume"
              onChange={(event) => {
                const nextVolume = Number(event.target.value)
                setVolume(nextVolume)
                if (audioRef.current) audioRef.current.volume = nextVolume
              }}
            />
            {mode === 'radio' && (
              <span className="audio-panel__live"><i /> LIVE</span>
            )}
          </div>

          <div className="audio-panel__tabs" role="tablist" aria-label="Audio source">
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'radio'}
              className={mode === 'radio' ? 'is-active' : ''}
              onClick={() => {
                setMode('radio')
                setPlaying(false)
                setSource('')
                setError('')
              }}
            >
              <Radio size={14} /> Radio <span>{radioStations.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'music'}
              className={mode === 'music' ? 'is-active' : ''}
              onClick={() => {
                setMode('music')
                setPlaying(false)
                setSource('')
                setError('')
              }}
            >
              <ListMusic size={14} /> Library <span>{musicTracks.length}</span>
            </button>
          </div>

          <div className="audio-panel__list" role="tabpanel">
            {mode === 'music'
              ? musicTracks.map((track, index) => (
                <button
                  className={`audio-panel__list-item${mode === 'music' && trackIndex === index ? ' is-playing' : ''}`}
                  type="button"
                  key={track.src}
                  onClick={() => playTrack(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong title={track.title}>{track.title}</strong>
                  {playing && trackIndex === index ? <Pause size={13} /> : <Play size={13} />}
                </button>
              ))
              : radioStations.map((station, index) => (
                <button
                  className={`audio-panel__list-item${mode === 'radio' && stationIndex === index ? ' is-playing' : ''}`}
                  type="button"
                  key={`${station.name}-${station.url}`}
                  onClick={() => playStation(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong title={station.name}>{station.name}</strong>
                  {playing && stationIndex === index ? <Pause size={13} /> : <Play size={13} />}
                </button>
              ))}
          </div>

          {error && <p className="audio-panel__error" role="status">{error}</p>}

        </section>
      )}
      <audio
        ref={audioRef}
        preload="none"
        onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onEnded={handleEnded}
        onError={() => {
          if (playing) {
            setPlaying(false)
            setError('This source is unavailable. Try another track or station.')
          }
        }}
      />
    </div>
  )
}
