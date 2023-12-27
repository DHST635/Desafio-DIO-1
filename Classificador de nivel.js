let nomeHeroi = "mestreTodelo"
var experienciaHeroi;
do {
    ferro += 0;
    console.log("Ferro");
} while(ferro <= 1000);
do {
    bronze += 1001;
    console.log("Bronze");
} while(bronze <= 2000);
do {
    prata += 2001;
    console.log("Prata");
} while(prata <= 5000);
do {
    ouro += 5001;
    console.log("Ouro");
} while(ouro <= 7000);
do {
    platina += 7001;
    console.log("Platina")
} while(platina <= 8000);
do {
    ascendente += 8001;
    console.log("Ascendente");
} while(ascendente <= 9000);
do {
    imortal += 9001;
    console.log("Imortal");
} while(imortal <= 10000);
do {
    radiante += 10001;
    console.log("Radiante");
} while(radiante >= 10001);
let experienciaHeroi = "Radiante"
switch (experienciaHeroi) {
    case "Ferro":
        console.log("O herói de nome " + nomeHeroi + (" está no nível Ferro"));
        break;
    case "Bronze":
        console.log("O herói de nome " + nomeHeroi + (" está no nível Bronze"));
        break;
    case "Prata":
        console.log("O herói de nome " + nomeHeroi + (" está no nível Prata"));
        break;
    case "Ouro":
        console.log("O herói de nome " + nomeHeroi + (" está no nível Ouro"));
        break;
    case "Platina":
        console.log("O herói de nome " + nomeHeroi + (" está no nível Platina"));
        break;
    case "Ascendente": 
        console.log("O herói de nome " + nomeHeroi + (" está no nível Ascendente"));
        break;
    case "Imortal":
        console.log("O herói de nome " + nomeHeroi + (" está no nível Imortal"));
        break;
    case "Radiante":
        console.log("O herói de nome " + nomeHeroi +(" está no nível Radiante"));
        break;
    default:
        console.log(nomeHeroi + (" é o novo Final Boss"));
}
