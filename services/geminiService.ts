import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateArtisticDescription = async (cakeTitle: string, visualDetails: string): Promise<string> => {
  if (!apiKey) {
    return "A chave de API não está configurada. Aprecie a beleza visual desta obra.";
  }

  try {
    const prompt = `
      Você é Patricia Alves, uma Cake Designer de luxo e artista.
      Escreva uma descrição poética, curta e sofisticada (máximo 50 palavras) para um bolo chamado "${cakeTitle}".
      Detalhes visuais: ${visualDetails}.
      
      Tom de voz: Elegante, exclusivo, artístico, focado em emoção e textura. Use palavras como "sutil", "etéreo", "textura", "memória".
      Não pareça uma vendedora, pareça uma curadora de arte.
      Idioma: Português do Brasil.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Uma obra de arte única.";
  } catch (error) {
    console.error("Error generating description:", error);
    return "A conexão com a inspiração falhou momentaneamente. Contemple a imagem.";
  }
};

export const consultCakeTrends = async (): Promise<string> => {
   if (!apiKey) return "Análise de tendências indisponível.";
   
   try {
    const prompt = `
      Atue como Patricia Alves. Dê uma dica rápida (1 frase) sobre a maior tendência de bolos de casamento para o próximo ano.
      Foque em design minimalista ou texturas naturais.
    `;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Minimalismo orgânico é a tendência.";
   } catch (e) {
     return "Tendências em atualização.";
   }
}