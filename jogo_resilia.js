
//document.getElementById("titulo")

//var question1 = prompt("Fiquei com vontade de tocar violão" + "        O violão está afinado? " + "       Responda sim ou não:")

    if (question1 == "sim") {
        var question2 = prompt("Buscar tablatura/cifra da música" + "     Tem a tablatura/cifra da música disponível?  sim ou não:")
    }
    if (question1 == "não") {
        var question3 = prompt("Afinar o violão  " + "A corda arrebentou ao afinar? " + "   sim ou não:")
    }
    if (question2 == "sim") {
        var question4 = prompt("Tem a tablatura/cifra da música disponível?" + "   sim ou não:")
    }
    if (question2 == "não") {
        button("Deixa pra lá, nem queria aprender mesmo.")
    }
    if (question4 == "sim") {
        var question3 = prompt("Barões da pisadinha, aqui vou eu!  " + "Pô, mas tá dificil. Será que tem vídeo aula? " + "   sim ou não:")
    }
    if (question3 == "sim") {
        var question5 = prompt("Ih, vou lançar Recairei!" + " Conseguiu pegar mesmo?  sim ou não:")
    }
    if (question5 == "sim") {
        document.write("<h1>Tu é brabe! Barões que te contrate!</h1>")
    }
    if (question3 == "não") {
        var question6 = prompt("Vídeo aula ajudou?" + "   sim ou não:")
    }
    if (question6 == "sim") {
        document.write("<h1>Lança a braba então!</h1>")
    }
    if (question4 == "não") {
        alert("Deixa pra lá, nem queria aprender mesmo.")
    }
    if (question5 == "não") {
        var question6 = prompt("Não tenho o gingado deles" + " Precisando aprender mais na vídeo aula?  sim ou não:")
    }
    if (question6 == "não") {
        document.write("<h1>Deixa pra lá, tá osso demais!! </h1>")
    }
    if (question6 == "sim") {
        document.write("<h1>Lança a braba então!</h1>")
    }
