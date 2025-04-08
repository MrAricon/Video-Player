import { useRef, useState, useEffect } from "react"
import { Play, Pause, Square, Volume2, Volume1, VolumeX } from "lucide-react"

const MediaPlayer = ({ type, src, title = "Media file" }) => {
  const mediaRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const progressBarRef = useRef(null)

  useEffect(() => {
    const media = mediaRef.current

    const handleTimeUpdate = () => {
      setCurrentTime(media.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(media.duration)
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    media.addEventListener("timeupdate", handleTimeUpdate)
    media.addEventListener("loadedmetadata", handleLoadedMetadata)
    media.addEventListener("ended", handleEnded)

    return () => {
      media.removeEventListener("timeupdate", handleTimeUpdate)
      media.removeEventListener("loadedmetadata", handleLoadedMetadata)
      media.removeEventListener("ended", handleEnded)
    }
  }, [])

  // Play function
  const play = () => {
    mediaRef.current.play()
    setIsPlaying(true)
  }

  // Pause function
  const pause = () => {
    mediaRef.current.pause()
    setIsPlaying(false)
  }

  // Stop function (pause and reset time)
  const stop = () => {
    mediaRef.current.pause()
    mediaRef.current.currentTime = 0
    setIsPlaying(false)
  }

  // Change volume function
  const changeVolume = (e) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    mediaRef.current.volume = newVolume
  }

  // Seek function
  const seek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / progressBarRef.current.offsetWidth) * duration
    mediaRef.current.currentTime = seekTime
    setCurrentTime(seekTime)
  }

  // Format time function (converts seconds to MM:SS format)
  const formatTime = (time) => {
    if (isNaN(time)) return "00:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Get volume icon based on current volume
  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX className="w-4 h-4" />
    if (volume < 0.5) return <Volume1 className="w-4 h-4" />
    return <Volume2 className="w-4 h-4" />
  }

  return (
    <div
      className="bg-white rounded-xl shadow-sm overflow-hidden max-w-2xl mx-auto my-6 transition-all duration-300"
      style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="p-5">
        <h3 className="text-gray-800 font-medium text-lg mb-3">{title}</h3>

        {/* Media element */}
        <div className="relative rounded-lg overflow-hidden bg-gray-50">
          {type === "video" ? (
            <video ref={mediaRef} className="w-full aspect-video object-contain" controls={false}>
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 aspect-video">
              <audio ref={mediaRef} controls={false}>
                <source src={src} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
              <div className="text-gray-700 text-center">
                <Volume2 className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                <p className="font-light text-sm">{title}</p>
              </div>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div ref={progressBarRef} className="h-1 bg-gray-200 rounded-full mt-5 cursor-pointer relative" onClick={seek}>
          <div
            className="h-full bg-gray-800 rounded-full transition-all duration-300"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>

        {/* Time display */}
        <div className="flex justify-between text-xs text-gray-400 mt-1.5 font-light">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Controls */}
        <div
          className={`flex items-center justify-between mt-4 transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-70"}`}
        >
          <div className="flex space-x-3">
            {isPlaying ? (
              <button
                onClick={pause}
                className="p-2 text-gray-800 rounded-full transition-all duration-200 hover:bg-gray-100"
                aria-label="Pause"
              >
                <Pause className="w-5 h-5" strokeWidth={1.5} />
              </button>
            ) : (
              <button
                onClick={play}
                className="p-2 text-gray-800 rounded-full transition-all duration-200 hover:bg-gray-100"
                aria-label="Play"
              >
                <Play className="w-5 h-5" strokeWidth={1.5} />
              </button>
            )}
            <button
              onClick={stop}
              className="p-2 text-gray-800 rounded-full transition-all duration-200 hover:bg-gray-100"
              aria-label="Stop"
            >
              <Square className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Volume control */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">{getVolumeIcon()}</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={changeVolume}
              className="w-20 accent-gray-800"
              aria-label="Volume"
              style={{
                height: "2px",
                appearance: "none",
                background:
                  "linear-gradient(to right, #1f2937 0%, #1f2937 " +
                  volume * 100 +
                  "%, #e5e7eb " +
                  volume * 100 +
                  "%, #e5e7eb 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaPlayer
