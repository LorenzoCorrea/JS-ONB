// ============================================================
// LISTA DE PRÁTICA — FUNÇÕES
// ============================================================
// Use SÓ o que você já viu: variáveis, operadores, if/else,
// switch, template strings, prompt/alert e funções.
//
// COMO USAR:
//   1. Resolva um por vez, na ordem (a dificuldade sobe).
//   2. TESTE cada função com os casos indicados.
//   3. Só depois confira no arquivo pratica-funcoes-GABARITO.js
//
// Rode com um index.html:  <script src="pratica-funcoes.js"></script>
// ============================================================


// ------------------------------------------------------------
// NÍVEL 1 — aquecimento (return simples)
// ------------------------------------------------------------

// 1) Escreva a função dobro(numero) que RETORNA o dobro do número.
//    Testes: dobro(5) -> 10 | dobro(0) -> 0 | dobro(-3) -> -6


// 2) Escreva a função areaRetangulo(base, altura) que RETORNA a área.
//    Testes: areaRetangulo(5, 3) -> 15 | areaRetangulo(10, 10) -> 100


// 3) Escreva a função saudacao(nome, periodo) que RETORNA uma frase
//    como: "Bom dia, Lorenzo!" (periodo é "Bom dia", "Boa tarde"...)
//    Use template string.
//    Teste: saudacao("Lorenzo", "Boa noite") -> "Boa noite, Lorenzo!"


// 4) Escreva a função celsiusParaFahrenheit(celsius) que RETORNA a
//    temperatura convertida. Fórmula: F = C * 1.8 + 32
//    Testes: 0 -> 32 | 100 -> 212 | 37 -> 98.6


// ------------------------------------------------------------
// NÍVEL 2 — funções com decisão (if/else dentro)
// ------------------------------------------------------------

// 5) Escreva a função ehPar(numero) que RETORNA true se o número for
//    par e false se for ímpar. (dica: use o operador % — resto)
//    Testes: ehPar(4) -> true | ehPar(7) -> false | ehPar(0) -> true


// 6) Escreva a função maiorNumero(a, b) que RETORNA o maior dos dois.
//    Se forem iguais, retorne o próprio valor.
//    Testes: maiorNumero(10, 3) -> 10 | maiorNumero(2, 8) -> 8
//            maiorNumero(5, 5) -> 5


// 7) Escreva a função classificarIdade(idade) que RETORNA:
//      "Criança"      se idade < 12
//      "Adolescente"  se idade < 18
//      "Adulto"       se idade < 60
//      "Idoso"        se idade >= 60
//    Testes: 8 -> "Criança" | 15 -> "Adolescente" | 30 -> "Adulto"
//            60 -> "Idoso"
//    ⚠️ Atenção na ORDEM das condições!


// 8) Escreva a função dividir(a, b) que RETORNA o resultado da divisão,
//    MAS se b for 0, retorne a string "Não é possível dividir por zero".
//    Testes: dividir(10, 2) -> 5 | dividir(10, 0) -> mensagem de erro
//    (é aquela proteção que ficou pendente na sua calculadora 😉)


// 9) Escreva a função calcularIMC(peso, altura) que RETORNA o IMC
//    (peso / altura²) e a função classificarIMC(imc) que RETORNA:
//      "Abaixo do peso"  se imc < 18.5
//      "Peso normal"     se imc < 25
//      "Sobrepeso"       se imc < 30
//      "Obesidade"       se imc >= 30
//    Depois chame uma dentro da outra:
//      classificarIMC(calcularIMC(70, 1.75))  -> "Peso normal"


// ------------------------------------------------------------
// NÍVEL 3 — juntando conceitos
// ------------------------------------------------------------

// 10) Escreva a função calcularSalario(horas, valorHora) que RETORNA o
//     salário. Regra: até 40 horas, valor normal. Cada hora ACIMA de 40
//     vale 50% a mais (hora extra).
//     Testes: calcularSalario(40, 20) -> 800
//             calcularSalario(45, 20) -> 950   (800 + 5 * 30)


// 11) Reescreva o CONVERSOR DE MEDIDAS (seu exercício 3) como uma
//     função converter(valorEmMetros, unidade) que RETORNA o valor
//     convertido — sem alert, sem prompt dentro dela.
//     Se a unidade não existir, retorne "Opção inválida".
//     Testes: converter(2, "km") -> 0.002 | converter(2, "cm") -> 200
//             converter(2, "xyz") -> "Opção inválida"
//     💡 Repare como a função fica mais reutilizável que a versão com
//        alert: agora quem chama decide o que fazer com o resultado.


// 12) Reescreva o CÁLCULO DE DANO como função:
//     calcularDano(ataque, defesa, temEscudo) que RETORNA o dano.
//       - ataque > defesa e SEM escudo -> ataque - defesa
//       - ataque > defesa e COM escudo -> (ataque - defesa) / 2
//       - ataque <= defesa             -> 0
//     Testes: calcularDano(50, 30, false) -> 20
//             calcularDano(50, 30, true)  -> 10
//             calcularDano(20, 30, false) -> 0


// ------------------------------------------------------------
// NÍVEL 4 — desafios
// ------------------------------------------------------------

// 13) Escreva a função inverterNome(nomeCompleto) que recebe
//     "Lorenzo Correa" e RETORNA "Correa, Lorenzo".
//     💡 Pesquise: método .split(" ") — transforma texto em array


// 14) Escreva a função precoComDesconto(preco, cupom) que RETORNA o
//     preço final. Use SWITCH para os cupons:
//       "BLACK50" -> 50% off | "PROMO20" -> 20% off
//       "FRETE"   -> 10 reais off | qualquer outro -> sem desconto
//     Testes: precoComDesconto(200, "BLACK50") -> 100
//             precoComDesconto(200, "FRETE")   -> 190
//             precoComDesconto(200, "ABC")     -> 200


// 15) DESAFIO FINAL — o exercício da Academia de Oficiais que você
//     deixou pendente por não saber funções:
//     Escreva media(...numeros) que aceita QUALQUER quantidade de
//     números e RETORNA a média aritmética.
//     Testes: media(10, 9, 6, 8, 9, 1, 5, 7) -> 6.875
//             media(2, 5, 7, 1, -2)          -> 2.6
//             media(25, 75)                  -> 50
//     💡 Está tudo na seção 10 do Recap-Funcoes.txt (rest parameters)


// ============================================================
// CHECKLIST antes de considerar pronto (lição do switch!):
//   [ ] Testei TODOS os casos listados, não só o primeiro?
//   [ ] Testei o caso "estranho" (zero, negativo, opção inválida)?
//   [ ] A função RETORNA o valor em vez de só imprimir?
//   [ ] Reli o enunciado inteiro para ver se não faltou nada?
// ============================================================
