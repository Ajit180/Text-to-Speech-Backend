import { generateSpeechFromTextService } from "../Services/speechService";

export const generateSpeech = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }

    const audioBuffer = await generateSpeechFromTextService(text);

    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Disposition': 'attachment; filename="speech.mp3"',
    });

    res.send(audioBuffer); // Directly return audio file
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
