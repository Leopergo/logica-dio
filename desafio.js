let nomeHeroi = prompt("Digite o nome do seu Herói: ");
let xp = parseInt(prompt(`Em que nível o ${nomeHeroi} está?`));
let tier;

while(isNaN(xp)){
    xp = parseInt(prompt(`Em que nível o ${nomeHeroi} está?`));
}

if(xp <= 1000) {
    tier = "Ferro";
}else if(xp > 1000 && xp <= 2000){
    tier = "Bronze";
}else if(xp > 2000 && xp <= 5000){
    tier = "Prata";
}else if(xp > 5000 && xp <= 7000){
    tier = "Ouro";
}else if(xp > 7000 && xp <= 8000){
    tier = "Platina";      
}else if(xp > 8000 && xp <= 9000){
    tier = "Ascendente";     
}else if(xp > 9000 && xp <= 10000){
    tier = "Imortal";
}else if(xp > 10000){
    tier = "Radiante";   
}else{
    console.log("XP informado não é válido");
}

console.log(`O Herói de nome ${nomeHeroi}, está no nível de ${tier}`);

    




