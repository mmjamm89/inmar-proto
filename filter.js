const productos = [
    {
        id: 1,
        titulo: "Protex 242",
        categoria: "ANCLAJES",        
        img: "./assets/productos/242-grilla.png",
        descripcion: "Mortero epoxi vertible para anclajes."
    },
    {
        id: 2,
        titulo: "Techos 4000 TPU",
        categoria: "IMPERMEABILIZANTES",        
        img: "./assets/productos/4000-pu-techos.png",
        descripcion: "Membrana líquida impermeabilizante elastomérica."
    },
    {
        id: 3,
        titulo: "Techos 5000 TPU",
        categoria: "IMPERMEABILIZANTES",        
        img: "./assets/productos/5000.png",
        descripcion: "Membrana líquida impermeabilizante poliuretánica de alta prestación."
    },
    {
        id: 4,
        titulo: "Techos Acrilico fibrado",
        categoria: "IMPERMEABILIZANTES",        
        img: "./assets/productos/acrilico-fibrado.png",
        descripcion: "Membrana líquida fibrada para techos."
    },
    {
        id: 5,
        titulo: "Five Star DP",
        categoria: "ANCLAJES",        
        img: "./assets/productos/balde.png",
        descripcion: "Grouting epoxi para maquinaria que requiera una alineación precisa."
    },
    {
        id: 6,
        titulo: "Grout A",
        categoria: "ANCLAJES",        
        img: "./assets/productos/Grout-A-1.png",
        descripcion: "Grouting vertible para anclajes, rellenos y fijaciones."
    },
    {
        id: 7,
        titulo: "Fort G",
        categoria: "MORTEROS DE REPARACION",        
        img: "./assets/productos/Fort-G.png",
        descripcion: "Mortero cementicio reforzado de alta resistencia."
    },
    {
        id: 8,
        titulo: "Curing BT",
        categoria: "CURADORES DE SUPERFICIE",
        img: "./assets/productos/curing-bt.png",
        descripcion: "Membrana de curado base solvente para hormigones."
    },
    {
        id: 9,
        titulo: "Curing LU",
        categoria: "CURADORES DE SUPERFICIE",
        img: "./assets/productos/curing-lu.png",
        descripcion: "Membrana de curado base acuosa para hormigones."
    },    
    {
        id: 10,
        titulo: "Curing S",
        categoria: "CURADORES DE SUPERFICIE",
        img: "./assets/productos/curing-s.png",
        descripcion: "Compuesto líquido para el curado de hormigón."
    },
    {
        id: 11,
        titulo: "Madefer",
        categoria: "DESMOLDANTES",
        img: "./assets/productos/MADEFER.png",
        descripcion: "Desencofrante y protector para moldes metálicos, no metálicos y espciales."
    },
    {
        id: 12,
        titulo: "Metalfer",
        categoria: "DESMOLDANTES",
        img: "./assets/productos/metalfer.png",
        descripcion: "Desencofrante y protector para moldes metálicos."
    },
    {
        id: 13,
        titulo: "Protex Emulsión 100",
        categoria: "DESMOLDANTES",
        img: "./assets/productos/Pronomet-Natural.png",
        descripcion: "Desmoldante emulsionado en base agua listo para usar."
    },
    {
        id: 14,
        titulo: "Protex 216",
        categoria: "ADHESIVOS EPOXI",
        img: "./assets/productos/Protex-216-1.png",
        descripcion: "Adhesivo epoxi para la unión de hormigones frescos con endurecidos."
    },
    {
        id: 15,
        titulo: "Protex 215",
        categoria: "ADHESIVOS EPOXI",
        img: "./assets/productos/Protex-215-grilla.png",
        descripcion: "Sistema epoxi de 2 componentes predosificados. Una vez mezclado se obtiene un producto de color gris con características adhesivas."
    }, 
    {
        id: 16,
        titulo: "Protex PU 40C",
        categoria: "JUNTAS, GRIETAS Y FISURAS",
        img: "./assets/productos/PROTEX-PU-40C.png",
        descripcion: "Sellador poliuretánico elástico para juntas."
    },
    {
        id: 17,
        titulo: "Proflex P-1000",
        categoria: "JUNTAS, GRIETAS Y FISURAS",
        img: "./assets/productos/Proflex-P1000.png",
        descripcion: "Sellador elástico poliuretánico con color de altas resitencias químicas."
    },
    {
        id: 18,
        titulo: "Esmalte sanitizante",
        categoria: "PINTURAS ALQUÍDICAS",
        img: "./assets/productos/Esmalte-S.png",
        descripcion: "Revestimiento elastomérico antibacteria."
    },
    {
        id: 19,
        titulo: "Polikrete 450",
        categoria: "PINTURAS POLIURETÁNICAS",
        img: "./assets/productos/polikrete-450-grilla.png",
        descripcion: "Sistema poliuretánico autoimprimante de altos sólidos."
    },
    {
        id: 20,
        titulo: "Polikrete 450 DTM",
        categoria: "PINTURAS POLIURETÁNICAS",
        img: "./assets/productos/polikrete-450-dtm-grilla.png",
        descripcion: "Sistema poliuretánico acrílico anticorrosivo de altos sólidos para aplicación directa sobre superficies métalicas."
    },


];


//FILTER

const catalogo = document.querySelector('.catalogo');
const botones = document.querySelector('.btn_container');

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(productos);
    displayMenuBtns();
})

const displayMenuItems = menuItems => {
    let displayMenu = menuItems.map((item) => {
        return `
        <article class="tarj_producto">
            <img src="${item.img}" alt="${item.titulo}">
            <div>
                <p>${item.categoria}</p>
                <h1>${item.titulo}</h1>
                <p class="descripcion">${item.descripcion}</p>                
                <div class="info_producto">
                    <a href="#">Ver ficha técnica</a>
                </div>
            </div>
        </article>
        `
    })
    displayMenu = displayMenu.join("");
    catalogo.innerHTML = displayMenu;
}

const displayMenuBtns = () => {
    const categories = productos.reduce((values, item) => {
        if (!values.includes(item.categoria)) {
            values.push(item.categoria)
        };
        return values;
    }, ["MOSTRAR TODO"]);

    const categoryBtn = categories.map((category) => {
        return `<button class="filter_btn" type="button" data-id="${category}">${category}</button>`
    }).join("");
    botones.innerHTML = categoryBtn;

    const filterBtns = document.querySelectorAll('.filter_btn')
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = productos.filter((menuItem) => {
                if (menuItem.categoria === category) {
                    return menuItem;
                }
            })
            if (category === "MOSTRAR TODO") {
                displayMenuItems(productos)
            } else {
                displayMenuItems(menuCategory)
            }
        })
    })
}