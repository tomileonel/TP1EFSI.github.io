
const comprobarValor = (e) => {
    let nota = e.target.value    
    let valido
    if(nota > 10 || nota <0)
    {
        valido = false
        alert("La nota ingresada no es correcta, debe ser un numero del 1 al 10.")
    }

    return valido  
}

const comprobarValorSinTarget = (nota) => {

    let valido = true
    if(nota > 10 || nota <0)
    {
        valido = false
    }

    return valido  
}

const calcularPromedio = () => {

    let valor1 = document.getElementById("materia1").value
    let valor2 =document.getElementById("materia2").value
    let valor3 =document.getElementById("materia3").value

let valido = (comprobarValorSinTarget(valor1) == comprobarValorSinTarget(valor2) == comprobarValorSinTarget(valor3));

if(valido){


    let promedio = (parseInt(valor1) + parseInt(valor2) + parseInt(valor3)) / 3
    let diva= document.getElementById("divmagico")
    let img = document.getElementById("foto")
    if(promedio < 6){

    diva.innerHTML=`<h2>El promedio es: <span style="color: red;">${promedio.toFixed(2)}</span></h2>`
    foto.src="https://media.tenor.com/R01rrDEDJOUAAAAM/sangrona-peleando.gif"


    }else{
        diva.innerHTML=`<h2>El promedio es: <span style="color: green;">${promedio.toFixed(2)}</span></h2>`
        foto.src="https://media.tenor.com/hr1SBDghxpkAAAAM/muy-bien-minion.gif"
    }

}else{
    alert("Ingrese bien los valores")
}
}

const calcularMayor = () => {
    let n1,n2,n3,t,mayor,materiaMayor;

     n1 = document.getElementById("materia1").value
     n2 =document.getElementById("materia2").value
     n3 =document.getElementById("materia3").value

	if (n1 > n2) {
		t = n1;

        materiaMayor = document.getElementById("materia1").name
	}else{
		t = n2;
        materiaMayor = document.getElementById("materia2").name
	}

	if (t > n3) {
		mayor = t;
	}else{
		mayor = n3;
        materiaMayor = document.getElementById("materia3").name

	}

    
    if(n1==n2 && n1==mayor){
        materiaMayor = document.getElementById("materia1").name +" y "+document.getElementById("materia2").name
    }

    if(n1==n2 && n1==mayor && n1==n3){
        materiaMayor = document.getElementById("materia1").name +", "+document.getElementById("materia2").name + " y " + document.getElementById("materia3") 
    }

    if(n1==n3 && n1==mayor){
        materiaMayor = document.getElementById("materia1").name +" y "+document.getElementById("materia3").name
    }

    if(n2==n3 && n2==mayor){
        materiaMayor = document.getElementById("materia2").name +" y "+document.getElementById("materia3").name
    }


    let valor1 = document.getElementById("materia1")
    let valor2 =document.getElementById("materia2")
    let valor3 =document.getElementById("materia3")
    document.getElementById("materia1nombre").style.color = "black";

    document.getElementById("materia2nombre").style.color = "black";

    document.getElementById("materia3nombre").style.color = "black";



    if(valor1.value == mayor){
        document.getElementById("materia1nombre").style.color = "blue";
    }
    if(valor2.value == mayor){
        document.getElementById("materia2nombre").style.color = "blue";
    }
    if(valor3.value == mayor){
        document.getElementById("materia3nombre").style.color = "blue";
    }

    
    


    let diva= document.getElementById("divmagico")

    diva.innerHTML=`<h2>La materia con mayor nota es ${materiaMayor} y su valor es ${mayor}</h2>`

}