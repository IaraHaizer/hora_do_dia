function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = data.toLocaleTimeString() - para buscar hora, minutos, segundos. mas só retorna o ultimo valor declarado
    if (hora >= 0 && hora < 12) {
        img.src = 'imgmanha.png'
        msg.innerHTML = `<b>Bom Dia! <p> Agora são ${hora} horas.`
        document.body.style.background = '#E5977f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imgtarde.png'
        msg.innerHTML = `<b>Boa Tarde! <p> Agora são ${hora} horas.`

        document.body.style.background = '#Eb6e14'
    } else {
        img.src = 'imgnoite.png'
        msg.innerHTML = `<b>Boa Noite! <p> Agora são ${hora} horas.`

        document.body.style.background = '#155059'
    }
}