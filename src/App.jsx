import MediaPlayer from "./components/MediaPlayer"

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-center text-3xl font-light text-gray-800 my-8 tracking-tight">Reproductor Multimedia</h1>

      <div className="max-w-4xl mx-auto space-y-10">
        <MediaPlayer
          type="video"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          title="Big Buck Bunny (Sample Video)"
        />

        <MediaPlayer
          type="audio"
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          title="SoundHelix Song 1 (Sample Audio)"
        />
      </div>

      <footer className="mt-12 text-center text-gray-400 text-xs">
        <p className="mb-1">Media Attribution:</p>
        <p>
          "Big Buck Bunny" - © Blender Foundation |{" "}
          <a href="https://peach.blender.org" className="text-gray-500 hover:underline">
            peach.blender.org
          </a>
        </p>
        <p>
          "SoundHelix Song 1" by T. Schürger -{" "}
          <a href="https://www.soundhelix.com" className="text-gray-500 hover:underline">
            www.soundhelix.com
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
