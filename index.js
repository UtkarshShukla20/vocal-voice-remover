import { Container, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import AudioProcessor from '../components/AudioProcessor';
import Upload from '../components/upload';

export default function Home() {
  const [audioFile, setAudioFile] = useState(null);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Audio Cutter
      </Typography>
      <Upload setAudioFile={setAudioFile} />
      {audioFile && <AudioProcessor audioFile={audioFile} />}
    </Container>
  );
}