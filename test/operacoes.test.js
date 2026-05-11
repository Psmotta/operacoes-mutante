const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Aprimorada para 50 Operações Aritméticas', () => {
  // === Testes Originais (1-50) - Mantidos ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });

  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });

  // === NOVOS TESTES — Direcionados para matar mutantes sobreviventes ===

  // ---- Mensagens de erro específicas (matam mutantes StringLiteral) ----
  test('51. divisao por zero deve lançar erro com mensagem específica', () => {
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('52. raizQuadrada de negativo deve lançar erro com mensagem específica', () => {
    expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });
  test('53. fatorial de negativo deve lançar erro com mensagem específica', () => {
    expect(() => fatorial(-3)).toThrow('Fatorial não é definido para números negativos.');
  });
  test('54. maximoArray vazio deve lançar erro com mensagem específica', () => {
    expect(() => maximoArray([])).toThrow('Array vazio');
  });
  test('55. minimoArray vazio deve lançar erro com mensagem específica', () => {
    expect(() => minimoArray([])).toThrow('Array vazio');
  });
  test('56. inverso de zero deve lançar erro com mensagem específica', () => {
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });
  test('57. medianaArray vazio deve lançar erro com mensagem específica', () => {
    expect(() => medianaArray([])).toThrow(/Array vazio/);
  });

  // ---- Casos limite numéricos (matam mutantes EqualityOperator e ConditionalExpression) ----
  test('58. raizQuadrada de 0 deve retornar 0 (fronteira de n<0)', () => {
    expect(raizQuadrada(0)).toBe(0);
  });
  test('59. fatorial de 0 deve retornar 1', () => {
    expect(fatorial(0)).toBe(1);
  });
  test('60. fatorial de 1 deve retornar 1', () => {
    expect(fatorial(1)).toBe(1);
  });
  test('61. fatorial de 5 deve retornar 120 (loop)', () => {
    expect(fatorial(5)).toBe(120);
  });
  test('62. mediaArray vazio deve retornar 0 (não NaN)', () => {
    expect(mediaArray([])).toBe(0);
  });
  test('63. somaArray vazio deve retornar 0', () => {
    expect(somaArray([])).toBe(0);
  });

  // ---- isPar / isImpar — combinação de booleanos (mata ConditionalExpression true e ArithmeticOperator) ----
  test('64. isPar de número ímpar deve ser false', () => {
    expect(isPar(3)).toBe(false);
  });
  test('65. isPar de zero deve ser true', () => {
    expect(isPar(0)).toBe(true);
  });
  test('66. isImpar de número par deve ser false', () => {
    expect(isImpar(4)).toBe(false);
  });
  test('67. isImpar de 2 deve ser false (mata mutação aritmética n*2)', () => {
    expect(isImpar(2)).toBe(false);
  });
  test('68. isImpar de zero deve ser false', () => {
    expect(isImpar(0)).toBe(false);
  });

  // ---- Porcentagens com zero (mata mutações na cadeia aritmética) ----
  test('69. calcularPorcentagem com percentual zero retorna 0', () => {
    expect(calcularPorcentagem(0, 200)).toBe(0);
  });
  test('70. aumentarPorcentagem com percentual zero retorna o próprio valor', () => {
    expect(aumentarPorcentagem(100, 0)).toBeCloseTo(100);
  });
  test('71. diminuirPorcentagem com percentual zero retorna o próprio valor', () => {
    expect(diminuirPorcentagem(100, 0)).toBeCloseTo(100);
  });
  test('72. inverterSinal de número negativo retorna positivo', () => {
    expect(inverterSinal(-7)).toBe(7);
  });

  // ---- Trigonometria — valores diferentes de zero (mata mutações nas chamadas Math.*) ----
  test('73. seno de PI/2 deve ser 1', () => {
    expect(seno(Math.PI / 2)).toBeCloseTo(1);
  });
  test('74. cosseno de PI deve ser -1', () => {
    expect(cosseno(Math.PI)).toBeCloseTo(-1);
  });
  test('75. tangente de PI/4 deve ser 1', () => {
    expect(tangente(Math.PI / 4)).toBeCloseTo(1);
  });

  // ---- isPrimo — vários casos (mata mutações nos loops e condições) ----
  test('76. isPrimo de 0 deve ser false', () => {
    expect(isPrimo(0)).toBe(false);
  });
  test('77. isPrimo de 1 deve ser false', () => {
    expect(isPrimo(1)).toBe(false);
  });
  test('78. isPrimo de 2 deve ser true (primo de fronteira)', () => {
    expect(isPrimo(2)).toBe(true);
  });
  test('79. isPrimo de 4 deve ser false (composto)', () => {
    expect(isPrimo(4)).toBe(false);
  });
  test('80. isPrimo de 9 deve ser false (composto não-par)', () => {
    expect(isPrimo(9)).toBe(false);
  });

  // ---- mdc / mmc / fibonacci adicionais ----
  test('81. mdc com iteração não-trivial mdc(48, 18) = 6', () => {
    expect(mdc(48, 18)).toBe(6);
  });
  test('82. mdc de coprimos mdc(7, 13) = 1', () => {
    expect(mdc(7, 13)).toBe(1);
  });
  test('83. mmc com fatores comuns mmc(4, 6) = 12', () => {
    expect(mmc(4, 6)).toBe(12);
  });
  test('84. fibonacci de 0 deve ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
  test('85. fibonacci de 1 deve ser 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  // ---- clamp — todos os ramos ----
  test('86. clamp abaixo do mínimo retorna o mínimo', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });
  test('87. clamp acima do máximo retorna o máximo', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  // ---- produtoArray, isDivisivel, conversões ----
  test('88. produtoArray vazio deve retornar 1', () => {
    expect(produtoArray([])).toBe(1);
  });
  test('89. isDivisivel falso para resto diferente de zero', () => {
    expect(isDivisivel(7, 2)).toBe(false);
  });
  test('90. celsiusParaFahrenheit(100) deve ser 212', () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
  });
  test('91. celsiusParaFahrenheit(-40) deve ser -40', () => {
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
  });
  test('92. fahrenheitParaCelsius(212) deve ser 100', () => {
    expect(fahrenheitParaCelsius(212)).toBe(100);
  });
  test('93. fahrenheitParaCelsius(-40) deve ser -40', () => {
    expect(fahrenheitParaCelsius(-40)).toBe(-40);
  });

  // ---- Geometria ----
  test('94. areaCirculo de raio 0 deve ser 0', () => {
    expect(areaCirculo(0)).toBe(0);
  });
  test('95. areaRetangulo com lado zero deve ser 0', () => {
    expect(areaRetangulo(0, 5)).toBe(0);
  });
  test('96. perimetroRetangulo(3, 4) deve ser 14', () => {
    expect(perimetroRetangulo(3, 4)).toBe(14);
  });

  // ---- isMaiorQue / isMenorQue / isEqual — casos negativos e fronteira ----
  test('97. isMaiorQue false quando menor', () => {
    expect(isMaiorQue(5, 10)).toBe(false);
  });
  test('98. isMaiorQue false quando igual (mata mutação a>=b)', () => {
    expect(isMaiorQue(5, 5)).toBe(false);
  });
  test('99. isMenorQue false quando maior', () => {
    expect(isMenorQue(10, 5)).toBe(false);
  });
  test('100. isMenorQue false quando igual (mata mutação a<=b)', () => {
    expect(isMenorQue(5, 5)).toBe(false);
  });
  test('101. isEqual false para diferentes', () => {
    expect(isEqual(5, 3)).toBe(false);
  });

  // ---- medianaArray — desordenado, comprimento par, validação ----
  test('102. medianaArray desordenado deve ordenar antes de calcular', () => {
    expect(medianaArray([3, 1, 2, 5, 4])).toBe(3);
  });
  test('103. medianaArray de comprimento par deve ser média dos centrais', () => {
    expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
  });
  test('104. medianaArray de [10, 20, 30, 40, 50, 60] deve ser 35', () => {
    expect(medianaArray([10, 20, 30, 40, 50, 60])).toBe(35);
  });

  // ---- dobro / triplo / metade — outros valores ----
  test('105. dobro de número negativo', () => {
    expect(dobro(-5)).toBe(-10);
  });
  test('106. triplo de número negativo', () => {
    expect(triplo(-4)).toBe(-12);
  });
  test('107. metade de número negativo', () => {
    expect(metade(-10)).toBe(-5);
  });

  // ---- Reforço em operações básicas com sinais variados ----
  test('108. soma com negativos', () => {
    expect(soma(-3, -7)).toBe(-10);
  });
  test('109. multiplicacao com negativo', () => {
    expect(multiplicacao(-3, 4)).toBe(-12);
  });
  test('110. divisao retorna fração correta', () => {
    expect(divisao(7, 2)).toBe(3.5);
  });
});
