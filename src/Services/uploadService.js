import supabase from '../Config/dbconfig.js';
import { v4 as uuidv4 } from 'uuid'; // To generate unique file names


export const uploadAudioFile = async (audioBuffer, fileExtension = 'mp3') => {
  try {
    const fileName = `${uuidv4()}.${fileExtension}`;

    const { data, error } = await supabase.storage
      .from('audio-files') // Make sure this bucket exists
      .upload(fileName, audioBuffer, {
        contentType: 'audio/mpeg', // or audio/wav if you want wav files
        upsert: false, // Do not overwrite existing files
      });

    if (error) throw error;

    // Get public URL
    const { publicUrl } = supabase.storage
      .from('audio-files')
      .getPublicUrl(fileName);

    return publicUrl;
  } catch (error) {
    console.error('Supabase Upload Error:', error.message);
    throw new Error('Failed to upload audio to Supabase');
  }
};
