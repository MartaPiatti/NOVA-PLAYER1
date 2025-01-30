//Critical values widgets
const criticalEnergy = 85;
const criticalApproval = 60;
const criticalPpm = 460;
const criticalDegrees = 2;

//General variables
let shownInvestmentData;
let investmentCount = 0;
const green = "#748734";
const red = "#CD3D38";
const darkRed = "#BC0500";

//HTML UI elements
const feedbackStamp = document.querySelector(".feedback-stamp");
const startButton = document.querySelector(".start-button");
const startPage = document.querySelector(".start-page");
const gameOver = document.querySelector(".score-screen");
const gameOverText = document.querySelector(".game-over");
const removedWidgets = document.querySelectorAll(".score");
const resultWidgets = document.querySelectorAll(".result");

//Current investments
let renewablesCurrentInvestment = Math.floor(Math.random() * investmentData.renewables.length);
let fossilCurrentInvestment = Math.floor(Math.random() * investmentData.fossil.length);
let nuclearCurrentInvestment = Math.floor(Math.random() * investmentData.nuclear.length);
let approvalCurrentInvestment = Math.floor(Math.random() * investmentData.approval.length);
let gridCurrentInvestment = Math.floor(Math.random() * investmentData.grid.length);

//Undone investments
let renewableUndoneInvestmens = {
  undone: [],
  maxLenght: investmentData.renewables.length,
};
let fossilUndoneInvestmens = {
  undone: [],
  maxLenght: investmentData.fossil.length,
};
let nuclearUndoneInvestmens = {
  undone: [],
  maxLenght: investmentData.nuclear.length,
};

let approvalUndoneInvestmens = {
  undone: [],
  maxLenght: investmentData.approval.length,
};

let gridUndoneInvestmens = {
  undone: [],
  maxLenght: investmentData.grid.length,
};

//Tutorial
const tutorialScreens = document.querySelectorAll(".tutorial");
const lastTutorialButton = document.querySelector(".last-tutorial-button");

//External cards
const cards = document.querySelectorAll(".card");
const renewablesCard = cards[0];
const fossilCard = cards[1];
const nuclearCard = cards[2];
const approvalCard = cards[3];
const gridCard = cards[4];

let cardShown = false;

//Parameters external cards
const renewableParameters = renewablesCard.querySelectorAll(".parameter");
const fossilParameters = fossilCard.querySelectorAll(".parameter");
const nuclearParameters = nuclearCard.querySelectorAll(".parameter");
const approvalParamters = approvalCard.querySelectorAll(".parameter");
const gridParameters = gridCard.querySelectorAll(".parameter");

//Card inside
const fullscreenDiv = document.querySelector(".fullscreen-div");
const innerCard = document.querySelector(".inner-card");
const innerParameters = document.querySelectorAll(".inner-parameter");
const investmentBodies = document.querySelectorAll(".investment-body");
const answerButtons = document.querySelectorAll(".answer");

//------------------INVESTMENTS------------------

//Renewables
const renewableMap = document.querySelector(".green-map");
const renewableButtons = document.querySelectorAll(".renewable-button");

//Fossil
const fossilResource = document.querySelector(".fossil-resource");
const fossilFlags = document.querySelectorAll(".fossil-flag");
const fossilFlagText = document.querySelectorAll(".fossil-flag-text");
const fossilButtons = document.querySelectorAll(".fossil-button");

//Nuclear
const nuclearCode = document.querySelector(".nuclear-code");
const nuclearSteps = document.querySelectorAll(".nuclear-step");
const nuclearButtons = document.querySelectorAll(".nuclear-button");
const nuclearOptions = investmentData.nuclear[nuclearCurrentInvestment].opzioni;
let nuclearOrderGuess = [];

//Approval
const archetypeGraph = document.querySelector(".archetype-graph");
const approvalMediaLabel = document.querySelectorAll(".approval-media");
const approvaConfirmButton = document.querySelector(".approval-button");
const approvalSwitches = document.querySelectorAll(".approval-switch input");

//Strategic assets
const gridButtons = document.querySelectorAll(".grid-button");
const gridScientist = document.querySelectorAll(".grid-scientist");
const gridScientistText = document.querySelectorAll(".grid-scientist-text");

//Fill cards
riempiCarteEsterne();

//News
const newsTitle = document.getElementById("news-title");
const newsText = document.getElementById("news-text");
let lastRand = -1;

//Budget
const budgetText = document.getElementById("budget-text");
let budget = 100;

//Year
const progressBar = document.getElementById("progress");
const totalDuration = 10 * 60 * 1000; 
const intervalTime = 1000;
let elapsed = 0;

const yearText = document.getElementById("year");
const totalYears = 2050 - 2025;
const intervalTimeYear = totalDuration / totalYears; 
let currentYear = 2025;

const total = 50; // Total of the semicircle (100% -> 50% shown)
const width = 70,
  height = 140;
const radius = 65; 
const strokeWidth = 2;
const tau = Math.PI; 
let startAngle = 0;
const energyPercentage = document.getElementById("energy-percentage");

