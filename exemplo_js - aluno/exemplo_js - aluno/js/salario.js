$("#calcular").click(function () {
    var nome = $("#txtnome").val();
    var idade = parseInt($("#txtidade").val());
    var salario = parseFloat($("#txtsalario").val());
    var dependentes = parseInt($("#txtdependentes").val());

    var bonus = 0;
    switch (true) {
        case (idade > 50):
            bonus = 500;
            break;
        default:
            bonus = 200;
    }

    var dependentesBonus = 50 * dependentes;
    var inss = (salario * 0.08).toFixed(2);
    var vr = (salario * 0.05).toFixed(2);
    var salarioLiquido = ((salario - inss - vr + bonus) + dependentesBonus).toFixed(2);
    alert("Seu nome é: " + nome);
    alert("Você tem: " + dependentes + " Dependentes");
    alert("Seu salário bruto é: " + salario);
    alert("Seu INSS é: R$" + inss);
    alert("Seu vale-transporte é: R$" + vr);
    alert("Seu salário líquido é: R$" + salarioLiquido);
})