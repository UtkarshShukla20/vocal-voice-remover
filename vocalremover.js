import Spleeter from 'spleeter';

const removeVocals = async (audioFile) => {
  const spleeter = new Spleeter.Separator({
    model: 'spleeter2stems',
  });

  const result = await spleeter.separate(audioFile);
  const vocals = result.vocals;
  const processedAudio = new Audio();
  processedAudio.setTrackDetails({
    title: 'Processed Audio',
    artist: 'Vocal Remover',
  });
  processedAudio.src = URL.createObjectURL(vocals);

  return processedAudio;
};

export default removeVocals;
