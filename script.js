// ==========================================================================
// CATÁLOGO GARIMPO CERTO - MERCADO LIVRE & SHOPEE
// Para adicionar um produto da Shopee, basta copiar um bloco { ... }
// e colocar: loja: "shopee"
// ==========================================================================

const produtos = [
    {
        id: 1,
        loja: "mercadolivre",
        titulo: "Fone de Ouvido Bluetooth Pro 4 com Case Carregador",
        categoria: "tech",
        categoriaNome: "Tecnologia & Setup",
        descricao: "Um dos mais vendidos do Brasil. Bateria de longa duração, toque inteligente e microfone embutido.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_791435-MLA118754152028_102026-F.webp",
        linkAfiliado: "https://meli.la/2J65AJ6"
    },
    {
        id: 2,
        loja: "mercadolivre",
        titulo: "Creatina Monohidratada Growth Supplements 250g",
        categoria: "esporte",
        categoriaNome: "Esporte & Saúde",
        descricao: "Top 1 em suplementação. Alta pureza para ganho de força, explosão muscular e desempenho nos treinos.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_662415-MLA97812910758_112025-F.webp",
        linkAfiliado: "https://meli.la/33TLmZm"
    },
    {
        id: 3,
        loja: "mercadolivre",
        titulo: "Kit Ferramentas 46 Peças Jogo Chaves Catraca e Soquetes",
        categoria: "casa",
        categoriaNome: "Casa & Ferramentas",
        descricao: "Maleta completa indispensável para reparos domésticos, carro, moto e montagem de móveis.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_636676-MLA116721406480_092026-F.webp",
        linkAfiliado: "https://meli.la/2168v5D"
    },
    {
        id: 4,
        loja: "mercadolivre",
        titulo: "Kit 4 Camisetas Dry-fit Sandrini Masculina Academia",
        categoria: "esporte",
        categoriaNome: "Esporte & Saúde",
        descricao: "Tecido leve que não retém suor. Custo-benefício imbatível para treinar, correr ou usar no dia a dia.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_626928-MLB82004918446_022025-F-kit-4-camiseta-dry-fit-sandrini-masculina-academia-caminhada.webp",
        linkAfiliado: "https://meli.la/2TMH32Z"
    },
    {
        id: 5,
        loja: "mercadolivre",
        titulo: "Parafusadeira e Furadeira de Impacto Sem Fio 21V com Maleta",
        categoria: "casa",
        categoriaNome: "Casa & Ferramentas",
        descricao: "Campeã absoluta de vendas em ferramentas. Acompanha 2 baterias e kit de brocas para qualquer serviço.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_981459-MLA117136184907_092026-F.webp",
        linkAfiliado: "https://meli.la/16M6QuA"
    },
    {
        id: 6,
        loja: "mercadolivre",
        titulo: "Mini Projetor Portátil Smart Full HD Cinema em Casa",
        categoria: "tech",
        categoriaNome: "Tecnologia & Setup",
        descricao: "Fenômeno viral nas redes sociais. Transforma qualquer parede em uma tela de cinema com espelhamento de celular.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_645947-MLB88739179054_082025-F-projetor-smart-portatil-full-hd-4k-bluetooth-android-wifi.webp",
        linkAfiliado: "https://meli.la/1Kq3veH"
    },
    {
        id: 7,
        loja: "mercadolivre",
        titulo: "Aspirador de Pó Vertical Portátil 2 em 1 Alta Potência",
        categoria: "casa",
        categoriaNome: "Casa & Ferramentas",
        descricao: "Leve, prático e sem saco coletor. Limpa pisos, tapetes e estofados em poucos minutos.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_642858-MLA99507570454_112025-F.webp",
        linkAfiliado: "https://meli.la/2i1xuP4"
    },
    {
        id: 8,
        loja: "mercadolivre",
        titulo: "Microfone de Lapela Sem Fio Duplo para Celular (USB-C / iPhone)",
        categoria: "tech",
        categoriaNome: "Tecnologia & Setup",
        descricao: "Áudio profissional com redução de ruído para gravar vídeos no TikTok, Reels, YouTube e reuniões.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_908756-MLA117835115873_092026-F.webp",
        linkAfiliado: "https://meli.la/33Yoxrx"
    },
    {
        id: 9,
        loja: "mercadolivre",
        titulo: "Creme Multirreparador La Roche-Posay Cicaplast Baume B5+",
        categoria: "beleza",
        categoriaNome: "Beleza & Cuidado",
        descricao: "Um dos itens de skincare mais procurados do país. Hidratação intensiva e reparação rápida da pele.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_906529-MLA115584916886_092026-F.webp",
        linkAfiliado: "https://meli.la/2UdGdrU"
    },
    {
        id: 10,
        loja: "mercadolivre",
        titulo: "Kit 10 Potes de Vidro Herméticos com Trava para Marmita",
        categoria: "casa",
        categoriaNome: "Casa & Ferramentas",
        descricao: "Não pega cheiro, vai ao micro-ondas e freezer, e mantém a comida fresca por muito mais tempo.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_629790-MLB119274681447_102026-F-kit-10-potes-hermeticos-vidro-borossilicato-640ml-retangular.webp",
        linkAfiliado: "https://meli.la/2Uobkvd"
    },
    {
        id: 11,
        loja: "mercadolivre",
        titulo: "Máquina de Cortar Cabelo e Barba Acabamento Profissional",
        categoria: "beleza",
        categoriaNome: "Beleza & Cuidado",
        descricao: "Lâminas de precisão, bateria recarregável via USB e pentes ajustáveis para manter o visual em dia.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_707207-MLB109852423818_042026-F-maquininha-de-acabamento-da-kemei-profissional-km2299.webp",
        linkAfiliado: "https://meli.la/1TgMzJx"
    },
    {
        id: 12,
        loja: "mercadolivre",
        titulo: "Whey Protein Concentrado 1kg (Growth / Max Titanium)",
        categoria: "esporte",
        categoriaNome: "Esporte & Saúde",
        descricao: "Alta concentração de proteínas por dose para recuperação muscular e ganho de massa magra.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_809217-MLA113731936580_072026-F.webp",
        linkAfiliado: "https://meli.la/2hzASUq"
    }

    /* QUANDO QUISER ADICIONAR UM PRODUTO DA SHOPEE, REMOVA O /* E * / E PREENCHA:
    ,{
        id: 13,
        loja: "shopee",
        titulo: "Nome do Produto da Shopee",
        categoria: "casa",
        categoriaNome: "Casa & Ferramentas",
        descricao: "Descrição curta e persuasiva do produto.",
        imagem: "COLE_AQUI_O_LINK_DA_IMAGEM_DA_SHOPEE",
        linkAfiliado: "https://s.shopee.com.br/SEU_LINK_AQUI"
    }
    */
];

