let selectedPlanet = null;
let currentPlanetData = null;

// Dados dos planetas
const planetData = {
    //Sol
    Sol: {
    image: "./assets/panels/sun_interior.jpg",
    specs: [
      "Tipo: Estrela",
      "Diametro: 1 391 000 km",
      "Temperatura superficial: ~5 500 C"
    ],
    quiz: [
      {
        question: "O Sol e uma:",
        options: ["Estrela", "Planeta", "Galaxia"],
        correct: 0
      },
      {
        question: "O Sol e composto maioritariamente por:",
        options: ["Oxigenio", "Hidrogenio", "Carbono"],
        correct: 1
      },
      {
        question: "O Sol pertence a que sistema?",
        options: ["Sistema Solar", "Via Lactea", "Andromeda"],
        correct: 0
      }
    ]
  },
    //Mercúrio
    Mercurio: {
    image: "./assets/panels/mercury_interior.jpg",
    specs: [
      "Planeta rochoso",
      "Mais proximo do Sol",
      "Sem atmosfera significativa"
    ],
    quiz: [
      {
        question: "Mercurio e:",
        options: ["Gasoso", "Rochoso", "Anão"],
        correct: 1
      },
      {
        question: "Mercurio e o planeta:",
        options: ["Mais frio", "Mais distante", "Mais proximo do Sol"],
        correct: 2
      },
      {
        question: "Mercurio tem luas?",
        options: ["Sim, 1", "Sim, 2", "Nao"],
        correct: 2
      }
    ]
  },
    //Vénus
    Venus: {
    image: "./assets/panels/venus_interior.jpg",
    specs: [
      "Atmosfera muito densa",
      "Efeito de estufa extremo",
      "Temperatura media: ~460 C"
    ],
    quiz: [
      {
        question: "Venus e conhecido como:",
        options: ["Planeta vermelho", "Planeta mais quente", "Planeta azul"],
        correct: 1
      },
      {
        question: "A atmosfera de Vénus e rica em:",
        options: ["Oxigenio", "Dioxido de carbono", "Helio"],
        correct: 1
      },
      {
        question: "Venus e semelhante a Terra em:",
        options: ["Tamanho", "Temperatura", "Numero de luas"],
        correct: 0
      }
    ]
  },
    //Terra
    Terra: {
    image: "./assets/panels/earth_interior.jpg",
    specs: [
      "Unico planeta com vida conhecida",
      "71% da superficie coberta por agua",
      "Uma lua natural"
    ],
    quiz: [
      {
        question: "A Terra e:",
        options: ["Gasosa", "Rochosa", "Ana"],
        correct: 1
      },
      {
        question: "Percentagem de agua na Terra:",
        options: ["30%", "50%", "71%"],
        correct: 2
      },
      {
        question: "Quantas luas tem a Terra?",
        options: ["1", "2", "Nenhuma"],
        correct: 0
      }
    ]
  },
    //Lua
    Lua: {
    image: "./assets/panels/moon_interior.jpg",
    specs: [
      "Satélite natural da Terra",
      "Sem atmosfera significativa",
      "Influencia nas mares"
    ],
    quiz: [
      {
        question: "A Lua e:",
        options: ["Planeta", "Estrela", "Satelite natural"],
        correct: 2
      },
      {
        question: "A Lua influencia:",
        options: ["As mares", "O clima", "As estaçoes"],
        correct: 0
      },
      {
        question: "A Lua tem atmosfera?",
        options: ["Sim", "Muito densa", "Nao"],
        correct: 2
      }
    ]
  },
    //Marte
    Marte: {
        image: "./assets/panels/mars_interior.jpg",
        specs: [
            "Diametro: 6 779 km",
            "Distancia ao Sol: 227 milhoes km",
            "Numero de luas: 2"
        ],
        quiz: [
            {
                question: "Marte e conhecido como:",
                options: ["Planeta\n azul", "Planeta\n vermelho", "Planeta\n gasoso"],
                correct: 1
            },
            {
                question: "Quantas luas tem Marte?",
                options: ["0", "1", "2"],
                correct: 2
            },
            {
                question: "Marte e um planeta:",
                options: ["Gasoso", "Anao", "Rochoso"],
                correct: 2
            }
        ]
    },
    //Júpiter
    Jupiter: {
    image: "./assets/panels/jupiter_interior.jpg",
    specs: [
      "Maior planeta do Sistema Solar",
      "Planeta gasoso",
      "Grande Mancha Vermelha"
    ],
    quiz: [
      {
        question: "Jupiter e um planeta:",
        options: ["Rochoso", "Gasoso", "Anao"],
        correct: 1
      },
      {
        question: "Júpiter e o planeta:",
        options: ["Mais\n pequeno", "Mais\n distante", "Maior"],
        correct: 2
      },
      {
        question: "A Grande Mancha Vermelha e:",
        options: ["Um\n vulcao", "Uma\n tempestade", "Uma\n cratera"],
        correct: 1
      }
    ]
  },
    //Saturno
    Saturno: {
    image: "./assets/panels/saturn_interior.jpg",
    specs: [
      "Sistema de aneis visivel",
      "Planeta gasoso",
      "Baixa densidade"
    ],
    quiz: [
      {
        question: "Saturno e famoso pelos:",
        options: ["Oceanos", "Aneis", "Vulcoes"],
        correct: 1
      },
      {
        question: "Saturno e um planeta:",
        options: ["Rochoso", "Gasoso", "Anao"],
        correct: 1
      },
      {
        question: "Os aneis de Saturno sao feitos de:",
        options: ["Gas", "Rocha e\n gelo", "Lava"],
        correct: 1
      }
    ]
  },
    //Úrano
    Urano: {
    image: "./assets/panels/uranus_interior.jpg",
    specs: [
      "Eixo de rotacao inclinado",
      "Planeta gasoso",
      "Cor azul-esverdeada"
    ],
    quiz: [
      {
        question: "Urano roda:",
        options: ["Normalmente", "De lado", "Ao contrario"],
        correct: 1
      },
      {
        question: "A cor de Urano deve-se a:",
        options: ["Metano", "Oxigenio", "Helio"],
        correct: 0
      },
      {
        question: "Urano e um planeta:",
        options: ["Rochoso", "Gasoso", "Anao"],
        correct: 1
      }
    ]
  },
    //Neptuno
    Neptuno: {
    image: "./assets/panels/neptune_interior.jpg",
    specs: [
      "Planeta mais distante do Sol",
      "Vent os mais rapidos do Sistema Solar",
      "Cor azul intensa"
    ],
    quiz: [
      {
        question: "Neptuno e o planeta:",
        options: ["Mais\n quente", "Mais\n distante", "Mais\n pequeno"],
        correct: 1
      },
      {
        question: "Neptuno e um planeta:",
        options: ["Rochoso", "Gasoso", "Anao"],
        correct: 1
      },
      {
        question: "Neptuno r conhecido por:",
        options: ["Aneis", "Ventos\n fortes", "Oceanos"],
        correct: 1
      }
    ]
  },
    //Plutão
    Plutao: {
    image: "./assets/panels/pluto_interior.jpg",
    specs: [
      "Planeta anao",
      "Orbita excentrica",
      "Localizado no Cinturao de Kuiper"
    ],
    quiz: [
      {
        question: "Plutao e classificado como:",
        options: ["Planeta", "Planeta\n anao", "Asteroide"],
        correct: 1
      },
      {
        question: "Plutao esta localizado:",
        options: ["Cinturao de\n asteroides", "Cinturao de\n Kuiper", "Nuvem de\n Oort"],
        correct: 1
      },
      {
        question: "Plutao e:",
        options: ["Maior que\n a Terra", "Mais pequeno\n que a Lua", "Uma\n estrela"],
        correct: 1
      }
    ]
  },
};

