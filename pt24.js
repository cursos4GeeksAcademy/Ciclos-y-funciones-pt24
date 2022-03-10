let personas = [
    "Nicola",
    "nela",
    "luciano",
    "evadne",
    "seba",
    "cesar",
    "carlos",
    "sergio",
    "Maca",
    "julio"
  ];

  //inicializador, condicion, avance
for(let i=0; i< personas.length; i++ ){
    console.log("enviando mail a", personas[i]);
}

let galletas = 15;//14-13
while(galletas>0){//mientras tenga galletas osea hasta que galletas no lleguen a 0 
    if(galletas>5){
    console.log("Tengo muchas galletas, '¿quieres una?, me quedan",galletas);
    }
    else if(galletas<=5 && galletas>1){
        console.log("Tengo pocas galletas, '¿quieres una?, me quedan",galletas); 
    }
    else{
        console.log("Me queda una galleta, la quieres?"); 
    }
    galletas-=1
}



let sinC = [];

for(let i=0; i<personas.length; i++){
    let nombre = personas[i]
    if(nombre[0]!='c'){
        sinC.push(nombre);
    }
}
let sinA=[]
for(let i=0;i<personas.length; i++){
    if(!personas[i].includes('a')){
        sinA.push(personas[i])
    }
}
console.log(sinA)



function imc (peso, altura){
    let calculo = peso / (altura**2);
    console.log("tu imc es de", calculo)
}

function saludarPersonalizado (nombre){
    let contenido = `hola! ${nombre}, mucho gusto, soy Daisy, tu asistente virtual :D`;
    return contenido;
}

setInterval(
    ()=>{
    console.log("hola en flecha")
}, 1000)

let saludar = function(){
    console.log("hola, como estas?")
}
const respuesta = ()=>{
    console.log("yo estoy muy bien")
}
saludar()
respuesta()