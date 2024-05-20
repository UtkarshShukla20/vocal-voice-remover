import React, { useEffect } from 'react';
import { AudioPlayer, Controls } from 'react-audio-player-pro';
import 'react-audio-player-pro/lib/styles.css';
import { useRecoilState } from 'recoil';
import { processedAudioState } from '../atoms/audioAtoms';

const AudioProcessor = () => {
  const [processedAudio, setProcessedAudio] = useRecoilState(processedAudioState);

  useEffect(() => {
    if (processedAudio) {
      setProcessedAudio(URL.createObjectURL(processedAudio));
    }
  }, [processedAudio]);

  return (
    <div>
      <h2>Processed Audio</h2>
      <AudioPlayer
        src={processedAudio}
        autoPlay={false}
        controls={true}
        showJumpControls={false}
      >
        <Controls.PlayButton />
        <Controls.CurrentTime />
        <Controls.ProgressBar />
        <Controls.Duration />
        <Controls.MuteButton />
        <Controls.VolumeBar />
      </AudioPlayer>
    </div>
  );
};

export default AudioProcessor;