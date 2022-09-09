var valor_inserido = "";

function calcular() {
    valor_inserido = document.getElementById('valor').value;
    let resultado="";
    if ( valor_inserido > 0 ) {
        let contador_cem = 0;
        let contador_cinquenta = 0;
        let contador_dez = 0;
        let contador_cinco = 0;
        let contador_um = 0;

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
        
        if ( contador_cem == 1 ) {
            resultado = resultado + contador_cem+" nota de $100; ";
        } else if ( contador_cem > 1 ) {
            resultado = resultado + contador_cem+" notas de $100; ";
        }
        if ( contador_cinquenta == 1 ) {
            resultado = resultado + contador_cinquenta+" nota de $50; ";
        } else if ( contador_cinquenta > 1 ) {
            resultado = resultado + contador_cinquenta+" notas de $50; ";
        }
        if ( contador_dez == 1 ) {
            resultado = resultado + contador_dez+" nota de $10; ";
        } else if ( contador_dez > 1 ) {
            resultado = resultado + contador_dez+" notas de $10; ";
        }
        if ( contador_cinco == 1 ) {
            resultado = resultado + contador_cinco+" nota de $5; ";
        } else if ( contador_cinco > 1 ) {
            resultado = resultado + contador_cinco+" notas de $5; ";
        }
        if ( contador_um == 1 ) {
            resultado = resultado + contador_um+" nota de $1; ";
        } else if ( contador_um > 1 ) {
            resultado = resultado + contador_um+" notas de $1; ";
        }
        document.getElementById('resultado').innerHTML = "Você receberá: "+ resultado;
    } else {
        document.getElementById('resultado').innerHTML = "Valor inválido favor inserir um valor positivo";
    }
}

