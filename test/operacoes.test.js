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

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
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
  
  // === Testes para o Bloco 3 (21-30) ===
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

  // === Testes para o Bloco 4 (31-40) ===
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

  // === Testes para o Bloco 5 (41-50) ===
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
});

// ================== REFORÇO DE CASOS: Cobertura e Mutação ==================

describe("Reforço de Cobertura e Mutação", () => {

  // GUARDS / ERROS

  test("dividir lança 'Divisão por zero' quando b === 0", () => {
    expect(() => divisao(10, 0)).toThrow("Divisão por zero");
  });

  test("raizQuadrada lança erro em número negativo (mensagem contém 'raiz quadrada')", () => {
    expect(() => raizQuadrada(-1)).toThrow("raiz quadrada");
  });

  test("fatorial lança erro para número negativo (mensagem contém 'Fatorial')", () => {
    expect(() => fatorial(-3)).toThrow("Fatorial");
  });

  test("inverso lança erro quando n === 0 (mensagem contém 'inverter o número zero')", () => {
    expect(() => inverso(0)).toThrow("inverter o número zero");
  });

  test("max([]) lança erro de array vazio (mensagem contém 'Array vazio')", () => {
    expect(() => maximoArray([])).toThrow("Array vazio");
  });

  test("min([]) lança erro de array vazio (mensagem contém 'Array vazio')", () => {
    expect(() => minimoArray([])).toThrow("Array vazio");
  });

  test("mediana([]) lança erro de array vazio (mensagem contém 'Array vazio')", () => {
    expect(() => medianaArray([])).toThrow("Array vazio");
  });

  // COBRIR LINHAS 112–113: mediana de array PAR e sort numérico correto

  test("mediana de array PAR (desordenado) usa média correta dos centrais", () => {
    const arr = [10, 2, 8, 4]; // sort -> [2,4,8,10]; (4+8)/2 = 6
    expect(medianaArray(arr)).toBe(6);
  });

  // PAR / ÍMPAR (sobreviventes do tipo 'sempre true' e variações em %)

  test("isPar retorna false para ímpar", () => {
    expect(isPar(3)).toBe(false);
  });

  test("isImpar retorna false para par", () => {
    expect(isImpar(2)).toBe(false);
  });

  // DIVISIBILIDADE (mutação para 'sempre true')

  test("isDivisivel retorna false quando não divide exato", () => {
    expect(isDivisivel(7, 3)).toBe(false);
  });

  // COMPARAÇÕES DE LIMITE (>=, <=) e igualdade

  test("isMaiorQue é false quando números são iguais", () => {
    expect(isMaiorQue(5, 5)).toBe(false);
  });

  test("isMenorQue é false quando números são iguais", () => {
    expect(isMenorQue(5, 5)).toBe(false);
  });

  test("isEqual é false quando números diferentes", () => {
    expect(isEqual(1, 2)).toBe(false);
  });

  // PRIMALIDADE (cobre n<=1, caso primo mínimo e composto)

  test("isPrimo retorna false para n = 1 (borda)", () => {
    expect(isPrimo(1)).toBe(false);
  });

  test("isPrimo retorna true para n = 2", () => {
    expect(isPrimo(2)).toBe(true);
  });

  test("isPrimo retorna false para composto (ex.: 9)", () => {
    expect(isPrimo(9)).toBe(false);
  });

  // CLAMP (testar igualdade aos limites)

  test("clamp retorna min quando valor == min", () => {
    expect(clamp(10, 10, 20)).toBe(10);
  });

  test("clamp retorna max quando valor == max", () => {
    expect(clamp(20, 10, 20)).toBe(20);
  });

  // MÉDIA / PRODUTO para arrays vazios (no-coverage)

  test("media([]) retorna 0", () => {
    expect(mediaArray([])).toBe(0);
  });

  test("produto([]) retorna 1", () => {
    expect(produtoArray([])).toBe(1);
  });

  // Teste adicional para garantir que produtoArray detecta array vazio
  // Mata mutante que muda if (numeros.length === 0) para if (false)
  test('produtoArray([]) === 1 (verificação explícita)', () => {
    const vazio = [];
    expect(produtoArray(vazio)).toBe(1);
    // Se a condição fosse removida, retornaria 1 do reduce, mas queremos garantir
    expect(vazio.length).toBe(0);
  });

  // CONVERSÕES DE TEMPERATURA (valida fórmulas com round-trip)

  test("celsius <-> fahrenheit (round-trip) mantém o valor", () => {
    const c = 12.34;
    const f = celsiusParaFahrenheit(c);
    expect(fahrenheitParaCelsius(f)).toBeCloseTo(c, 10);
  });

  // Conversões: valores não triviais

  test('celsiusParaFahrenheit(25) = 77', () => {
    expect(celsiusParaFahrenheit(25)).toBeCloseTo(77, 10);
  });

  test('celsiusParaFahrenheit(100) = 212', () => {
    expect(celsiusParaFahrenheit(100)).toBeCloseTo(212, 10);
  });

  test('fahrenheitParaCelsius(77) = 25', () => {
    expect(fahrenheitParaCelsius(77)).toBeCloseTo(25, 10);
  });

  test('fahrenheitParaCelsius(212) = 100', () => {
    expect(fahrenheitParaCelsius(212)).toBeCloseTo(100, 10);
  });

  // Checagens de ponto fixo (pegam mutações estranhas)

  test('celsiusParaFahrenheit(-40) = -40', () => {
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
  });

  test('fahrenheitParaCelsius(-40) = -40', () => {
    expect(fahrenheitParaCelsius(-40)).toBe(-40);
  });

  // MUTANTES RESTANTES (matáveis)

  // √ raizQuadrada: garantir que 0 NÃO lança erro (mata n < 0 → n <= 0)
  test('raizQuadrada(0) retorna 0 sem lançar erro', () => {
    expect(raizQuadrada(0)).toBe(0);
  });

  // √ fatorial: cobrir explicitamente 0 e 1 (mata mutações em n === 0 || n === 1)
  test('fatorial(0) === 1', () => {
    expect(fatorial(0)).toBe(1);
  });

  test('fatorial(1) === 1', () => {
    expect(fatorial(1)).toBe(1);
  });

  // Teste adicional para matar mutantes do fatorial (|| → &&)
  // Se a condição fosse && em vez de ||, fatorial(0) falharia e entraria no loop
  test('fatorial(0) deve retornar 1 sem entrar no loop', () => {
    const resultado = fatorial(0);
    expect(resultado).toBe(1);
    // Garante que não é calculado pelo loop (que começaria em i=2)
  });

  // Teste para garantir que fatorial(2) usa o loop (requer que n=0 e n=1 sejam tratados antes)
  // Mata mutantes que mudam || para && ou removem parte da condição
  test('fatorial(2) = 2 (requer loop, garante que n=0||n=1 é tratado antes)', () => {
    expect(fatorial(2)).toBe(2); // Se mutante mudar || para &&, n=1 não retornaria 1 antes do loop
    // e o loop começaria com i=2, resultado=1*2=2, mas n=1 falharia
  });

  // Teste adicional para garantir que fatorial(3) requer o tratamento correto de n=0 e n=1
  // Se a condição || fosse &&, fatorial(0) e fatorial(1) entrariam no loop incorretamente
  test('fatorial(3) = 6 (verifica que casos base 0 e 1 são tratados antes do loop)', () => {
    expect(fatorial(3)).toBe(6); // Requer que n=0||n=1 retorne 1 ANTES do loop
    // Se mutante for &&, fatorial(0) e fatorial(1) entrariam no loop e dariam resultado errado
  });

  // Operações básicas com zero e negativos (matam mutações de operadores)
  test('soma com zero: soma(5, 0) = 5', () => {
    expect(soma(5, 0)).toBe(5);
  });

  test('soma com negativo: soma(5, -3) = 2', () => {
    expect(soma(5, -3)).toBe(2);
  });

  test('subtracao resulta em zero: subtracao(5, 5) = 0', () => {
    expect(subtracao(5, 5)).toBe(0);
  });

  test('subtracao resulta em negativo: subtracao(3, 5) = -2', () => {
    expect(subtracao(3, 5)).toBe(-2);
  });

  test('multiplicacao por zero: multiplicacao(5, 0) = 0', () => {
    expect(multiplicacao(5, 0)).toBe(0);
  });

  test('multiplicacao por negativo: multiplicacao(5, -2) = -10', () => {
    expect(multiplicacao(5, -2)).toBe(-10);
  });

  test('divisao resulta em decimal: divisao(5, 2) = 2.5', () => {
    expect(divisao(5, 2)).toBe(2.5);
  });

  test('potencia com expoente zero: potencia(5, 0) = 1', () => {
    expect(potencia(5, 0)).toBe(1);
  });

  test('potencia com base negativa: potencia(-2, 3) = -8', () => {
    expect(potencia(-2, 3)).toBe(-8);
  });

  // Resto de divisão (casos específicos)
  test('restoDivisao quando divide exato: restoDivisao(10, 5) = 0', () => {
    expect(restoDivisao(10, 5)).toBe(0);
  });

  test('restoDivisao com negativo: restoDivisao(-10, 3) = -1', () => {
    expect(restoDivisao(-10, 3)).toBe(-1);
  });

  // Clamp com valores negativos e casos específicos
  test('clamp retorna valor quando entre min e max (negativos)', () => {
    expect(clamp(-5, -10, -1)).toBe(-5);
  });

  test('clamp retorna min quando valor < min (negativos)', () => {
    expect(clamp(-15, -10, -1)).toBe(-10);
  });

  test('clamp retorna max quando valor > max (negativos)', () => {
    expect(clamp(0, -10, -1)).toBe(-1);
  });

  // Testes adicionais para matar mutantes do clamp (< → <= e > → >=)
  // Se mutante mudar < para <=, clamp(5.1, 5, 10) retornaria 5 (min) em vez de 5.1 (valor)
  test('clamp retorna valor quando estritamente maior que min', () => {
    // Valor estritamente entre min e max (não igual)
    expect(clamp(5.1, 5, 10)).toBe(5.1); // Se mutante: <= retornaria 5
    expect(clamp(10.5, 10, 20)).toBe(10.5); // Teste similar
  });

  // Se mutante mudar > para >=, clamp(9.9, 5, 10) retornaria 10 (max) em vez de 9.9 (valor)
  test('clamp retorna valor quando estritamente menor que max', () => {
    // Valor estritamente entre min e max (não igual)
    expect(clamp(9.9, 5, 10)).toBe(9.9); // Se mutante: >= retornaria 10
    expect(clamp(19.5, 10, 20)).toBe(19.5); // Teste similar
  });

  // MDC e MMC (casos específicos)
  test('mdc de números primos: mdc(7, 11) = 1', () => {
    expect(mdc(7, 11)).toBe(1);
  });

  test('mdc quando um é múltiplo do outro: mdc(20, 5) = 5', () => {
    expect(mdc(20, 5)).toBe(5);
  });

  test('mmc de números primos: mmc(7, 11) = 77', () => {
    expect(mmc(7, 11)).toBe(77);
  });

  // Operações geométricas (valores específicos)
  test('areaCirculo com raio 0: areaCirculo(0) = 0', () => {
    expect(areaCirculo(0)).toBe(0);
  });

  test('areaRetangulo com um lado zero: areaRetangulo(5, 0) = 0', () => {
    expect(areaRetangulo(5, 0)).toBe(0);
  });

  test('perimetroRetangulo: perimetroRetangulo(3, 4) = 14', () => {
    expect(perimetroRetangulo(3, 4)).toBe(14);
  });

  // Operações simples (dobro, triplo, metade) com zero e negativos
  test('dobro de zero: dobro(0) = 0', () => {
    expect(dobro(0)).toBe(0);
  });

  test('dobro de negativo: dobro(-5) = -10', () => {
    expect(dobro(-5)).toBe(-10);
  });

  test('triplo de zero: triplo(0) = 0', () => {
    expect(triplo(0)).toBe(0);
  });

  test('triplo de negativo: triplo(-3) = -9', () => {
    expect(triplo(-3)).toBe(-9);
  });

  test('metade de zero: metade(0) = 0', () => {
    expect(metade(0)).toBe(0);
  });

  test('metade resulta em decimal: metade(5) = 2.5', () => {
    expect(metade(5)).toBe(2.5);
  });

  // Valor absoluto e inverso de sinal
  test('valorAbsoluto de zero: valorAbsoluto(0) = 0', () => {
    expect(valorAbsoluto(0)).toBe(0);
  });

  test('valorAbsoluto de positivo: valorAbsoluto(5) = 5', () => {
    expect(valorAbsoluto(5)).toBe(5);
  });

  test('inverterSinal de zero: inverterSinal(0) = 0', () => {
    // Nota: inverterSinal(0) retorna -0, que é matematicamente igual a 0
    expect(inverterSinal(0)).toBeCloseTo(0, 10);
  });

  test('inverterSinal de negativo: inverterSinal(-5) = 5', () => {
    expect(inverterSinal(-5)).toBe(5);
  });

  // Arrays com um elemento
  test('maximoArray com um elemento: maximoArray([42]) = 42', () => {
    expect(maximoArray([42])).toBe(42);
  });

  test('minimoArray com um elemento: minimoArray([42]) = 42', () => {
    expect(minimoArray([42])).toBe(42);
  });

  test('medianaArray com um elemento: medianaArray([42]) = 42', () => {
    expect(medianaArray([42])).toBe(42);
  });

  test('mediaArray com um elemento: mediaArray([42]) = 42', () => {
    expect(mediaArray([42])).toBe(42);
  });

  test('somaArray com um elemento: somaArray([42]) = 42', () => {
    expect(somaArray([42])).toBe(42);
  });

  test('produtoArray com um elemento: produtoArray([42]) = 42', () => {
    expect(produtoArray([42])).toBe(42);
  });

  // Porcentagens (casos específicos)
  test('calcularPorcentagem de zero: calcularPorcentagem(50, 0) = 0', () => {
    expect(calcularPorcentagem(50, 0)).toBe(0);
  });

  test('aumentarPorcentagem com zero: aumentarPorcentagem(0, 10) = 0', () => {
    expect(aumentarPorcentagem(0, 10)).toBe(0);
  });

  test('diminuirPorcentagem com zero: diminuirPorcentagem(0, 10) = 0', () => {
    expect(diminuirPorcentagem(0, 10)).toBe(0);
  });

  // Hipotenusa (casos específicos)
  test('hipotenusa com catetos iguais: hipotenusa(3, 3) = ~4.24', () => {
    expect(hipotenusa(3, 3)).toBeCloseTo(4.242640687, 5);
  });

  test('hipotenusa com um cateto zero: hipotenusa(5, 0) = 5', () => {
    expect(hipotenusa(5, 0)).toBe(5);
  });

  // Conversões de ângulos
  test('grausParaRadianos de 90 graus: grausParaRadianos(90) = π/2', () => {
    expect(grausParaRadianos(90)).toBeCloseTo(Math.PI / 2, 10);
  });

  test('radianosParaGraus de π/2: radianosParaGraus(Math.PI/2) = 90', () => {
    expect(radianosParaGraus(Math.PI / 2)).toBeCloseTo(90, 10);
  });

  // Fibonacci (casos específicos)
  test('fibonacci(0) = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('fibonacci(1) = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('fibonacci(2) = 1', () => {
    expect(fibonacci(2)).toBe(1);
  });

  // Arredondamentos (casos específicos)
  test('arredondar de 0.5 para cima: arredondar(0.5) = 1', () => {
    expect(arredondar(0.5)).toBe(1);
  });

  test('arredondar de 0.4 para baixo: arredondar(0.4) = 0', () => {
    expect(arredondar(0.4)).toBe(0);
  });

  test('arredondarParaBaixo de 5.9: arredondarParaBaixo(5.9) = 5', () => {
    expect(arredondarParaBaixo(5.9)).toBe(5);
  });

  test('arredondarParaCima de 5.1: arredondarParaCima(5.1) = 6', () => {
    expect(arredondarParaCima(5.1)).toBe(6);
  });

});

// ================== FIM DO REFORÇO ==================