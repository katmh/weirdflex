var weirdSynonyms = [
    "weird",
    "odd",
    "bizarre",
    "eccentric",
    "funky",
    "kooky",
    "peculiar",
    "strange",
    "queer",
    "oddball",
    "uncanny",
    "outlandish"
  ],
  flexSynonyms = [
    "flex",
    "boast",
    "brag",
    "braggadocio",
    "exaggeration",
    "vaunt",
    "grandiloquence"
  ],
  butSynonyms = ["but", "yet"],
  okaySynonyms = [
    "okay",
    "acceptable",
    "satisfactory",
    "alright",
    "approved",
    "correct",
    "fair",
    "fine",
    "permitted",
    "accurate",
    "adequate",
    "convenient",
    "passable",
    "tolerable",
    "let's toast",
    "👌",
    "🆗"
  ];

var btn = document.getElementById("regenerate-button");

var weird = document.getElementById("weird"),
  flex = document.getElementById("flex"),
  but = document.getElementById("but"),
  okay = document.getElementById("okay");
btn.addEventListener("click", function() {
  replaceWithSynonym(weird, weirdSynonyms);
  replaceWithSynonym(flex, flexSynonyms);
  replaceWithSynonym(but, butSynonyms);
  replaceWithSynonym(okay, okaySynonyms);
});

function replaceWithSynonym(word, synonymList) {
  word.innerText = synonymList[Math.floor(Math.random() * synonymList.length)];
}

// run so that the first quote you see is already a variation of "weird flex but okay"
replaceWithSynonym();