const percentages = [
  { label: "Fossil Fuels", value: 40, color: "#f7933d" }, 
  { label: "Renewables", value: 10, color: "#a0c74f" }, 
  { label: "Nuclear", value: 10, color: "#66c3d6" }, 
];

let totalPercentage = percentages[0].value + percentages[1].value + percentages[2].value;

//Approval
const approvalText = document.getElementById("approval-text");
let approval = 75;
approvalText.textContent = approval;

//Emissions
const ppmText = document.getElementById("ppm-text");
const degreesText = document.getElementById("degrees");
let ppm = 440;
let degrees = 1.6;
ppmText.textContent = ppm;
degreesText.textContent = degrees.toFixed(1);

updateWidgetsColor();

//Pianeta
const colorTerra = 0xb2cd5c; // Green
const colorTerra2 = 0xe1b328;
const colorTerra3 = 0xd44b46;
const colorMare = 0x6bc2d1; // Blue
const colorMare2 = 0xaca2b7;
const colorMare3 = 0xf1726d;
const colorBordo = 0x000000; // Black
const particleColor = 0x808080; // Grey
const particleSpeed = 0.1; // 0-100
let particleCount = 100; // 0-100

//Setting scene, camera
const container = document.getElementById("container-pianeta");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.offsetWidth, container.offsetHeight);
renderer.setClearColor(0x000000, 0); 
container.appendChild(renderer.domElement);

const group = new THREE.Group();
scene.add(group);

const particles = [];
const particleVelocities = [];
const particleOrigins = []; 

//---------------------ANIMATION---------------------
const pages = document.querySelector(".pages");
const sinistraButton = document.querySelector(".sinistra-button");
const destraButton = document.querySelector(".destra-button");
const toggle = document.querySelector("#toggle");

const toggleIconSinistraOn = document.querySelector(".toggle-icon-sinistra-on");
const toggleIconSinistraOff = document.querySelector(".toggle-icon-sinistra-off");
const toggleIconDestraOn = document.querySelector(".toggle-icon-destra-on");
const toggleIconDestraOff = document.querySelector(".toggle-icon-destra-off");

destraButton.addEventListener("click", () => {
  pages.classList.add("destra");

  destraButton.classList.add("active");
  sinistraButton.classList.remove("active");

  toggleIconDestraOn.style.display = "inline-block";
  toggleIconDestraOff.style.display = "none";

  toggleIconSinistraOn.style.display = "none";
  toggleIconSinistraOff.style.display = "inline-block";
});
sinistraButton.addEventListener("click", () => {
  pages.classList.remove("destra");
  destraButton.classList.remove("active");
  sinistraButton.classList.add("active");

  toggleIconDestraOn.style.display = "none";
  toggleIconDestraOff.style.display = "inline-block";

  toggleIconSinistraOn.style.display = "inline-block";
  toggleIconSinistraOff.style.display = "none";
});

//---------------------TUTORIAL---------------------
tutorialScreens.forEach((screen, index) => {
  screen.addEventListener("click", () => {
    console.log(index);
    if (index != 6) {
      screen.style.display = "none";
    }
  });
});

//---------------------INVESTMENTS---------------------

//EventsListener invetments

//Renewables
renewableButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    console.log(investmentData.renewables[renewablesCurrentInvestment].opzioni[index].corretto);
    stampAnimation(investmentData.renewables[renewablesCurrentInvestment].opzioni[index].corretto, "renewable");
    updateWidget(investmentData.renewables[renewablesCurrentInvestment].opzioni[index].corretto, investmentData.renewables[renewablesCurrentInvestment].parametri, "renewable");
    renewablesCurrentInvestment = updateCurrentInvestment(renewableUndoneInvestmens, renewablesCurrentInvestment);
    riempiCarteEsterne();
  });
});

//Fossils
fossilButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    console.log(investmentData.fossil[fossilCurrentInvestment].opzioni[index].corretto);
    stampAnimation(investmentData.fossil[fossilCurrentInvestment].opzioni[index].corretto, "fossil");
    updateWidget(investmentData.fossil[fossilCurrentInvestment].opzioni[index].corretto, investmentData.fossil[fossilCurrentInvestment].parametri, "fossil");
    fossilCurrentInvestment = updateCurrentInvestment(fossilUndoneInvestmens, fossilCurrentInvestment);
    riempiCarteEsterne();
  });
});

