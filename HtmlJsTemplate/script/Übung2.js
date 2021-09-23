class Spieler {
    constructor (name){
        this.Name = name;
        this.Handkarten = [1,2,3,4,5];
        this.Punkte = 0;
    }
}
let anzahlSpieler = prompt("Wie viele Spieler? (1 -4)");
let arr = [];
for (let i = 1; i <= anzahlSpieler; i++){
    let nameSpieler = prompt("Name Spieler" + i + "?");
    let spieler =  new Spieler(nameSpieler);
    arr.push(spieler);
}
for (let i = 0; i < arr.length; i++){
console.log(arr[i]);
}