// Aguarda o carregamento do cenário scenario
document.querySelector("a-scene").addEventListener("loaded", () => {
    // Adiciona eventos de clique aos planetas
    const planets = document.querySelectorAll(".planet");

    // Permite fechar o painel sobre o planeta
    const closeBtn = document.querySelector(".closeButton");
    const closeQuizBtn = document.querySelector(".closeQuizBtn");

    planets.forEach(planet => {
        // Efeito hover no painel
        planet.addEventListener("click", () => {
            if (isPaused) {
                showPlanetInfo(planet);
            }
        });

        planet.addEventListener("mouseenter", () => {
            if (isPaused) {
                planet.setAttribute("material", "opacity", 0.8);
            }
        });

        planet.addEventListener("mouseleave", () => {
            planet.setAttribute("material", "opacity", 1);
        });
    });

    closeBtn.addEventListener("click", hidePlanetInfo);
    closeQuizBtn.addEventListener("click", hideQuestionPanel);

    document.querySelectorAll(".quizBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.getAttribute("data-q");
            openQuestion(index, btn);
        });
    });
});

// Se detetar o rato ou clique, irá mostrar o painel
function showPlanetInfo(planet) {
    selectedPlanet = planet;

    // Pega os dados do planeta através do data-name
    const name = planet.getAttribute("data-name");
    currentPlanetData = planetData[name];

    if (!currentPlanetData) return;

    const panel = document.getElementById("infoPanel");

    // Reseta as cores dos botões do quiz
    document.querySelectorAll(".quizBtn").forEach(btn => {
        btn.setAttribute("color", "#444");
    });

    // Atualiza os dados dos planetas
    document.getElementById("planetName").setAttribute("value", name);
    document.getElementById("planetImage").setAttribute("material", "src", currentPlanetData.image);
    document.getElementById("planetSpecs").setAttribute("value", currentPlanetData.specs.join("\n"));
    document.getElementById("questionPanel").setAttribute("visible", false);

    positionPanelNearPlanet(panel, planet);
    panel.setAttribute("visible", true);
}