//Nuclear
nuclearButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const guessIndex = nuclearOrderGuess.indexOf(index);
    if (guessIndex === -1) {
      nuclearOrderGuess.push(index);
      button.style.backgroundColor = "#378997";
    } else {
      nuclearOrderGuess.splice(guessIndex, 1);
      button.classList.remove("selected");
      button.style.backgroundColor = "#6bc2d1";
    }
    console.log(nuclearOrderGuess);
    nuclearSteps.forEach((step, index) => {
      step.innerHTML = `Step ${index + 1}`;
      step.style.border = "2px dashed #000";
    });

    nuclearOrderGuess.forEach((guess, index) => {
      nuclearSteps[index].innerHTML = nuclearOptions[guess].nome;
      nuclearSteps[index].style.border = "2px solid #000";
    });

    if (nuclearOrderGuess.length == 6) {
      shownInvestmentData = null;
      if (nuclearOrderGuess.toString() == investmentData.nuclear[nuclearCurrentInvestment].risposta.toString()) {
        console.log("corretto");
        updateWidget(true, investmentData.nuclear[nuclearCurrentInvestment].parametri, "nuclear");
        stampAnimation(true, "nuclear");
      } else {
        console.log("sbagliato");
        updateWidget(false, investmentData.nuclear[nuclearCurrentInvestment].parametri, "nuclear");
        stampAnimation(false, "nuclear");
      }

      closeInvestment();

      setTimeout(() => {
        nuclearOrderGuess = [];
        nuclearSteps.forEach((step, index) => {
          step.innerHTML = `Step ${index + 1}`;
          step.style.border = "2px dashed #000";
        });
        nuclearButtons.forEach((button) => {
          button.style.backgroundColor = "#6bc2d1";
        });
      }, 1500);

      nuclearCurrentInvestment = updateCurrentInvestment(nuclearUndoneInvestmens, nuclearCurrentInvestment);
      riempiCarteEsterne();
    }
  });
});

//Approval
approvaConfirmButton.addEventListener("click", () => {
  const approvalMedia = investmentData.approval[approvalCurrentInvestment].media;
  console.log(approvalMedia);

  if (approvalMedia[0].corretto == approvalSwitches[0].checked && approvalMedia[1].corretto == approvalSwitches[1].checked && approvalMedia[2].corretto == approvalSwitches[2].checked) {
    console.log("corretto");
    updateWidget(true, investmentData.approval[approvalCurrentInvestment].parametri, "approval");
    stampAnimation(true, "approval");
  } else {
    console.log("sbagliato");
    updateWidget(false, investmentData.approval[approvalCurrentInvestment].parametri, "approval");
    stampAnimation(false, "approval");
  }

  setTimeout(() => {
    approvalSwitches.forEach((element, index) => {
      element.checked = false;
    });
  }, 1500);

  approvalCurrentInvestment = updateCurrentInvestment(approvalUndoneInvestmens, approvalCurrentInvestment);
  riempiCarteEsterne();
});

//Strategic assets
gridButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    console.log(investmentData.grid[gridCurrentInvestment].opzioni[index].corretto);
    stampAnimation(investmentData.grid[gridCurrentInvestment].opzioni[index].corretto, "grid");
    updateWidget(investmentData.grid[gridCurrentInvestment].opzioni[index].corretto, investmentData.grid[gridCurrentInvestment].parametri, "grid");
    gridCurrentInvestment = updateCurrentInvestment(gridUndoneInvestmens, gridCurrentInvestment);
    riempiCarteEsterne();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");
  const middleIndex = Math.floor(cards.length / 2);
  // Scroll to the middle card
  const middleCard = cards[middleIndex];
  scrollContainer.scrollLeft = middleCard.offsetLeft - (scrollContainer.clientWidth - middleCard.clientWidth) / 2;
});

