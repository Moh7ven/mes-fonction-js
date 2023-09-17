/* 
Créer une chaine de caractère qui renvoie le message: "oui c'est un palindome"
si la chaine de caractères qu'on lui passe est un palindrome.

Un palindrome est un mot qui peut être écrire dans les deux sens.
Exemples: "kayak" 
*/

function palindrome(mot) {
    if(typeof mot === 'string'){
        if(mot.includes(" ")){
            return "Veuillez entrer un mot";
        }
        else {
            let motReverse = mot.split("").reverse().join("");
            if(mot.toLowerCase() === motReverse.toLowerCase()){
                return `Oui, le mot "${mot}" c'est un palindrome`;
            }else {
                return `Non, "${mot}" ce n'est pas un palindrome`;
            }
        }
    }
    return "Veuillez entrer une chaine de caractère";
}

console.log(palindrome("momo")); 