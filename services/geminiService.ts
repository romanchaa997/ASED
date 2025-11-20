import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const model = "gemini-2.5-flash";

export const generateContentStream = async (prompt: string) => {
  if (!API_KEY) {
    throw new Error("API key for Gemini is not configured.");
  }
  try {
    const response = await ai.models.generateContentStream({
       model: model,
       contents: prompt,
    });
    return response;
  } catch (error) {
    console.error("Error generating content from Gemini:", error);
    throw new Error("Failed to get response from AI. Please check API key and network.");
  }
};