//Adding data for investments
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    if (!cardShown) {
      switch (index) {
        case 0:
          shownInvestmentData = investmentData.renewables[renewablesCurrentInvestment];
          break;
        case 1:
          shownInvestmentData = investmentData.fossil[fossilCurrentInvestment];
          break;
        case 2:
          shownInvestmentData = investmentData.nuclear[nuclearCurrentInvestment];
          break;
        case 3:
          shownInvestmentData = investmentData.approval[approvalCurrentInvestment];
          break;
        case 4:
          shownInvestmentData = investmentData.grid[gridCurrentInvestment];
          break;
      }

      if (shownInvestmentData.parametri.prezzo <= budget) {
        console.log(shownInvestmentData.parametri.prezzo + " < " + budget);
        cardShown = true;
        investmentCount++;

        // Creazione del fullscreen div

        fullscreenDiv.style.display = "block";
        fullscreenDiv.style.backgroundColor = window.getComputedStyle(card).backgroundColor;

        // nascondi toggle
        toggle.style.display = "none";

        //aggiunta header
        innerCard.children[0].innerHTML = shownInvestmentData.titolo;

        innerParameters[0].children[1].innerHTML = `${shownInvestmentData.parametri.prezzo}M`;
        innerParameters[1].children[1].innerHTML = `${shownInvestmentData.parametri.energia}%`;
        innerParameters[2].children[1].innerHTML = `${shownInvestmentData.parametri.co2}ppm`;
        innerParameters[3].children[1].innerHTML = `${shownInvestmentData.parametri.consenso}%`;

        //rendi visibile il body del colore selezionato
        if (card.classList.contains("renewables")) {
          investmentBodies[0].style.display = "flex";

          //cambia l'immafgine della mappa
          renewableMap.src = `green_maps/${investmentData.renewables[renewablesCurrentInvestment].immagine}.png`;

          //aggiorna i testi dei bottoni
          renewableButtons.forEach((button, index) => {
            button.innerHTML = investmentData.renewables[renewablesCurrentInvestment].opzioni[index].nome;
          });
        }

        if (card.classList.contains("fossil")) {
          investmentBodies[1].style.display = "flex";

          //cambia l'immagine delle risorse
          fossilResource.src = `fossil_resources/${investmentData.fossil[fossilCurrentInvestment].resource}.png`;
          fossilFlags.forEach((flag, index) => {
            flag.src = `fossil_flags/${investmentData.fossil[fossilCurrentInvestment].opzioni[index].bandiera}.png`;
          });

          fossilFlagText.forEach((flagText, index) => {
            //   console.log(investmentData.fossil[fossilCurrentInvestment].opzioni[index].stato);
            switch (investmentData.fossil[fossilCurrentInvestment].opzioni[index].stato) {
              case 0:
                flagText.innerHTML = "The political stability of the state keeps prices at a <span class='bold'>standard</span> level.";
                break;
              case 1:
                flagText.innerHTML = "Global tech growth lowered prices due to <span class='bold'>reduced demand</span> ";
                break;
              case 2:
                flagText.innerHTML = "<span class='bold'>Rivalries</span> with nations allied to us have driven up prices.";
                break;
            }
          });
        }

        if (card.classList.contains("nuclear")) {
          investmentBodies[2].style.display = "flex";

          //aggiorna testo bottoni nucleare
          nuclearCode.src = `nuclear_codes/${investmentData.nuclear[nuclearCurrentInvestment].code}.png`;
          nuclearButtons.forEach((button, index) => {
            button.innerHTML = investmentData.nuclear[nuclearCurrentInvestment].opzioni[index].abbreviazione;
          });
        }

        if (card.classList.contains("approval")) {
          investmentBodies[3].style.display = "flex";

          //aggiorna grafico archetipo
          archetypeGraph.src = `approval_archetypes/${investmentData.approval[approvalCurrentInvestment].archetipo}.png`;

          //aggiorna media
          approvalMediaLabel.forEach((media, index) => {
            media.innerHTML = investmentData.approval[approvalCurrentInvestment].media[index].nome;
          });
        }

        if (card.classList.contains("grid")) {
          investmentBodies[4].style.display = "flex";
          //aggiorno scienziati e quello che dicono
          gridScientist.forEach((scientist, index) => {
            scientist.src = `grid_scientists/${investmentData.grid[gridCurrentInvestment].opzioni[index].scienziato}.png`;
          });

          gridScientistText.forEach((scientistText, index) => {
            scientistText.innerHTML = investmentData.grid[gridCurrentInvestment].opzioni[index].frase;
          });
        }

        // Rimuovere il fullscreen div con animazione

        answerButtons.forEach((button) => {
          button.addEventListener("click", () => {
            closeInvestment();
          });
        });

        fullscreenDiv.addEventListener("animationend", () => {
          if (cardShown) {
            if (fullscreenDiv.classList.contains("slide-out")) {
              fullscreenDiv.classList.remove("slide-out");
              fullscreenDiv.style.display = "none";
              cardShown = false;
              toggle.style.display = "inline-flex";
              feedbackStamp.classList.remove("show");
              //feedbackStamp.style.display = "none";

              investmentBodies.forEach((investmentBody) => {
                investmentBody.style.display = "none";
              });
            }
          }
        });
      }else{
        feedbackAnimation(card.children[1].children[0].children[1]);
        console.log(card.children[1]);
      }
    }
  });
});

function closeInvestment() {
  setTimeout(() => {
    fullscreenDiv.classList.add("slide-out");
    shownInvestmentData = null;
  }, 1000);
}
function stampAnimation(correct, investimento) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  if (correct) {
    feedbackStamp.innerHTML = "APPROVED";
  } else {
    feedbackStamp.innerHTML = "DENIED";
  }

  switch (investimento) {
    case "renewable":
      if (correct) {
        feedbackStamp.style.color = "#D5E79A";
        feedbackStamp.style.borderColor = "#D5E79A";
      } else {
        feedbackStamp.style.color = "#495D09";
        feedbackStamp.style.borderColor = "#495D09";
      }
      break;
    case "fossil":
      if (correct) {
        feedbackStamp.style.color = "#ECD2BB";
        feedbackStamp.style.borderColor = "#ECD2BB";
      } else {
        feedbackStamp.style.color = "#613209";
        feedbackStamp.style.borderColor = "#613209";
      }
      break;
    case "nuclear":
      if (correct) {
        feedbackStamp.style.color = "#B7E7EF";
        feedbackStamp.style.borderColor = "#B7E7EF";
      } else {
        feedbackStamp.style.color = "#0A4853";
        feedbackStamp.style.borderColor = "#0A4853";
      }
      break;
    case "approval":
      if (correct) {
        feedbackStamp.style.color = "#F3C8D3";
        feedbackStamp.style.borderColor = "#F3C8D3";
      } else {
        feedbackStamp.style.color = "#76112C";
        feedbackStamp.style.borderColor = "#76112C";
      }
      break;
    case "grid":
      if (correct) {
        feedbackStamp.style.color = "#EFC7F5";
        feedbackStamp.style.borderColor = "#EFC7F5";
      } else {
        feedbackStamp.style.color = "#651070";
        feedbackStamp.style.borderColor = "#651070";
      }
      break;
  }

  feedbackStamp.classList.add("show");
}
function updateCurrentInvestment(undoneInvestments, currentInvestment) {
  if (undoneInvestments.undone.length <= 1) {
    undoneInvestments.undone = Array.from({ length: undoneInvestments.maxLenght }, (_, i) => i);
  }

  const index = undoneInvestments.undone.indexOf(currentInvestment);
  if (index > -1) {
    undoneInvestments.undone.splice(index, 1);
  }

  return undoneInvestments.undone[Math.floor(Math.random() * undoneInvestments.undone.length)];
}

