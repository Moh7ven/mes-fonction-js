/* 
Écrivez une fonction qui prend un tableau et un élément en entrée, 
et renvoie true si l'élément est présent dans le tableau, 
sinon renvoie false.
*/

function searchElement(tab, element) {
  if (typeof tab === "object") {
    if (tab.includes(element)) {
      return true;
    } else {
      return false;
    }
  }
  return -1;
}
console.log(searchElement(["bonjour", 1, 2, "hello"], 0));
