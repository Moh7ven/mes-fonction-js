function oppOrInv (a,b){
    if (typeof a === "number" && typeof b === "number") {
        if ((a+b === 0)) {
            return "oppose"
        }else if((a*b === 1)){
            return "inverse";
        }else {
            return "ok";
        }
    }
}
console.log(oppOrInv (1,-1));
