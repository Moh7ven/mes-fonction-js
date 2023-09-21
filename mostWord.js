/* 
Creer une fonction mostWord qui prend en paramètre une chaine de caractère 
et retourne le mot le long de cette chaine. 
*/

function mostWord(chaine) {
  if (typeof chaine === "string") {
    let decoupeWord = chaine.split(" ");
    let taille = [];
    console.log(decoupeWord);

    decoupeWord.map((e) => {
      taille.push(e.length);
    });
    console.log(Math.max(...taille));
  }else {
    console.log("Veuiller entrer une chaine de caractère s'il vous plaît");
  }
}

mostWord("Bonjour le monde !");