// Esconde o painel de informações
function hidePlanetInfo() {
    document.getElementById("infoPanel").setAttribute("visible", false);

    selectedPlanet = null;
    currentPlanetData = null;
}

//Esconde o painel de perguntas
function hideQuestionPanel() {
    document.getElementById("questionPanel").setAttribute("visible", false);
}

// Posicionamento do painel ao lado e por cima do planeta
function positionPanelNearPlanet(panel, planet) {
    const worldPos = planet.object3D.getWorldPosition(new THREE.Vector3());
    panel.object3D.position.copy(worldPos);
    panel.object3D.position.x += 3;
    panel.object3D.position.y += 10;

    // O painel está orientado para a câmara (painel fixo)
    const camera = document.querySelector("[camera]");
    panel.object3D.lookAt(camera.object3D.position);
}

// Parte do questionário do planeta (quiz)
function openQuestion(index, quizButton) {
    if (!currentPlanetData) return;

    const qPanel = document.getElementById("questionPanel");
    const qData = currentPlanetData.quiz[index];

    const qText = document.getElementById("questionText");
    qText.setAttribute("value", qData.question);

    const answers = document.getElementById("answerButtons");
    answers.innerHTML = "";

    qData.options.forEach((optionText, i) => {
        const option = document.createElement("a-plane");

        option.setAttribute("width", "1.5");
        option.setAttribute("height", "1");
        option.setAttribute("color", "#555");
        option.setAttribute("position", `${(i - 1) * 1.7} -0.5 0`);

        option.innerHTML = `
      <a-text value="${optionText}" align="center"></a-text>
    `;

        option.addEventListener("click", () => {
            if (i === qData.correct) {
                option.setAttribute("color", "#2ECC71");
                quizButton.setAttribute("color", "#2ECC71");
            } else {
                option.setAttribute("color", "#C0392B");
            }
        });

        answers.appendChild(option);
    });

    qPanel.setAttribute("visible", true);
}