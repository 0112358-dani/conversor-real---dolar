function calculo() {
   
    var valor = Number(document.getElementById('valTxt').value)
    var res = document.getElementById('res')
    var dolar = valor / 5.55
    var arredondado = parseFloat(dolar.toFixed(2))
    res.innerHTML = `O valor convertido é US$ ${arredondado}`


    





}