const buttonConvert = document.getElementById("botaoConverter")
const moedaSelecionada = document.getElementById("selecionadorDeMoeda")
const moedaSeletora = document.getElementById("moedaSeletora")

const cliquei = function () {
    const inputValorConverter = document.querySelector("#inputValor").value

    const valorPraSeConverter = document.getElementById("valorDigitado")

    const valorConvertido = document.getElementById("valorConvertido")

    const dollarToday = 5.2
    const euroToday = 6.2
    const bitToday = 140188.58
    const realToday = 1

    if (moedaSelecionada.value == "Dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputValorConverter / dollarToday)
    }

    if (moedaSelecionada.value == "Euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-EU", {
            style: "currency", currency: "EUR"
        }).format(inputValorConverter / euroToday)
    }
    if (moedaSelecionada.value == "BitCoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "BTC"
        }).format(inputValorConverter / bitToday)
    }
    if (moedaSelecionada.value == "Real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputValorConverter / realToday)
    }

    if (moedaSeletora.value == "Real") {
        valorPraSeConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", currency: "BRL"
    }).format(inputValorConverter)
}
    
        if (moedaSeletora.value == "Dolar") {
        valorPraSeConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputValorConverter )
            if (moedaSelecionada.value == "Dolar") {
            valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputValorConverter)
        }
            if (moedaSelecionada.value == "Euro") {
            valorConvertido.innerHTML = new Intl.NumberFormat("en-EU", {
                style: "currency", currency: "EUR"
            }).format(inputValorConverter * 0.91)
        }
            if (moedaSelecionada.value == "BitCoin") {
            valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "BTC"
            }).format(inputValorConverter * 0.000034)
        }
            if (moedaSelecionada.value == "Real") {
            valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputValorConverter * 6.2)
        }
    }
        if (moedaSeletora.value == "Euro") {
        valorPraSeConverter.innerHTML = new Intl.NumberFormat("en-EU", {
            style: "currency", currency: "EUR"
        }).format(inputValorConverter)
            if (moedaSelecionada.value == "Dolar") {
            valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputValorConverter * 1.09)
        }
            if (moedaSelecionada.value == "Euro") {
            valorConvertido.innerHTML = new Intl.NumberFormat("en-EU", {
                style: "currency", currency: "EUR"
            }).format(inputValorConverter)
        }
            if (moedaSelecionada.value == "BitCoin") {
            valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "BTC"
            }).format(inputValorConverter * 0.000038)
        }
            if (moedaSelecionada.value == "Real") {
            valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputValorConverter * 6.2)
        }
    }
    if (moedaSeletora.value == "BitCoin") {
        valorPraSeConverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "BTC"
        }).format(inputValorConverter)
        if (moedaSelecionada.value == "Dolar") {
            valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency", currency: "USD"
            }).format(inputValorConverter * 29122.30)
        }
            if (moedaSelecionada.value == "Euro") {
            valorConvertido.innerHTML = new Intl.NumberFormat("en-EU", {
                style: "currency", currency: "EUR"
            }).format(inputValorConverter * 26619.38)
        }
            if (moedaSelecionada.value == "BitCoin") {
            valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency", currency: "BTC"
            }).format(inputValorConverter)
        }
            if (moedaSelecionada.value == "Real") {
            valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency", currency: "BRL"
            }).format(inputValorConverter * bitToday)
        }
    }
}
function changeNameReal() {

    const realName = document.getElementById("realName")
    const realImage = document.getElementById("realImage")

    if (moedaSeletora.value == "Dolar") {
        realName.innerHTML = "Dolar"
        realImage.src = "./estados-unidos.png"
    }
    if (moedaSeletora.value == "Euro") {
        realName.innerHTML = "Euro"
        realImage.src = "./euro.png"
    }
    if (moedaSeletora.value == "BitCoin") {
        realName.innerHTML = "BitCoin"
        realImage.src = "./bitcoin.png"
    }
    if (moedaSeletora.value == "Real") {
        realName.innerHTML = "Real"
        realImage.src = "./brasil.png"
    }

    cliquei()

}

function changeName() {

    const currencyName = document.getElementById("dolarName")
    const currencyImage = document.getElementById("ImagemDolar")

    if (moedaSelecionada.value == "Dolar") {
        currencyName.innerHTML = "Dolar"
        currencyImage.src = "./estados-unidos.png"
    }
    if (moedaSelecionada.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./euro.png"
    }
    if (moedaSelecionada.value == "BitCoin") {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./bitcoin.png"
    }
    if (moedaSelecionada.value == "Real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./brasil.png"
    }

    cliquei()

}

buttonConvert.addEventListener("click", cliquei)
moedaSelecionada.addEventListener("change", changeName)
moedaSeletora.addEventListener("change", changeNameReal)
