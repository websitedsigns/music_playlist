import PlaylistItem from './PlaylistItem';

function App() {
  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <main className="max-w-screen-md mx-auto">
        <header className="bg-pink-600 text-2xl font-bold p-3">
          <h1>Sounds Good! - Epic Playlist</h1>
        </header>
        <ol className="border-4 border-pink-600">
          <PlaylistItem/>
          <PlaylistItem/>
          <PlaylistItem/>
        </ol>
      </main>
    </div>
  )
}

export default App