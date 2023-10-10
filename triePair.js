/* 
*Filtrer des nombres pairs :*
   Écrivez une fonction qui prend un tableau de nombres en entrée 
   et renvoie un nouveau tableau contenant uniquement les nombres pairs.
*/

function triePair(tab) {
  if (typeof tab === "object") {
    let tabRecup = [];
    for (let i = 0; i < tab.length; i++) {
      if (tab[i] % 2 === 0) {
        tabRecup.push(tab[i]);
      }
    }
    return tabRecup;
  }
  return -1;
}
console.log(triePair([1, 2, 3, 4, 5, 6]));
