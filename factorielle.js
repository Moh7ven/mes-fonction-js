/* 
Écrivez une fonction qui prend un nombre en entrée 
et renvoie sa factorielle.
*/

function factorielle(n) {
  if (typeof n === "number" && n > 0) {
    let tab = [];
    for (let i = 1; i <= n; i++) {
      tab.push(i);
    }
    console.log(tab.reduce((a, b) => a * b, 1));
  }
}

factorielle(5);
