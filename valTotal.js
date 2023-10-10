/* 
*Calcul de la valeur totale :*
   Écrivez une fonction qui prend un objet représentant un panier d'achats avec des articles et leurs prix, 
   puis renvoie le coût total des articles.

*/

let panier = {
  livres: 1000,
  chaussures: 15000,
  chaine: 2000,
};

// console.log(obj);

function varTotal(panier) {
  if (typeof panier === "object") {
    let total = 0;
   for(let article in panier){
    if(panier.hasOwnProperty(article)){
      total += panier[article];
    }
   }
  }
}
console.log(varTotal(panier));
