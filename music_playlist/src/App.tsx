import { useState } from 'react';

import PlaylistItem from './PlaylistItem';



function App() {

  const [ items ] = useState([

    {

      id: 1,

      title: 'Track title',

      artist: 'Artist Name',

      album: 'Album Name',

      length: '4:23',

    },

    {

      id: 2,

      title: 'Track title',

      artist: 'Artist Name',

      album: 'Album Name',

      length: '4:23',

    },

    {

      id: 3,

      title: 'Track title',

      artist: 'Artist Name',

      album: 'Album Name',

      length: '4:23',

    },

  ] as Track[]);



  return (

    <div className="min-h-screen bg-slate-800 text-white">

      <main className="max-w-screen-md mx-auto">

        <header className="bg-pink-600 text-2xl font-bold p-3">

          <h1>Sounds Good! - Epic Playlist</h1>

        </header>

        <ol className="border-4 border-pink-600">

          {items.map((track) => { return <PlaylistItem key={track.id} track={track}/>})}

        </ol>

      </main>

    </div>

  )

}



export default App