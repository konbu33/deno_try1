// execute: deno run --allow-net="pokeapi.co" fetch.ts

const res = await fetch('https://pokeapi.co/api/v2/pokemon/1')
const json = res.json()
const data = await json
console.log(data)


