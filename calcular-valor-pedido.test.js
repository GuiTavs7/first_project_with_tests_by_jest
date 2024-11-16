// 1) TESTANDO PRIMEIRO FLUXO DA FUNÇÃO

const calcularValorPedido = require("./calcular-valor-pedido");

it("não deve cobrar valor de frete quando valor dos produtos for superior a 500", () => {

    // AAA -3 Passos de criação de um teste

    // ARRANGE -> Arrumar o que precisamos passar para função, neste caso é o objeto de pedidos

    const meuPedido = {
        itens: [
            {nome: "Arco encantado", valor: 2000},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    };
    
    //ACT -> Passar para a função o que realmente queremos testar - o que vai ser testado

    const resultado = calcularValorPedido(meuPedido);

    // ASSERT -> Testar o resultado esperado

    expect(resultado).toBe(2000);
});

// 2) TESTANDO SEGUNDO FLUXO DA FUNÇÃO

it("deve cobrar valor de frete se o valor dos produtos for menor que 500", () =>{

    // ARRANGE

    const meuPedido = {
        itens: [
            {nome: "Sanduíche", valor: 50},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    };

    // ACT

    const resultado = calcularValorPedido(meuPedido);

    // ASSERT

    expect(resultado).toBe(150);
});

// 3) TESTANDO FLUXO EXTRA DA FUNÇÃO

it("deve cobrar valor de frete caso valor dos produtos seja EXATAMENTE 500", () => {

    // ARRANGE

    const meuPedido = {
        itens: [
            {nome: "Sanduíche", valor: 500},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    };

    // ACT

    const resultado = calcularValorPedido(meuPedido);

    // ASSERT

    expect(resultado).toBe(600);
});

// 4) VERDE, VERMELHO, REFATORAR

// 4.1) CASO O ESTADO DE ENTREGA SEJA RS DEVE SER ACRESCIDO UM VALOR DE 20% NA ENTREGA 

it("deve adicionar um acréscimo de 20% no valor da entrega do pedido caso o estado seja RS", () => {

    const pedidoComEstadoRS = {
        estado: "RS",
        itens: [
            {nome: "Sanduíche bem caro", valor: 500},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRS);

    expect(resultado).toBe(620);
});

// 4.2) CASO O ESTADO DE ENTREGA SEJA SC DEVE SER ACRESCIDO UM VALOR DE 20% NA ENTREGA 

it("deve adicionar um acréscimo de 20% no valor da entrega do pedido caso o estado seja SC", () => {

    const pedidoComEstadoSC = {
        estado: "SC",
        itens: [
            {nome: "Sanduíche bem caro", valor: 500},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSC);

    expect(resultado).toBe(620);
});

// 4.3) CASO O ESTADO DE ENTREGA SEJA SP  NÃO DEVE SER ACRESCIDO UM VALOR NA ENTREGA 

it("não deve adicionar um acréscimo de 20% no valor da entrega do pedido caso o estado seja SP", () => {

    const pedidoComEstadoSP = {
        estado: "SP",
        itens: [
            {nome: "Sanduíche bem caro", valor: 500},
            {nome: "Entrega", valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSP);

    expect(resultado).toBe(600);
});

// TOTAL = 6 TESTES