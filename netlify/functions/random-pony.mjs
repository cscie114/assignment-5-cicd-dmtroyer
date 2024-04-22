const fetch = require('node-fetch').default;

export default async () => {
  const randomId = Math.floor(Math.random() * 100) + 1;
  const ponyUrl = `https://ponyapi.net/v1/character/${randomId}`;

  try {
    const response = await fetch(ponyUrl);
    const pony = await response.json();
    return new Response(JSON.stringify(pony.data[0]), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
