var a = document.getElementById('numberA')
var b = document.querySelector('input#numberB')
var c = document.getElementsByName('numberC')[0]
var res_delta2 = document.getElementById('res_delta')
var res_delta_sub2 = document.getElementById('res_delta_sub')
var x1_res = document.getElementById('x1')
var x2_res = document.querySelector('p#x2')
var div_raiz = document.getElementById('button_two')
function deltaCalc() {

    var a2 = Number(a.value)
    var b2 = Number(b.value)
    var c2 = Number(c.value)
    var delta = b2 ** 2 - 4 * a2 * c2
    res_delta_sub2.innerHTML = `&Delta; = <strong>${delta}</strong>`
    if (delta > 0) {
        res_delta2.innerHTML = 'Existem Raízes'
        div_raiz.style.display = 'unset'
    } else if (delta < 0) {
        res_delta2.innerHTML = 'Não existem raízes reais'
        div_raiz.style.display = 'none'
        x1.innerHTML = ''
        x2.innerHTML = ''
    } else {
        res_delta2.innerHTML = 'As raízes serão iguais'
        div_raiz.style.display = 'unset'
    }
}
function raizCalc() {
    var a2 = Number(a.value)
    var b2 = Number(b.value)
    var c2 = Number(c.value)
    var delta = b2 ** 2 - 4 * a2 * c2
    if (delta > 0 || delta == 0) {
        var raiz = Math.sqrt(delta)
        var x1 = (-b2 + raiz) / (2 * a2)
        var x2 = (-b2 - raiz) / (2 * a2)
        x1_res.innerHTML = `O x' ou x1 vale: <strong>${x1.toLocaleString('pt-BR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        })}</strong><br>`
        x2_res.innerHTML = `O x'' ou x2 vale: <strong>${x2.toLocaleString('pt-BR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        })}</strong><br>`
    }
}