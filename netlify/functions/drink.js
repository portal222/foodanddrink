import axios from "axios";

export async function handler(event, context) {
  try {
    const body = JSON.parse(event.body);
    const drink = body.drink;

    const url = `https://api.api-ninjas.com/v1/cocktail?name=${drink}`;

    const response = await axios.get(url, {
      headers: {
        "X-Api-Key": process.env.API_KEY  // ključ čuvan u Netlify env var
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (err) {
    return {
      statusCode: err.response?.status || 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
