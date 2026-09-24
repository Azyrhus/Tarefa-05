const { obterFraseAleatoria } = require("../script");

describe("Gerador de frases", () => {

    test("deve retornar um item da lista", () => {

        const frases = [
            { texto: "Frase 1", tipo: "Começar" },
            { texto: "Frase 2", tipo: "Criar" },
            { texto: "Frase 3", tipo: "Continuar" }
        ];

        const resultado = obterFraseAleatoria(frases);

        expect(frases).toContain(resultado);
    });

    test("deve retornar nulo quando não existem frases", () => {

        const resultado = obterFraseAleatoria([]);

        expect(resultado).toBeNull();
    });

    test("deve manter as intenções do novo repertório", () => {
        const { frases: repertorio } = require("../script");
        const tipos = [...new Set(repertorio.map((frase) => frase.tipo))];

        expect(tipos).toEqual(expect.arrayContaining(["Começar", "Continuar", "Criar"]));
    });

});