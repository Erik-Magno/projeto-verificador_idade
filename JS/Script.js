function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    let fano = document.getElementById('anoo').value
    let res = document.querySelector('div#res')
    if (fano.length == 0 || fano > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagem/crianca-m.jpg')
            } else if (idade >=10 && idade < 21) {
                //jovem
                img.setAttribute('src','imagem/jovem-m.png')
            } else if (idade < 50 ){
                //adulto
                img.setAttribute('src','imagem/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src','imagem/idoso-m.png')
            }
            } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagem/crianca-f.png')
            } else if (idade >=10 && idade < 21) {
                //jovem
                img.setAttribute('src','imagem/jovem-f.png')
            } else if (idade < 50 ){
                //adulto
                img.setAttribute('src','imagem/adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src','imagem/idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
