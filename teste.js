let nomeHeroi = prompt("Digite o nome do seu Herói: ");


let xp = prompt(`Em que nível o ${nomeHeroi} está?`);

while(xp < 1000 && xp < 10000){
    let xp = prompt(`Em que nível o ${nomeHeroi} está?`);
}

switch(xp){
    case xp <= 1000:
        console.log(`O Herói de nome ${nomeHeroi}, está no nível de Ferro`);
        break;
    case xp > 1000 && xp <= 2000:
        console.log(`O Herói de nome ${nomeHeroi}, está no nível de Bronze`);
        break;
    case xp > 2000 && xp <= 5000:
        console.log(`O Herói de nome ${nomeHeroi}, está no nível de Prata`);
        break;
    case xp > 5000 && xp <= 7000:
        console.log(`O Herói de nome ${nomeHeroi}, está no nível de Ouro`);
        break;
    case xp > 7000 && xp <= 8000:
        console.log(`O Herói de nome ${nomeHeroi}, está no nível de Platina`);
        break;
    case xp > 8000 && xp <= 9000:
        console.log(`O Herói de nome ${nomeHeroi}, está no nível de Ascendente`);
        break;
    case xp > 9000 && xp <= 10000:
        console.log(`O Herói de nome ${nomeHeroi}, está no nível de Imortal`);
        break;
    case xp > 8000 && xp <= 9000:
        console.log(`O Herói de nome ${nomeHeroi}, está no nível de adiante`);
        break;
}