function riempiCarteEsterne() {
  //Renewables
  renewablesCard.children[0].innerHTML = investmentData.renewables[renewablesCurrentInvestment].titolo;

  renewableParameters[0].children[1].innerHTML = `${investmentData.renewables[renewablesCurrentInvestment].parametri.prezzo}M`;
  renewableParameters[1].children[1].innerHTML = `${investmentData.renewables[renewablesCurrentInvestment].parametri.energia}%`;
  renewableParameters[2].children[1].innerHTML = `${investmentData.renewables[renewablesCurrentInvestment].parametri.co2}ppm`;
  renewableParameters[3].children[1].innerHTML = `${investmentData.renewables[renewablesCurrentInvestment].parametri.consenso}%`;

  //Fossils
  fossilCard.children[0].innerHTML = investmentData.fossil[fossilCurrentInvestment].titolo;

  fossilParameters[0].children[1].innerHTML = `${investmentData.fossil[fossilCurrentInvestment].parametri.prezzo}M`;
  fossilParameters[1].children[1].innerHTML = `${investmentData.fossil[fossilCurrentInvestment].parametri.energia}%`;
  fossilParameters[2].children[1].innerHTML = `${investmentData.fossil[fossilCurrentInvestment].parametri.co2}ppm`;
  fossilParameters[3].children[1].innerHTML = `${investmentData.fossil[fossilCurrentInvestment].parametri.consenso}%`;

  //Nuclear
  nuclearCard.children[0].innerHTML = investmentData.nuclear[nuclearCurrentInvestment].titolo;

  nuclearParameters[0].children[1].innerHTML = `${investmentData.nuclear[nuclearCurrentInvestment].parametri.prezzo}M`;
  nuclearParameters[1].children[1].innerHTML = `${investmentData.nuclear[nuclearCurrentInvestment].parametri.energia}%`;
  nuclearParameters[2].children[1].innerHTML = `${investmentData.nuclear[nuclearCurrentInvestment].parametri.co2}ppm`;
  nuclearParameters[3].children[1].innerHTML = `${investmentData.nuclear[nuclearCurrentInvestment].parametri.consenso}%`;

  //Approval
  approvalCard.children[0].innerHTML = investmentData.approval[approvalCurrentInvestment].titolo;

  approvalParamters[0].children[1].innerHTML = `${investmentData.approval[approvalCurrentInvestment].parametri.prezzo}M`;
  approvalParamters[1].children[1].innerHTML = `${investmentData.approval[approvalCurrentInvestment].parametri.energia}%`;
  approvalParamters[2].children[1].innerHTML = `${investmentData.approval[approvalCurrentInvestment].parametri.co2}ppm`;
  approvalParamters[3].children[1].innerHTML = `${investmentData.approval[approvalCurrentInvestment].parametri.consenso}%`;

  //Strategi assets
  gridCard.children[0].innerHTML = investmentData.grid[gridCurrentInvestment].titolo;

  gridParameters[0].children[1].innerHTML = `${investmentData.grid[gridCurrentInvestment].parametri.prezzo}M`;
  gridParameters[1].children[1].innerHTML = `${investmentData.grid[gridCurrentInvestment].parametri.energia}%`;
  gridParameters[2].children[1].innerHTML = `${investmentData.grid[gridCurrentInvestment].parametri.co2}ppm`;
  gridParameters[3].children[1].innerHTML = `${investmentData.grid[gridCurrentInvestment].parametri.consenso}%`;
}

//---------------------WIDGET---------------------

//Year

