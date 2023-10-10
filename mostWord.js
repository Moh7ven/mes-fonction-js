/* 
Creer une fonction mostWord qui prend en paramètre une chaine de caractère 
et retourne le mot le long de cette chaine. 
*/

/* function mostWord(chaine) {
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
 */

/* function mostGreat(char1,char2){
  if (typeof char1 === "string" && typeof char2 === "string") {
    if (char1.length > char2.length) {
      return char1;
    }else if(char1.length<char2.length){
      return char2;
    }else {
      return 'egaux';
    }
  }
}
console.log(mostGreat("Bonjour le monde !", "hello"));
 */

/* function ageTest(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    let ab = a * b;
    if (ab % 3 === 0 && ab % 2 === 0) {
      return a + b;
    } else if (ab % 5 === 0 || ab % 7 === 0) {
      return b-a;
    }else {
      return ab;
    }
  }
}
console.log(ageTest(1,2)); */

function array_min_max_product(T1) {
  if (typeof T1 === "object") {
    let max = Math.max(...T1);
    let min = Math.min(...T1);
    return max * min;
  }
}

console.log(array_min_max_product([6, 1, 3]));
