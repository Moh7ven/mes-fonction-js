/**
 *
 * Créer  une fonction multi qui prend un élément en paramètre et fais la table de multiplication de ce nombre.
 * Exemple: multi(2);
 * =>"2,4,6,8,10,12,14,16,18,20"
 */

function multi(a) {
  let nouv = [];
  if (typeof a === "number") {
    for (let i = 1; i <= 10; i++) {
      nouv.push(i * a);
    }
    return nouv.join();
  }
}

console.log(multi(2));