const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const storeBtns = document.querySelectorAll('.store-btn');
const productCount = document.getElementById('productCount');

let categoriaAtual = 'todos';
let lojaAtual = 'todas';

function renderizarProdutos(lista) {
    productsGrid.innerHTML = '';
    productCount.textContent = `${lista.length} ${lista.length === 1 ? 'achado encontrado' : 'achados encontrados'}`;

    if (lista.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 30px;">Nenhum produto encontrado com esses filtros.</p>';
        return;
    }

    lista.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const nomeLoja = produto.loja === 'shopee' ? 'Shopee' : 'Mercado Livre';
        const textoBotao = produto.loja === 'shopee' ? 'Ver na Shopee' : 'Ver no Mercado Livre';

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.titulo}" class="product-img" loading="lazy">
            <div class="product-info">
                <div class="badges-row">
                    <span class="product-badge">${produto.categoriaNome}</span>
                    <span class="store-tag ${produto.loja}">${nomeLoja}</span>
                </div>
                <h3 class="product-title">${produto.titulo}</h3>
                <p class="product-desc">${produto.descricao}</p>
                <a href="${produto.linkAfiliado}" target="_blank" rel="nofollow sponsored noopener" class="btn-buy ${produto.loja}">
                    ${textoBotao}
                </a>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

function filtrarProdutos() {
    const termoBusca = searchInput.value.toLowerCase();

    const filtrados = produtos.filter(produto => {
        const bateLoja = lojaAtual === 'todas' || produto.loja === lojaAtual;
        const bateCategoria = categoriaAtual === 'todos' || produto.categoria === categoriaAtual;
        const bateTexto = produto.titulo.toLowerCase().includes(termoBusca) || 
                          produto.descricao.toLowerCase().includes(termoBusca);
        return bateLoja && bateCategoria && bateTexto;
    });

    renderizarProdutos(filtrados);
}

storeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        storeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        lojaAtual = btn.getAttribute('data-store');
        filtrarProdutos();
    });
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        categoriaAtual = btn.getAttribute('data-category');
        filtrarProdutos();
    });
});

searchInput.addEventListener('input', filtrarProdutos);

renderizarProdutos(produtos);
