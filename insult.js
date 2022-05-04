

function generateInsult() {
  const adjectives = ["shitty", "fucked", "braindead", "cumguzzling"];
  const nouns = ["dingus", "fuckwad", "cockgobbler", "waste of carbon"];
  const selectedAdjective = adjectives[Math.floor(Math.random()*adjectives.length)];
  const selectedNoun = nouns[Math.floor(Math.random()*nouns.length)];
  const insult = `You are a ${selectedAdjective} ${selectedNoun}!`;
  return insult;
}

alert(generateInsult());
