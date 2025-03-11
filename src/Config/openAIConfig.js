import axios from "axios";
import { OPENAI_API_KEY } from "./serverconfig.js";




// Create Axios instance
const openAIClient = axios.create({
  baseURL: 'https://api.openai.com/v1', // Base URL for all OpenAI endpoints
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${OPENAI_API_KEY}`, // Secure API key usage
  },
});

export default openAIClient;




