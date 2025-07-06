let miHeladito = [];
let cantidades =[];
let miArrayUnion = [];
let miArraySel = [];
let miArray = [];
let miGusto = [];
let miArrayFormato = [];
let miCantidad = [];
let aa = "";
let numb = [];
let miArrayNum = [];
let miArrGustos = [];
let miArraySabor = [];
let miSeleccion = [];
let miGustoSabor = [];
let i = 1;
let H = 0;
let r = 0;
let miCantPedido= [];
let j = 0;
let miIdarray =[]
let k = 0;
let ids = 0;
let canGustos = 0;
let miId = [];
let miArrayPrecio = [];

let datoRecuperdo = localStorage.getItem('cantFormato');
console.log('dato recuperado', datoRecuperdo);
const cantRecuperado = JSON.parse(datoRecuperdo);
//console.log('accediendo a elemento del array recuperado', cantRecuperado[0]);

if (cantRecuperado === 0) {
    console.log('cant recuperada',cantRecuperado)
} else {
    let arrayNumRecup = parseInt(cantRecuperado);
        let J = arrayNumRecup++;
    let nvoCantTipo = [J];
    localStorage.setItem('cantFormato', JSON.stringify(nvoCantTipo));
    console.log('nvo formato pedido',nvoCantTipo)
} 
/*let miCantTipo = []
localStorage.setItem('cantFormato', JSON.stringify(miCantTipo));*/

   // const todos = document.getElementsByClass('cantidad');
  
	 const todos = document.querySelectorAll('.grid-conteiner checkbox-container');
        console.log("todos",todos)
         todos.forEach(() => {
            r++
            let loco = parseInt(r)  
             const ids = 'P' + string(loco);
            localStorage.setItem(ids, JSON.stringify(todos));
	
     }) 
    const numbers = document.querySelectorAll('.checkbox-container1 input[type="number"]');
    const checkboxes = document.querySelectorAll('.checkbox-container1 input[type="checkbox"]');
    localStorage.setItem('numbers', JSON.stringify(numbers));

checkboxes.forEach((checkbox) => {
    console.log(checkbox.name);
       

    // Selecciona el input number hermano del checkbox dentro del mismo contenedor
    const numberInput = checkbox.closest('.checkbox-container1').querySelector('input[type="number"]');

    if (numberInput) {
        numberInput.addEventListener('change', () => {
            console.log(numberInput.value);
            miArrayNum.push(
                numberInput.name              //  numberInput.value
                        
            );
            miArrayPrecio.push(numberInput.getAttribute('precio')); // Get the price attribute
            console.log("miArrayNer0o=", miArrayNum);
            miCantidad.push(numberInput.name, numberInput.value); // Add the value to miCantidad
            
            console.log("mi Array mi Cantidad", miCantidad);
            

            let longit = miCantidad.length;
            localStorage.setItem('cantGustos', JSON.stringify(longit));
            console.log("logitud del array mi cantidad=", longit);
            console.log("miArrayFormato", miArrayFormato.length);

            for (let h = 0; h <= miCantidad.length; h++) {
                console.log("contador=", h);
            }
            miArrayFormato.push(numberInput.name);
            console.log("miArray Precio", miArrayPrecio);
            miGusto.push(numberInput.name);
            console.log(" mi ArrayFormato", miArrayFormato);
            console.log(" mi Array Gusto", miGusto);
            console.log('miArrayFormato:', miArrayFormato);
        
        });
        
        
               
    }
}
                
);
        //
        
 
/*function selecGustos() {
    console.log(" estoy en gustos", miArrayFormato)
    let log = miArrayFormato.length
    for (let r = 0; r < log; r++) {
        // Loop body can 
        let tipo = miArrayFormato[r]
        alert(" Elije el Gusto para el ", tipo)
    }
}*/
        
    
    // const gustos = document.querySelectorAll('.sabor input[type="number"]'); // Removed unused variable
    const saborCheckboxes = document.querySelectorAll('.sabor input[type="checkbox"]');
