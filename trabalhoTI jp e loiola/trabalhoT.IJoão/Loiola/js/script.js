class Moedas {
    dolar;
    real;
    libra;
    euro;
    
   


    constructor() {

        this.dolar = 4.66
        this.real = 0
        this.libra = 6.03
        this.euro = 5.04
    }

  
  converterRealDolar() {
        this.real = document.getElementById("realDolar").value;

        const valorEmDolar = (this.real) / this.dolar;

        const valorConvertido = valorEmDolar.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        document.getElementById("resultadoRealDolar").innerText = `${valorEmReal} é igual a ${valorConvertido}`
    }


  converterRealEuro() {
        this.real = document.getElementById("realEuro").value;

        const valorEmEuro = this.real/this.euro;

        const valorConvertido = valorEmEuro.toLocaleString('en-US', {style: 'currency', currency: 'AED'})

        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        document.getElementById("resultadoRealAED").innerText = `${valorEmReal} é igual a ${valorConvertido}`
    }

converterRealLibra() {
        this.real = document.getElementById("realLibra").value;

        const valorEmLibra = this.real/this.euro;

        const valorConvertido = valorEmYenes.toLocaleString('en-US', {style: 'currency', currency: 'JPY'})

        const valorEmReal = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        document.getElementById("resultadoRealYenes").innerText = `${valorEmReal} é igual a ${valorConvertido}`
    }


converterDolarReal() {
        this.dolar = document.getElementById("dolarReal").value;

        const valorEmReal = (this.dolar) / this.real- 1.10;

        const valorConvertido = valorEmReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        const valorEmDolar = parseFloat(this.dolar).toLocaleString('en-US', {style: 'currency', currency: 'USD'})

        document.getElementById("resultadoDolarReal").innerText = `${valorEmDolar} é igual a ${valorConvertido}`
    }

    converterEuroReal() {
        this.real = document.getElementById("euro").value;
        console.log(this.real)
        VerificarZero();

        const valorEmReal = this.euro*this.real;
        const valorConvertido = valorEmReal.toLocaleString('en-US', {style: 'currency', currency: 'BRL'})
        const valorEmEuro = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})

        document.getElementById("resultadoDaConversaoEuroReal").innerText = `${valorEmEuro} é igual a ${valorConvertido}`
    }
    
    converterLibraReal() {
        this.real = document.getElementById("libra").value;
        console.log(this.real)
        VerificarZero();

        const valorEmReal = this.libra*this.real;
        const valorConvertido = valorEmReal.toLocaleString('en-US', {style: 'currency', currency: 'BRL'})
        const valorEmLibra = parseFloat(this.real).toLocaleString('pt-BR', {style: 'currency', currency: 'GBP'})

        document.getElementById("resultadoDaConversaoLibraReal").innerText = `${valorEmLibra} é igual a ${valorConvertido}`
    }
}
const moeda = new Moedas();
