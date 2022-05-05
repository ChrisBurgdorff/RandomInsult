function generateInsult() {
  const adjectives = ["shitty", "braindead", "cumguzzling", "junky", "cunty", "taint-tickling", "worthless", "syphillis laden", "short bus riding", "clown school reject ass", "inconsequential", "skidmark sniffing", "chode chomping", "bitch tit having", "sperm burping", "slunty"];
  const nouns = ["dingus", "fuckwad", "cockgobbler", "waste of carbon", "window licker", "vaginal spewage", "poster child for abortion", "fuckface", "ball cradler", "grundle", "pap smear", "thundercunt", "ass gape", "fuck ass", "fruity ass", "skeet burrito", "slut muffin", "twat monger", "semen magnet", "street walker", "genetic tragedy", "cunt basket", "saggy vulva", "cock garage"]; 
  const selectedAdjective = adjectives[Math.floor(Math.random()*adjectives.length)];
  const selectedNoun = nouns[Math.floor(Math.random()*nouns.length)];
  const insult = `You are a ${selectedAdjective} ${selectedNoun}!`;
  return insult;
}

console.log(generateInsult());











