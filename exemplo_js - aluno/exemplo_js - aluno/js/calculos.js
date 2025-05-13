$("#calcular").click(function () {
    var valor1 = parseFloat($("#txtvalor").val());
    var desconto = parseFloat($("#txtdesconto").val());
    var multa = parseFloat($("#txtmulta").val());
    var final = parseFloat((valor1 * (desconto / 100)) + multa).toFixed(2);

    if (isNaN(valor1) || isNaN(desconto) || isNaN(multa)) {
        alert("Por favor, preencha todos os campos com números válidos.");
        return;
    }

    var moeda = final.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    $("#txtresultado").html("Valor final: " + moeda)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#0000FF' })
        .fadeIn(1000);


    if (final > 5) {
        alert("Valor final maior que R$5")
        $("#txtresultado").css({ 'color': '#FF0000' });
    }
    else {
        alert("Valor final menor ou igual a R$5")
        $("#txtresultado").css({ 'color': '#00FF00' });
    }

    // Exemplo de uso do operador ternário
    var mostrar = 'da média';
    mostrar = (final > 5) ? 'acima ' + mostrar : 'abaixo ' + mostrar;
    alert("O valor final está " + mostrar);

    //Switch case
    switch (true) {
        case (final > 10):
            alert("Valor final maior que R$10");
            break;
        case (final > 5):
            alert("Valor final maior a R$5");
            break;
        default:
            alert("Valor final menor ou igual a R$5");
    }

    var msg = "";
    switch (parseInt(final) % 2) {
        case 0:
            msg = "Par"
            break;
        case 1:
            msg = "Ímpar"
            break;
        default:
            alert("Valor final inválido");
    }

    $("#txtmsg")
        .text("Valor final é " + msg)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#0000FF' })
        .fadeIn(1000);

    //Fatorial
    var fatorial = 1;
    for (var i = 1; i <= final; i++) {
        fatorial *= i;
    }

    $("#txtfatorial")
        .text("Fatorial de " + final + " é " + fatorial)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': '#0000FF' })
        .fadeIn(1000);

}); 