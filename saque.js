function contarNotas ( contador, valor_nota ) {
    if ( contador == 1 ) {
        return contador + " nota de $" + valor_nota + "; ";
    } else if ( contador > 1 ) {
        return contador + " notas de $" + valor_nota + "; ";
    }else if( contador == 0 ){
        return "";
    }
}

function calcular () {
    var valor_inserido = document.getElementById('valor').value;
    let resultado="";
   
    if ( valor_inserido > 0 ) {
        let contador_cem = 0 , contador_cinquenta = 0, contador_dez = 0, contador_cinco = 0, contador_um = 0;

        while ( valor_inserido >= 100 ) {
            contador_cem++;
            valor_inserido -= 100;
        }
        while ( valor_inserido >= 50 ) {
            contador_cinquenta++;
            valor_inserido -= 50;
        }
        while ( valor_inserido >= 10 ) {
            contador_dez++;
            valor_inserido -= 10;
        }
        while ( valor_inserido >= 5 ) {
            contador_cinco++;
            valor_inserido -= 5;
        }
        while ( valor_inserido >= 1 ) {
            contador_um++;
            valor_inserido -= 1;
        }
        
        resultado += contarNotas(contador_cem,100);
        resultado += contarNotas(contador_cinquenta,50);
        resultado += contarNotas(contador_dez,10);
        resultado += contarNotas(contador_cinco,5);
        resultado += contarNotas(contador_um,1);

        document.getElementById('resultado').innerHTML = "Você receberá: " + resultado;
        resultado = "";
    } else {
        document.getElementById('resultado').innerHTML = "Valor inválido favor inserir um valor positivo.";
    }
}