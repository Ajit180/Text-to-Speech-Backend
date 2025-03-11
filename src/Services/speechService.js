import openAIClient from "../Config/openAIConfig";


// Function to generate speech from text
export const generateSpeechFromTextService = async (text) => {
  try {
    const response = await openAIClient.post(
      '/audio/speech', // Specific endpoint for TTS
      {
        model: 'tts-1', // Using OpenAI's TTS model
        input: text,    // Text to convert to speech
        voice: 'nova',  // Voice options: nova, alloy, echo, etc.
      },
      {
        responseType: 'arraybuffer', // To get audio buffer
      }
    );

    return response.data; // Audio file buffer (binary)
  } catch (error) {
    console.error('OpenAI TTS API Error:', error.response ? error.response.data : error.message);
    throw new Error('Failed to generate speech from OpenAI');
  }
};