lastTutorialButton.addEventListener("click", () => {
  tutorialScreens[6].style.display = "none";
  startTimer();

  const intervalYear = setInterval(() => {
    currentYear++;
    yearText.textContent = currentYear;

    //News update
    if (currentYear % 6==0) {
      rand = Math.floor(Math.random() * news.length);
      if (rand == lastRand) {
        rand = Math.floor(Math.random() * news.length);
      } else {
        newsTitle.textContent = news[rand].titolo;
        newsText.textContent = news[rand].corpo;

        updateChart(Math.floor(-percentages[0].value * news[rand].energy), Math.floor(-percentages[1].value * news[rand].energy), Math.floor(-percentages[2].value * news[rand].energy));
        approval = Math.floor(approval * news[rand].approval);
        lastRand = rand;
      }
    } 

    //Budget increase
    if (currentYear % 1 == 0) {
      budget += 15;
      textAnimation(budgetText, 15);
    }

    //Increase of pmm based on fossils
    ppm += percentages[0].value * 0.05;
    textAnimation(ppmText, Math.floor(percentages[0].value * 0.05), true);
    degrees += ((percentages[0].value * 0.05) / 100) * 1.2;
    degreesText.textContent = degrees.toFixed(1);

    //Decrease of approval based on fossils
    if (totalPercentage < criticalEnergy) {
      approval -= Math.round((criticalEnergy - totalPercentage) * 0.2);
      if(approval < 0){
        approval = 0;
      }
      textAnimation(approvalText, -Math.round((criticalEnergy - totalPercentage) * 0.2));
    }
    updateWidgetsColor();
    if (ppm < 420) {
      updatePlanetColors(colorTerra, colorMare);
      particleCount = 50;
    } else if (420 <= ppm && ppm < 440) {
      updatePlanetColors(colorTerra, colorMare);
      particleCount = 100;
    } else if (440 <= ppm && ppm < 460) {
      updatePlanetColors(colorTerra2, colorMare2);
      particleCount = 150;
    } else {
      updatePlanetColors(colorTerra3, colorMare3); 
      particleCount = 200;
    }

    if (currentYear >= 2050) {
      clearInterval(intervalYear);
    }
  }, intervalTimeYear);
});

function startTimer(){
  const interval = setInterval(() => {
    elapsed += intervalTime;
    const progressPercentage = (elapsed / totalDuration) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    if (elapsed >= totalDuration) {
      clearInterval(interval);
      removedWidgets.forEach((element)=>{
        element.style.display = "none";
      })
      resultWidgets.forEach((element)=>{
        element.style.border = "2px solid #000";
        element.style.boxShadow = "2px 2px 0px 0px #000";
      })
      gameOver.style.display = "flex";
      toggle.style.display = "none";
      if(approval>criticalApproval && totalPercentage>criticalEnergy && ppm<criticalPpm && degrees<criticalDegrees){
        document.body.style.backgroundColor = "#CCDD94";
        gameOverText.src = `game_over/won.png`;
      } else {
        gameOverText.src = `game_over/lost.png`;
        document.body.style.backgroundColor = "#EE9491";
      }
    }
  }, intervalTime);
}

//Energy production graph
totalPercentage = percentages[0].value + percentages[1].value + percentages[2].value;

const svg = d3.create("svg").attr("width", width).attr("height", height);

const g = svg.append("g").attr("transform", `translate(0, ${height / 2})`);

//Create the arcs
const arc = d3
  .arc()
  .innerRadius(radius - strokeWidth - 2)
  .outerRadius(radius - 2)
  .startAngle(0);

//Half circle as the base
g.append("path").datum({ endAngle: tau }).attr("d", arc).attr("fill", "none").attr("stroke", "#000").attr("stroke-width", strokeWidth);

//Creating a filter for the shadow
const defs = svg.append("defs");
const filter = defs.append("filter").attr("id", "shadow").attr("x", "-50%").attr("y", "-50%").attr("width", "200%").attr("height", "200%");
filter.append("feDropShadow").attr("dx", -1).attr("dy", 1).attr("stdDeviation", 0).attr("flood-color", "#000").attr("flood-opacity", 1);

g.append("path")
  .datum({
    startAngle: (0.5 / 100) * tau,
    endAngle: (totalPercentage / 100) * tau,
  })
  .attr("d", d3.arc().innerRadius(55).outerRadius(68))
  .attr("fill", "none")
  .attr("stroke", "#000")
  .attr("stroke-width", 2)
  .attr("filter", "url(#shadow)");

//Arcs of the percentages
percentages.forEach((d) => {
  const angle = (d.value / 100) * tau;
  g.append("path")
    .datum({ startAngle: startAngle, endAngle: startAngle + angle })
    .attr("d", d3.arc().innerRadius(55).outerRadius(68))
    .attr("fill", d.color)
    .attr("stroke", "#000")
    .attr("stroke-width", 2);

  startAngle += angle;
});

g.append("path")
  .datum({
    startAngle: (0.5 / 100) * tau,
    endAngle: (totalPercentage / 100) * tau,
  })
  .attr("d", d3.arc().innerRadius(55).outerRadius(68))
  .attr("fill", "none")
  .attr("stroke", "#000")
  .attr("stroke-width", 1);

document.getElementById("chart-container").appendChild(svg.node());

