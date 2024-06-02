import request from "../request";

async function sentimentAnalysis(text) {
  try {
    const response = await request.post("/sentiment", { text: text });
    return response.data; // Return only the data from the response
  } catch (error) {
    throw error; // Throw the error for proper handling in the component
  }
}

export default sentimentAnalysis;
