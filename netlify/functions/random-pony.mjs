// const fetch = require('node-fetch');

// const RandomPony = async () => {
//   const randomId = Math.floor(Math.random() * 100) + 1;
//   const ponyUrl = `https://ponyapi.net/v1/character/${randomId}`;

//   try {
//     const response = await fetch(ponyUrl);
//     const pony = await response.json();
//     return new Response(JSON.stringify(pony.data[0]), {
//       headers: { 'Content-Type': 'application/json' }
//     });
//   } catch (error) {
//     return new Response(error.message, { status: 500 });
//   }
// }

// export default RandomPony

export default async () => {
  const pony = {
    "status": 200,
    "data": [
      {
        "id": 500,
        "name": "DJ Pon-3",
        "alias": "Vinyl Scratch",
        "url": "https://mlp.fandom.com/wiki/DJ_Pon-3",
        "sex": "Female",
        "residence": "A decorative house with Octavia Melody\nPart-time residency in Manehattan",
        "occupation": "Disc jockey",
        "kind": [
          "Unicorn"
        ],
        "image": [
          "https://vignette.wikia.nocookie.net/mlp/images/0/0d/DJ_Pon-3_ID_S5E9.png/revision/latest?cb=20150616214305",
          "https://vignette.wikia.nocookie.net/mlp/images/7/79/Filly_DJ_Pon-3_from_IDW_Comics_Issue_11.png/revision/latest?cb=20131215232800"
        ]
      }
    ]
  }

  return new Response(JSON.stringify(pony.data[0]), {
    headers: { 'Content-Type': 'application/json' }
  });
}
