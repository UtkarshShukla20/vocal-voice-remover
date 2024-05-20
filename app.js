import React from 'react';
import AudioPlayer from './AudioPlayer';

function App() {
  return (
    <div className="App">
      <h1>My Audio Player</h1>
      <AudioPlayer src="path/to/your/audio/file.mp3" />
    </div>
  );
}

export default App;