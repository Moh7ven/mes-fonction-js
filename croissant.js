/* 
Écrivez une fonction qui trie un tableau de nombres dans l'ordre croissant.
*/

function croissant(tab) {
  if (typeof tab === "object") {
    return tab.sort((a, b) => a - b);
  }
}

console.log(croissant([10, 5, 4, 6, 7, 3]));
