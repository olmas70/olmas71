import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getAIAdvice = async (question: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a professional Executive Career Consultant specializing in retirement transition for people in their 50s and 60s. 
      Answer the following user question concisely (under 300 characters), professionally, and with an encouraging tone. 
      Focus on value, experience, and future potential.
      
      User Question: ${question}`,
    });

    return response.text || "죄송합니다. 현재 답변을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};
