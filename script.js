const frases = [
    { texto: "Você não precisa enxergar o caminho inteiro para dar o próximo passo.", tipo: "Começar" },
    { texto: "O ritmo sustentável vence a pressa que abandona tudo no meio.", tipo: "Continuar" },
    { texto: "Uma pergunta diferente pode ser o primeiro rascunho de algo grande.", tipo: "Criar" },
    { texto: "Começar pequeno ainda é começar com intenção.", tipo: "Começar" },
    { texto: "Quando travar, volte ao que já funciona e avance um detalhe.", tipo: "Continuar" }
];

function obterFraseAleatoria(lista) {
    if (lista.length === 0) return null;
    return lista[Math.floor(Math.random() * lista.length)];
}

if (typeof document !== "undefined") {
    let filtroAtual = "Todas";
    let fraseAtual = null;
    let favoritos = [];
    const fraseElemento = document.getElementById("frase");
    const renderFavoritos = () => {
        const lista = document.getElementById("favoritos");
        document.getElementById("total-favoritos").textContent = `${favoritos.length} guardadas`;
        lista.innerHTML = favoritos.length ? favoritos.map((frase) => `<article class="saved-item"><p>${frase.texto}</p><small>${frase.tipo}</small></article>`).join("") : '<p class="empty-state">Suas ideias favoritas aparecem aqui.</p>';
    };
    const sortear = () => {
        const busca = document.getElementById("busca").value.toLowerCase();
        const disponiveis = frases.filter((frase) => (filtroAtual === "Todas" || frase.tipo === filtroAtual) && frase.texto.toLowerCase().includes(busca));
        fraseAtual = obterFraseAleatoria(disponiveis);
        fraseElemento.textContent = fraseAtual ? fraseAtual.texto : "Nenhuma ideia combina com essa busca.";
        document.getElementById("tipo").textContent = fraseAtual ? fraseAtual.tipo : "Sem resultado";
        document.getElementById("numero").textContent = fraseAtual ? String(frases.indexOf(fraseAtual) + 1).padStart(2, "0") : "--";
        document.getElementById("contador").textContent = Number(document.getElementById("contador").textContent) + 1;
    };
    document.getElementById("botao").addEventListener("click", sortear);
    document.getElementById("busca").addEventListener("input", sortear);
    document.querySelectorAll(".filter").forEach((botao) => botao.addEventListener("click", () => {
        filtroAtual = botao.dataset.filtro;
        document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === botao));
        sortear();
    }));
    document.getElementById("favoritar").addEventListener("click", () => {
        if (fraseAtual && !favoritos.includes(fraseAtual)) favoritos.push(fraseAtual);
        renderFavoritos();
    });
    document.getElementById("copiar").addEventListener("click", async () => {
        if (fraseAtual) await navigator.clipboard.writeText(fraseAtual.texto);
    });
    document.getElementById("tema").addEventListener("click", () => document.body.classList.toggle("night"));
    renderFavoritos();
}

if (typeof module !== "undefined") module.exports = { frases, obterFraseAleatoria };
