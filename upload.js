import React, { useState } from 'react';
import AudioProcessor from './AudioProcessorudioprocessor';
import Upload from './upload';

const App = () => {
  const [audioFile, setAudioFile] = useState(null);

  return (
    <div>
      <Upload onFileUpload={setAudioFile} />
      {audioFile && <AudioProcessor audioFile={audioFile} onProcessedAudio={setAudioFile} />}
    </div>
  );
};

export default App;