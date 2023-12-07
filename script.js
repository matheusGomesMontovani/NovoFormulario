$(document).ready(function () {
    $('#botao-enviar').click(function () { 
        var nome = $('#nome').val();
        var sobrenome = $('#sobrenome').val();
        var email = $('#email').val();
        var telefone = $('#telefone').val();
        var dia = $('#dia').val();
        var mes = $('#mes').val();
        var ano = $('#ano').val();
        var descricao = $('#descricao').val();

        var resposta;

        if (nome && sobrenome && email && telefone && dia && mes && ano && descricao) {
            resposta = ("Pessoa cadatrada com sucesso\n\n" +
            "Nome: " +nome+ "\n" +
            "Sobrenome: " +sobrenome+ "\n" +
            "Email: " +email+ "\n" +
            "Telefone: " +telefone+ "\n" +
            "Data de nascimento: " +dia+ "/" +mes+ "/" +ano+ "\n" +
            "Descrição: " +descricao+ "\n");
            
            alert(resposta);
        } else {
            resposta = ("O campo [Nome] é necessário\n" +
            "O campo [Sobrenome] é necessário\n" +
            "O campo [Email] é necessário\n" +
            "O campo [Telefone] é necessário\n" +
            "o campo [Dia de nascimento] é necessário\n" +
            "O campo [Mês de nascimento] é necessário\n" +
            "O campo [Ano de nascimento] é necessário\n" +
            "O campo [Descrição] é necessário\n");

            alert(resposta);
        }
    });

    $('#botao-limpar').click(function () { 
        $('#nome').val("");
        $('#sobrenome').val("");
        $('#email').val("");
        $('#telefone').val("");
        $('#dia').val("");
        $('#mes').val("");
        $('#ano').val("");
        $('#descricao').val("");
    });

    var selectDia = $('#dia');
    var dias = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
    for (var i = 0; i < dias.length; i++) {
        selectDia.append($('<option>', {
            value: dias[i],
            text: dias[i]
        }))
    }

    var selectMes = $('#mes');
    var meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    for (var i = 0; i < meses.length; i++) {
        selectMes.append($('<option>', {
            value: meses[i],
            text: meses[i]
        }))
    }

    var selectAno = $('#ano');
    for (var i = 1990; i <= 1999; i++) {
        selectAno.append($('<option>', {
            value: i,
            text: i
        }))
    }
});