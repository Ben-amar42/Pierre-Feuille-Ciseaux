//joueur choissie entre P.F.C
//l'ordinateur choissie entre P.F.C
//Conparer le choix du joueur et de l'ordinatuer
//afficher les choix du joueur et de l'ordinateur
//l'ordinateur doix choisir aléatoirement



function joueur(choixUtilisateur) {
    return prompt("Pierre, Feuille, Ciseaux");

}


function ordinateur() {
    let choixOrdi = Math.ceil(Math.random ()*3)
    console.log(choixOrdi)
}

function AI(){
let choixOrdi = Math.ceil(Math.random ()*3)

if (choixOrdi==1){
    console.log("pierre")
}
else if (choixOrdi==2){
    console.log("feuille")
}
else if (choixOrdi==3){
    console.log("ciseaux")
}
}


