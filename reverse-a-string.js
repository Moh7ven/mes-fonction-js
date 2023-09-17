/*

Créer une fonction qui doit renvoyer la chaine de caractère passée
en chaine de caractère inverser.

Exemple: Hello World ! ==> ! dlroW olleH.
*/

function reverseWord(chaine) {
  if (typeof chaine === "string") {
    return chaine.split("").reverse().join("");
  }
  return false;
}

console.log(reverseWord("Hello World !"));
