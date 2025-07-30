let jogadores = [
    { vitorias: 15, derrotas: 5},
    { vitorias: 50, derrotas: 25},
    { vitorias: 100, derrotas: 40}
]

for (let i = 0; i < jogadores.length; i++){
    calculoDePartidas(jogadores[i].vitorias, jogadores[i].derrotas);

}


function calculoDePartidas (vitorias, derrotas){

let saldo = vitorias - derrotas
let nivel = "";

if (vitorias <=10){
    nivel = "Ferro";
    
} else if (vitorias >=11 && vitorias <= 20){
    nivel = "Bronze";
}
 else if (vitorias >=21 && vitorias <= 50){
    nivel = "Prata";
}
 else if (vitorias >=51 && vitorias <= 80){
    nivel = "Ouro";
}
 else if (vitorias >=81 && vitorias <= 90){
    nivel = "Diamante";
}
 else if (vitorias >=91 && vitorias <= 100){
    nivel = "Lendário";
} else {
    nivel = "Imortal";
    
}

console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivel}`);

}


