// ============================================================
// GABARITO — LISTA DE PRÁTICA DE FUNÇÕES
// ============================================================
// ⚠️ Só abra DEPOIS de tentar. Errar e corrigir ensina mais
//    que ler a resposta pronta.
// Se a sua solução ficou diferente mas passa nos testes,
// provavelmente também está certa — existem vários caminhos.
// ============================================================


// --- 1 ---
function dobro(numero) {
  return numero * 2;
}

// --- 2 ---
function areaRetangulo(base, altura) {
  return base * altura;
}

// --- 3 ---
function saudacao(nome, periodo) {
  return `${periodo}, ${nome}!`;
}

// --- 4 ---
function celsiusParaFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

// --- 5 ---
function ehPar(numero) {
  return numero % 2 === 0;
  // Repare: a comparação JÁ é true/false, não precisa de if.
  // Versão com if também está certa, só é mais longa:
  //   if (numero % 2 === 0) { return true; } else { return false; }
}

// --- 6 ---
function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
  // Como return encerra a função, o else é opcional:
  //   if (a > b) return a;
  //   return b;
}

// --- 7 ---
function classificarIdade(idade) {
  if (idade < 12) {
    return "Criança";
  } else if (idade < 18) {
    return "Adolescente";
  } else if (idade < 60) {
    return "Adulto";
  } else {
    return "Idoso";
  }
  // A ordem importa: se "idade < 60" viesse primeiro, uma criança
  // de 8 anos cairia nele e seria classificada como "Adulto".
}

// --- 8 ---
function dividir(a, b) {
  if (b === 0) {
    return "Não é possível dividir por zero";
  }
  return a / b;
  // Validar a entrada ANTES do cálculo e sair cedo do caminho
  // ruim é um padrão muito usado no mercado ("early return").
}

// --- 9 ---
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Peso normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}

// console.log(classificarIMC(calcularIMC(70, 1.75)));  // "Peso normal"
// Uma função calcula, a outra classifica: cada uma com UMA
// responsabilidade. Isso facilita testar e reaproveitar.

// --- 10 ---
function calcularSalario(horas, valorHora) {
  if (horas <= 40) {
    return horas * valorHora;
  }

  const horasExtras = horas - 40;
  const valorNormal = 40 * valorHora;
  const valorExtra = horasExtras * (valorHora * 1.5);

  return valorNormal + valorExtra;
}

// --- 11 ---
function converter(valorEmMetros, unidade) {
  switch (unidade) {
    case "mm":
      return valorEmMetros * 1000;
    case "cm":
      return valorEmMetros * 100;
    case "dm":
      return valorEmMetros * 10;
    case "dam":
      return valorEmMetros / 10;
    case "hm":
      return valorEmMetros / 100;
    case "km":
      return valorEmMetros / 1000;
    default:
      return "Opção inválida";
  }
  // 💡 Aqui os breaks não são necessários: o return já encerra
  //    a função inteira, então não existe fall-through.
  //    Mas se fossem console.log em vez de return, os breaks
  //    seriam obrigatórios — foi exatamente o bug do exercício 3.
}

// --- 12 ---
function calcularDano(ataque, defesa, temEscudo) {
  if (ataque <= defesa) {
    return 0;
  }

  const diferenca = ataque - defesa;

  if (temEscudo) {
    return diferenca / 2;
  }

  return diferenca;
  // Versão compacta das duas últimas linhas, com ternário:
  //   return temEscudo ? diferenca / 2 : diferenca;
}

// --- 13 ---
function inverterNome(nomeCompleto) {
  const partes = nomeCompleto.split(" ");
  const primeiro = partes[0];
  const sobrenome = partes[1];

  return `${sobrenome}, ${primeiro}`;
  // .split(" ") corta o texto a cada espaço e devolve um array:
  //   "Lorenzo Correa".split(" ")  ->  ["Lorenzo", "Correa"]
}

// --- 14 ---
function precoComDesconto(preco, cupom) {
  switch (cupom) {
    case "BLACK50":
      return preco * 0.5;
    case "PROMO20":
      return preco * 0.8;
    case "FRETE":
      return preco - 10;
    default:
      return preco;
  }
}

// --- 15 ---
function media(...numeros) {
  let soma = 0;

  for (const numero of numeros) {
    soma += numero;
  }

  return soma / numeros.length;
  // ...numeros junta todos os argumentos num array.
  // numeros.length = quantos números vieram.
  // O for...of percorre os valores do array um a um.
}

// console.log(media(10, 9, 6, 8, 9, 1, 5, 7));  // 6.875
// console.log(media(25, 75));                    // 50