//Update the chart when the values are changed
function updateChart(fossil, renewables, nuclear) {
  percentages[0].value += fossil;
  percentages[1].value += renewables;
  percentages[2].value += nuclear;

  const totalPercentageTemp = totalPercentage;
  totalPercentage = percentages[0].value + percentages[1].value + percentages[2].value;

  if (fossil == 0 && totalPercentage > 100) {
    percentages[0].value -= totalPercentage - 100;
    totalPercentage = 100;
  }

  if (fossil > 0 && totalPercentage > 100) {
    const renewableLoss = Math.floor((totalPercentage - 100) / 2);

    percentages[1].value -= renewableLoss;
    percentages[2].value -= totalPercentage - 100 - renewableLoss;
    console.log(totalPercentage - 100 - renewableLoss);
    totalPercentage = 100;
  }

  percentages.forEach((element) => {
    if (element.value < 0) {
      element.value = 0;
    }

    if (element.value > 100) {
      element.value = 100;
    }
  });

  if (totalPercentageTemp < 100) {
    textAnimation(energyPercentage, totalPercentage - totalPercentageTemp);
  }

  g.selectAll("path").remove();
  g.append("path").datum({ endAngle: tau }).attr("d", arc).attr("fill", "none").attr("stroke", "#000").attr("stroke-width", strokeWidth).attr("filter", "url(#shadow)");
  g.append("path")
    .datum({
      startAngle: (0.5 / 100) * tau,
      endAngle: (totalPercentage / 100) * tau,
    })
    .attr("d", d3.arc().innerRadius(55).outerRadius(68))
    .attr("fill", "none")
    .attr("stroke", "#000")
    .attr("stroke-width", 2)
    .attr("filter", "url(#shadow)");

  startAngle = 0;
  percentages.forEach((d) => {
    const angle = (d.value / 100) * tau;
    g.append("path")
      .datum({ startAngle: startAngle, endAngle: startAngle + angle })
      .attr("d", d3.arc().innerRadius(55).outerRadius(68))
      .attr("fill", d.color)
      .attr("stroke", "#000")
      .attr("stroke-width", 2);

    startAngle += angle;
  });

  g.append("path")
    .datum({
      startAngle: (0.5 / 100) * tau,
      endAngle: (totalPercentage / 100) * tau,
    })
    .attr("d", d3.arc().innerRadius(55).outerRadius(68))
    .attr("fill", "none")
    .attr("stroke", "#000")
    .attr("stroke-width", 1);
}

//Widget planet

//Create particles
function createParticles(boundingBox) {
  for (let i = 0; i < particleCount; i++) {
    const x = THREE.MathUtils.randFloat(boundingBox.min.x, boundingBox.max.x);
    const y = THREE.MathUtils.randFloat(boundingBox.min.y, boundingBox.max.y);
    const z = THREE.MathUtils.randFloat(boundingBox.min.z, boundingBox.max.z);

    const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: particleColor,
    });
    const particleMesh = new THREE.Mesh(particleGeometry, particleMaterial);

    particleMesh.position.set(x, y, z);
    scene.add(particleMesh);
    particles.push(particleMesh);

    particleVelocities.push({
      x: THREE.MathUtils.randFloat(-0.02, 0.02),
      y: THREE.MathUtils.randFloat(0.01, 0.05),
      z: THREE.MathUtils.randFloat(-0.02, 0.02),
    });
    particleOrigins.push(new THREE.Vector3(x, y, z));
  }
}

//Move the particles
function animateParticles() {
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    const velocity = particleVelocities[i];
    const origin = particleOrigins[i];

    particle.position.x += velocity.x * (particleSpeed / 10);
    particle.position.y += velocity.y * (particleSpeed / 10);
    particle.position.z += velocity.z * (particleSpeed / 10);

    if (Math.abs(particle.position.x - origin.x) > 1 || particle.position.y - origin.y > 1.5 || Math.abs(particle.position.z - origin.z) > 1) {
      particle.position.copy(origin);
    }
  }
}

//Upload GLTF model
const loader = new THREE.GLTFLoader();
loader.load(
  "untitled.gltf",
  function (gltf) {
    const object = gltf.scene;

    const box = new THREE.Box3().setFromObject(object);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    object.position.sub(center);
    group.add(object);

    const maxDim = Math.max(size.x, size.y, size.z);
    const cameraDistance = maxDim * 2;
    camera.position.set(0, maxDim / 2, cameraDistance);
    camera.lookAt(0, 0, 0);

    object.traverse(function (child) {
      if (child.isMesh) {
        const baseColor = child.name.includes("terra") ? colorTerra : child.name.includes("mare") ? colorMare : child.name.includes("bordo") ? colorBordo : 0xff00ff;

        child.material = new THREE.MeshBasicMaterial({ color: baseColor });
      }
    });

    createParticles(box);
  },
  undefined,
  function (error) {
    console.error("Errore nel caricamento del modello:", error);
  }
);

