import Icon from '@mdi/react';
import { mdiMusic, mdiPause, mdiPlay } from '@mdi/js';

function App() {
  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <main className="max-w-screen-md mx-auto">
        <header className="bg-pink-600 text-2xl font-bold p-3">
          <h1>Sounds Good! - Epic Playlist</h1>
        </header>
        <ol className="border-4 border-pink-600">
          <li className="flex flex-row px-3 py-2 space-x-4 mb-2">
            <div className="w-12 h-12 text-neutral-400 p-2 border border-neutral-400" aria-hidden="true">
              <Icon path={mdiMusic} />
            </div>
            <div className="flex-1">
              <div className="flex flex-row">
                <h2 className="flex-1 font-bold">Track title</h2>
                <p className="text-neutral-200">04:23</p>
              </div>
              <p>Artist Name - Album Name</p>
            </div>
            <button className="w-12 h-12 p-2" aria-label="Pause playing this track">
              <Icon path={mdiPause} />
            </button>
          </li>
          <li className="flex flex-row px-3 py-2 space-x-4 mb-2">
            <div className="w-12 h-12 text-neutral-400 p-2 border border-neutral-400" aria-hidden="true">
              <Icon path={mdiMusic} />
            </div>
            <div className="flex-1">
              <div className="flex flex-row">
                <h2 className="flex-1">Track title</h2>
                <p className="text-neutral-200">04:23</p>
              </div>
              <p>Artist Name - Album Name</p>
            </div>
            <button className="w-12 h-12 p-2" aria-label="Play this track">
              <Icon path={mdiPlay} />
            </button>
          </li>
          <li className="flex flex-row px-3 py-2 space-x-4">
            <div className="w-12 h-12 text-neutral-400 p-2 border border-neutral-400" aria-hidden="true">
              <Icon path={mdiMusic} />
            </div>
            <div className="flex-1">
              <div className="flex flex-row">
                <h2 className="flex-1">Track title</h2>
                <p className="text-neutral-200">04:23</p>
              </div>
              <p>Artist Name - Album Name</p>
            </div>
            <button className="w-12 h-12 p-2" aria-label="Play this track">
              <Icon path={mdiPlay} />
            </button>
          </li>
        </ol>
      </main>
    </div>
  )
}

export default App