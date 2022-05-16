const elementogriglia = document.getElementById("griglia");
const bottone1 = document.getElementById("primo_liv");
const bottone2 = document.getElementById("secondo_liv");
const bottone3 = document.getElementById("terzo_liv");


//griglia da 100
const elementocreato100 = () => {
    const node = document.createElement("div");
    node.className = "quadrato100";
    return node;
}

//griglia da 81
const elementocreato81 = () => {
    const node = document.createElement("div");
    node.className = "quadrato81";
    return node;
}

//griglia da 49
const elementocreato49 = () => {
    const node = document.createElement("div");
    node.className = "quadrato49";
    return node;
}


//livello very easy
bottone1.addEventListener("click",
    function(){
        const mionuovoarray = arrayrandom(100, 1, 100);
        console.log(mionuovoarray);
        const  bomba = arraybomb(16, 1, 100);  
        console.log(bomba);                                 

//for per creare cento celle
for(let i = 0; i < mionuovoarray.length; i++){
    const elementdiv = elementocreato100();

    let arrayitem = mionuovoarray[i]; 

    elementdiv.addEventListener("click",
    function(){
        elementdiv.append(arrayitem);
        
        if(bomba.includes(arrayitem)){
            this.classList.add("click-rosso");
        }else{
            this.classList.add("cliccato");
        }
    }
    );

    elementogriglia.append(elementdiv);
    }

});


//livello normal
bottone2.addEventListener("click",
    function(){
        const mionuovoarray = arrayrandom(81, 1, 81);
        console.log(mionuovoarray);
        const  bomba = arraybomb(16, 1, 81);  
        console.log(bomba);   

//for per creare 81 celle
for(let i = 0; i < mionuovoarray.length; i++){
    const elementdiv = elementocreato81();

    let arrayitem = mionuovoarray[i]; 

    
    elementdiv.addEventListener("click",
    function(){
        elementdiv.append(arrayitem);

        if(bomba.includes(arrayitem)){
            this.classList.add("click-rosso");
        }else{
            this.classList.add("cliccato");
        }
    }
    );


    elementogriglia.append(elementdiv);
    }

    }
);

//livello difficile
bottone3.addEventListener("click",
    function(){
        const mionuovoarray = arrayrandom(49, 1, 49);
        console.log(mionuovoarray);
        const  bomba = arraybomb(16, 1, 49);  
        console.log(bomba);

//for per creare cento celle
for(let i = 0; i < mionuovoarray.length; i++){
    const elementdiv = elementocreato49();

    let arrayitem = mionuovoarray[i]; 
    
    elementdiv.addEventListener("click",
    function(){
        //mostra numeri
        elementdiv.append(arrayitem);
        if(bomba.includes(arrayitem)){
            this.classList.add("click-rosso");
        }else{
            this.classList.add("cliccato");
        }
    }
    );


    elementogriglia.append(elementdiv);
    }

    }
);

//creare array random
function arrayrandom(elementi, min, max){
    const arrayvuoto=[];

    while(arrayvuoto.length < elementi){
        let randomnumero = randomNumMinMax(min, max);

        if(!arrayvuoto.includes(arrayrandom)){
            arrayvuoto.push(randomnumero);
        }
    }
    return arrayvuoto;
}

// funzione per generare numero casuale 
function randomNumMinMax(rangeMin, rangeMax) {
    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
};

//funzione array bomb
function arraybomb(elementi, min, max){
    const arraybombavuoto = [];

    while(arraybombavuoto.length < elementi){
        let random_bomb = randomNumMinMax(min,max);

        if(!arraybombavuoto.includes(arraybomb)){
            arraybombavuoto.push(random_bomb);
        }
    }
    return arraybombavuoto;
}