function animate() {
  requestAnimationFrame(animate);
  group.rotation.y += 0.003;
  animateParticles();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", function () {
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});

//---------------------WIDGET UPDATE---------------------
function updateWidget(result, parametri, type) {
  setTimeout(() => {
    pages.classList.remove("destra");
    destraButton.classList.remove("active");
    sinistraButton.classList.add("active");

    toggleIconDestraOn.style.display = "none";
    toggleIconDestraOff.style.display = "inline-block";

    toggleIconSinistraOn.style.display = "inline-block";
    toggleIconSinistraOff.style.display = "none";

    setTimeout(() => {
      budget -= parametri.prezzo;
      textAnimation(budgetText, -parametri.prezzo, false, true);

      if (result) {
        console.log(investmentCount);
        ppm += parametri.co2;
        textAnimation(ppmText, parametri.co2, true, true);
        degrees += (parametri.co2 / 100) * 1.2;
        approval += parametri.consenso;
        if(approval > 100){
          approval = 100;
        }
        if(approval < 0) {
          approval = 0;
        }
        if (totalPercentage + parametri.energia > 100) {
          totalPercentage = 100;
        } else {
          if (type == "fossil") {
            updateChart(parametri.energia, 0, 0);
          } else if (type == "renewable") {
            updateChart(0, parametri.energia, 0);
          } else if (type == "nuclear") {
            updateChart(0, 0, parametri.energia);
          }
          totalPercentage = percentages[0].value + percentages[1].value + percentages[2].value;
        }
        let rand;

        //New values texts
        degreesText.textContent = degrees.toFixed(1);

        textAnimation(energyPercentage, totalPercentage - parseInt(energyPercentage.textContent, false, true));
        textAnimation(approvalText, approval - parseInt(approvalText.textContent, false, true));

        if (ppm < 420) {
          particleCount = 50;
        } else if (420 <= ppm && ppm < 440) {
          particleCount = 100;
        } else if (440 <= ppm && ppm < 460) {
          particleCount = 150;
        } else {
          particleCount = 200;
        }
        console.log(particleCount);
        particles.forEach((particle) => {
          scene.remove(particle);
        });
        particles.length = 0;
        particleVelocities.length = 0;
        particleOrigins.length = 0;

        createParticles(new THREE.Box3().setFromObject(group));
        document.getElementById("chart-container").appendChild(svg.node());

        updateWidgetsColor();
        updatePlanet();
      }
    }, 400);
  }, 1200);
}

function textAnimation(element, value) {
  const startintValue = parseInt(element.textContent);

  if (value > 0) {
    element.style.color = green; 

    let currentValue = startintValue;
    const interval = setInterval(() => {
      if (currentValue < startintValue + value) {
        currentValue++;
        element.textContent = currentValue;
      } else {
        element.style.color = "#000";
        clearInterval(interval);
        updateWidgetsColor();
      }
    }, 30);
  }

  if (value < 0) {
    element.style.color = red;

    let currentValue = startintValue;
    const interval = setInterval(() => {
      if (currentValue > startintValue + value) {
        currentValue--;
        element.textContent = currentValue;
      } else {
        clearInterval(interval);
        element.style.color = "#000";
        updateWidgetsColor();
      }
    }, 30);
  }
}

function feedbackAnimation(element) {
  element.style.color = darkRed;
  element.style.fontWeight = "bold";
  setTimeout(() => {
      element.style.color = "#000";
      element.style.fontWeight = "normal";
  }, 400);
}


function updateWidgetsColor() {
  if (parseInt(approvalText.textContent) < criticalApproval) {
    approvalText.style.color = red;
  } else {
    approvalText.style.color = "000";
  }
  if (parseInt(ppmText.textContent) > criticalPpm) {
    ppmText.style.color = red;
    console.log("cambio colore ppm");
  } else {
    ppmText.style.color = "000";
  }
  if (parseInt(energyPercentage.textContent) < criticalEnergy) {
    energyPercentage.style.color = red;
  } else {
    energyPercentage.style.color = "000";
  }
  if (parseInt(degreesText.textContent) > criticalDegrees) {
    degreesText.style.color = red;
  } else {
    degreesText.style.color = "000";
  }
}

function updatePlanetColors(landColor, seaColor) {
  group.traverse(function (child) {
    if (child.isMesh) {
      if (child.name.includes("terra")) {
        child.material.color.setHex(landColor);
      } else if (child.name.includes("mare")) {
        child.material.color.setHex(seaColor);
      }
    }
  });
}

function updatePlanet() {
  if (ppm < 420) {
    updatePlanetColors(colorTerra, colorMare);
    particleCount = 50;
  } else if (420 <= ppm && ppm < 440) {
    updatePlanetColors(colorTerra, colorMare);
    particleCount = 100;
  } else if (440 <= ppm && ppm < 460) {
    updatePlanetColors(colorTerra2, colorMare2);
    particleCount = 150;
  } else {
    updatePlanetColors(colorTerra3, colorMare3);
    particleCount = 200;
  }
}