saborCheckboxes.forEach((checkbox) => {
    console.log(checkbox.name);
    // Selecciona el input number hermano del checkbox dentro del mismo contenedor
    const numberInput = checkbox.closest('.sabor').querySelector('input[type="number"]');
    if (numberInput) {
        numberInput.addEventListener('change', () => {

            console.log('valor inmpu number', numberInput.value);
            miArrGustos.push(numberInput.name);
            // Push the selected flavor into miGustoSabor
            miGustoSabor.push(numberInput.name);

            
            console.log("miArray Precio", miArrayPrecio);
            console.log("miGustoSabor", miGustoSabor);
            console.log("miArray Gustos=", miArrGustos);
            miArraySabor.push(numberInput.name, numberInput.value); // Add the value to miCantidad
            console.log("mi Array mi Sabor", miArraySabor);
            let longit = miArrGustos.length;

            localStorage.setItem('cantGustos', JSON.stringify(longit));

            console.log("logitud del arrGustos=", longit);
            console.log("formato", miArrayFormato.length);
            console.log("ArrGustos", miArrGustos);
            let tipo = miArrayFormato.length;
            localStorage.setItem('cantformatos', JSON.stringify(tipo));

            console.log("logitud del array mi cantidad=", longit);
            //for (let h = 0; h <= miArraySabor.length; h++) {                    
           
            if (tipo === longit) {
                for (let i = 0; i < miArrayFormato.length; i++) {
                    let forma = miArrayFormato[i];
                    let gustsab = miGustoSabor[i];
                    let pprecio = miArrayPrecio[i];
                    let importe = parseInt(pprecio);
                        // console.log(num);
                    // let H = num; // If you need a counter, use i or another variable
                    // let H = H++; // This line is unnecessary and incorrect
                    // let ids = i.toString(); // Removed unused variable
                    let ids = (i + 1);

                    let iidd = ids;
                    const niidd = `${iidd}`;
                    let helado = ['id', niidd, 'nombre', forma + ' ' + gustsab, 'cantidad', 1, 'precio', importe];
                    console.log(helado)
                    // let helado = forma + " " + gustsab;
                    //  let k = k++;
                    //   console.log(k);
                    //  let ids = miIdarray.push[k];
                
                    //  let heladito= ['id:', `$({k})` ,'nombre:', forma + ' ' + gustsab, 'cantidad:',1 ];
                    //   console.log(heladito);
                    
                    //let objeto 
                    miArrayUnion.push(
                        helado,
                        //     heladito
                    );
                    //   miHeladito.push(heladito);
                }
                console.log("mi array union", miArrayUnion);
                //let objetivo =  {};
                //  let objeto = {};
                
                /* let objetivo = array.reduce((acc,value,index) => {
                    if (index % 2 === 0) {
                        acc[value] = [index + 1];
                    }
                   return acc;
                    }, {});
                    console.log(" array objetivo",objetivo);*/
               
               
                //    + ' ' + (miGustoSabor(i))]);
                console.log(" mi array union", miArrayUnion);
                
                miSeleccion.push(miArrayUnion);
                console.log("mi Seleccion", miSeleccion);
                localStorage.setItem('heladoElegidoarray1', JSON.stringify(miArrayUnion));
                
                let formatoRecuperado = localStorage.getItem('heladoElegidoarray1');
                const arrays = JSON.parse(formatoRecuperado)
                console.log(arrays);
              
                let objetos = arrays.map(array => {
                    return array.reduce((acc, value, index) => {
                        if (index % 2 === 0) {
                            acc[value] = array[index + 1]
                        }
                        return acc;
                    }, {});
                 
                });
                console.log("pasadosaObjeto10", objetos)

                //if (objeto.length() === 0) {

                /*  for (let i = 0; i < array.length; i += 2) {
                       objeto[array[i]] = array[i + 1];
                  
                      console.log("objeto ",objeto);*/
                alert((' La Cantidad de Gustos === La Cantidad del Formato Elegido          ') + (' Pulse Fin Seleccion Gustos para continuar ...............!!!!!'));
        localStorage.setItem('heladosObjetoElegidos10', JSON.stringify(objetos));


            } else {
                const tiposel = JSON.parse(localStorage.getItem('cantformatos'));
                console.log("tipo seleccionado", tiposel);  
                const gustsel = JSON.parse(localStorage.getItem('cantGustos'));
                console.log("gustos seleccionados", gustsel);   
                if ( tiposel === gustsel) {
                    console.log("LA CANTIDAD DE GUSTOS COINCIDE CON LA CANTIDAD DE FORMAROS ELEGIDOS");
                    alert(' Elegiste ' + longit + ' gustos de ' + tipo);
                
                } else {
                    alert((' Elegiste (' + longit + ') gustos de (' + tipo +")                                                                        ") + ("Si la Cantidad de Gustos supera al Formato   ....................... !!!                 ")+("Pulse Elegir de Nuevo    !!!! ") );
                    console.log(" LA CANTIDAD DE GUSTOS NO COINCIDE CON LA CANTIDAD DE FORMAROS ELEGIDOS");   

                 
    }
    

              /*  let canGustos = string(longit);   
                let cFormato = string(tipo);
                console.log("cantidad de gustos", canGustos);
                localStorage.setItem('cantidadGustos', JSON.stringify(cantGustos));

                console.log("cantidad de gustos", cantGustos);  
                alert(' Elegiste ' + canGustos + 'gusto de ' + cFormato);           
                alert( " LA CANTIDAD DE GUSTOS NO COINCIDE CON LA CANTIDAD DE FORMAROS ELEGIDOS");    
                             console.log(" LA CANTIDAD DE GUSTOS NO COINCIDE CON LA CANTIDAD DE FORMAROS ELEGIDOS");*/
            } 
        });
    }
});
    





miSelTipoGusto();



function miSelTipoGusto() {
    let canPedido = Number(localStorage.getItem('cantidadFormato')) || 0; 
    if (canPedido === 0) {
        canPedido++;
        miCantPedido.push(canPedido);
        localStorage.setItem('cantFormato', JSON.stringify(canPedido));
   
    }

    //iSeleccion.push(miArrayUnion)

    // console.log(miSeleccion) 
    miArrayUnion = [];
}

//miFinPedido();
 

function miFinPedido() {

  let canPedido = "0"
    miCantPedido.push(canPedido);
        localStorage.setItem('cantFormato', JSON.stringify(canPedido));
        console.log("arrayCant Pedido", miCantPedido);


}

