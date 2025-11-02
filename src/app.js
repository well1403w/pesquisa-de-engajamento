// Emoji image assets
const RostoFeliz = "./assets/rosto-feliz.png";
const RostoNeutro = "./assets/rosto-neutro.png";
const RostoTriste = "./assets/rosto-triste.png";

// Survey data structure
const surveyData = {
  steps: [
    {
      number: 1,
      question: "1. Há quanto tempo trabalha na Masterboi?",
      type: "radio",
      options: [
        "Menos de 1 ano",
        "1 a 5 anos",
        "6 a 10 anos",
        "11 a 15 anos",
        "16 a 20 anos",
        "21 anos e acima",
      ],
    },
    {
      number: 2,
      question: "2. Qual sua faixa etária?",
      type: "radio",
      options: [
        "18 a 25 anos",
        "26 a 45 anos",
        "46 a 60 anos",
        "A partir de 61 anos",
      ],
    },
    {
      number: 3,
      question: "3. Qual gênero se reconhece?",
      type: "radio",
      options: [
        "Masculino",
        "Feminino",
        "Não Binário",
        "Transgênero",
        "Prefiro não Declarar",
      ],
    },
    {
      number: 4,
      question: "4. Você se considera:",
      type: "radio",
      options: ["Amarelo", "Branco", "Indígena", "Pardo", "Preto"],
    },
    {
      number: 5,
      question: "5. Possui alguma deficiência?",
      type: "radio",
      options: ["Auditiva", "Cognitiva", "Física", "Visual", "Não se aplica"],
    },
    {
      number: 6,
      question: "6. Nossos valores são praticados no dia a dia?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 7,
      question:
        "7.Na Masterboi as pessoas são bem tratadas, independentemente da religião; cultura; cor/etnia; sexo, idade, cargo, posição?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 8,
      question:
        "8. Posso denunciar comportamentos ou práticas antiéticas sem medo de ser punido; através do canal de ética e conduta?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 9,
      question:
        "9. No meu setor, tenho um ambiente de cooperação e trabalho em equipe?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 10,
      question: "10. Na minha opinião, existe colaboração entre as áreas?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 11,
      question:
        "11. A empresa incentiva o equilíbrio entre vida pessoal e profissional?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 12,
      question:
        "12. Entendo claramente como o meu trabalho contribui para o alcance dos resultados da Masterboi?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 13,
      question:
        "13. Novas ideias; perspectivas e estilos de trabalho, para a melhoria dos processos são aceitas?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 14,
      question:
        "14. Recebo treinamento adequado para realização do meu trabalho?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 15,
      question:
        "15. Eu recebo equipamentos, ferramentas de trabalho e EPI's, necessários para realizar minhas atividades?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 16,
      question:
        "16. Os processos e procedimentos na Masterboi são claros e bem definidos?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 17,
      question: "17. Considero a Masterboi um bom lugar para se trabalhar?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 18,
      question: "18. Minha liderança age de acordo com o que fala?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 19,
      question:
        "19. Sou encorajado pelo meu gestor a pensar em novas maneiras de tornar o trabalho mais produtivo?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 20,
      question:
        "20. Meu gestor deixa claro; para mim e para a equipe, as metas, objetivos e estratégias do setor?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 21,
      question:
        "21. Meu gestor imediato reconhece quando eu realizo um bom trabalho?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 22,
      question:
        "22. Meu gestor realiza comigo o papo de carreira, deixando claro minhas fortalezas e oportunidades, com plano de desenvolvimento?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 23,
      question: "23. Conheço e acesso os canais de comunicações da Masterboi?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 24,
      question:
        "24. A empresa se comunica de maneira eficaz com os colaboradores?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 25,
      question:
        "25. A liderança me mantém informado(a) sobre as mudanças nos processos e procedimentos da Masterboi?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 26,
      question:
        "26. Tenho acesso fácil às informações da minha remuneração, banco de horas e/ou premiações?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 27,
      question:
        "27. Sinto que sou remunerado de forma justa pelo trabalho que realizo?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 28,
      question:
        "28. Eu conheço os critérios do programa de incentivo à produtividade/premiação da Masterboi?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 29,
      question: "29. Todos aqui tem oportunidade de carreira (decolar)?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 30,
      question:
        "30. Os benefícios oferecidos pela Masterboi são atrativos quando comparados às práticas de outras empresas?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 31,
      question:
        "31. Os benefícios oferecidos pela Masterboi atendem minhas necessidades?",
      type: "emoji_choice",
      options: [
        { label: "SIM", emoji: RostoFeliz, color: "green" },
        { label: "PARCIAL", emoji: RostoNeutro, color: "yellow" }, // <-- ALTERADO
        { label: "NÃO", emoji: RostoTriste, color: "red" },
      ],
    },
    {
      number: 32,
      question: "30. Deixe seu comentário final, elogio ou sugestões:",
      type: "textarea",
      placeholder: "",
    },
  ],
};

// Application state
const appState = {
  currentStep: 0,
  totalSteps: surveyData.steps.length,
  answers: {},
  userInfo: {},
};

// DOM Elements
const elements = {
  pesquisa: document.getElementById("pesquisa"),
  welcomeScreen: document.getElementById("welcomeScreen"),
  surveyContainer: document.getElementById("surveyContainer"),
  successScreen: document.getElementById("successScreen"),
  errorScreen: document.getElementById("errorScreen"),
  navigationFooter: document.getElementById("navigationFooter"),
  userInfoModal: document.getElementById("userInfoModal"),
  loadingOverlay: document.getElementById("loadingOverlay"),
  startSurveyBtn: document.getElementById("startSurveyBtn"),
  backBtn: document.getElementById("backBtn"),
  continueBtn: document.getElementById("continueBtn"),
  finishBtn: document.getElementById("finishBtn"),
  retryBtn: document.getElementById("retryBtn"),
  userInfoForm: document.getElementById("userInfoForm"),
  sectionTitle: document.getElementById("sectionTitle"),
  questionText: document.getElementById("questionText"),
  questionOptions: document.getElementById("questionOptions"),
  currentStepText: document.getElementById("currentStep"),
  totalStepsText: document.getElementById("totalSteps"),
  progressRingCircle: document.getElementById("progressRingCircle"),
  userInfoError: document.getElementById("userInfoError"),
};

// Initialize app
function init() {
  elements.totalStepsText.textContent = appState.totalSteps;
  attachEventListeners();
}

// Event listeners
function attachEventListeners() {
  elements.startSurveyBtn.addEventListener("click", openUserInfoModal);
  elements.userInfoForm.addEventListener("submit", handleUserInfoSubmit);
  elements.backBtn.addEventListener("click", goToPreviousStep);
  elements.continueBtn.addEventListener("click", goToNextStep);
  elements.finishBtn.addEventListener("click", submitSurvey);
  elements.retryBtn.addEventListener("click", resetToLastStep);
}

// Show/hide screens
function showScreen(screenName) {
  ["welcomeScreen", "surveyContainer", "successScreen", "errorScreen"].forEach(
    (screen) => {
      elements[screen].classList.remove("active");
    }
  );
  elements[screenName].classList.add("active");
}

// User info modal
function openUserInfoModal() {
  elements.userInfoModal.classList.add("active");
}
function closeUserInfoModal() {
  elements.userInfoModal.classList.remove("active");
}

// Handle user info form submission (com API e sessionStorage)
async function handleUserInfoSubmit(e) {
  e.preventDefault();
  const formData = new FormData(elements.userInfoForm);
  const matricula = formData.get("matricula");
  const cpf = formData.get("cpf");

  elements.userInfoError.textContent = "";
  elements.userInfoError.style.display = "none";
  elements.loadingOverlay.classList.add("active");

  try {
    const response = await axios.post(
      "https://default3f4542cf1cf94670b1c0f8a54eefa3.c3.environment.api.powerplatform.com/powerautomate/automations/direct/workflows/62edd37828084e3ea8025d3bddeeb9bd/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=iIecY8WEhVqwEMQKz0P-b_BUZIz2ALfFfvzwuNC__Do",
      { matricula, cpf }
    );

    if (response.status === 200) {
      appState.userInfo = response.data;
      sessionStorage.setItem("matricula", matricula);
      closeUserInfoModal();
      startSurvey();
    } else {
      elements.userInfoError.textContent =
        response.data?.message || "Erro ao confirmar os dados.";
      elements.userInfoError.style.display = "block";
    }
  } catch (error) {
    console.error(error);
    elements.userInfoError.textContent =
      error.response?.data?.error || "Erro ao buscar colaborador.";
    elements.userInfoError.style.display = "block";
  } finally {
    elements.loadingOverlay.classList.remove("active");
  }
}

// Start survey
function startSurvey() {
  appState.currentStep = 1;
  showScreen("surveyContainer");
  elements.navigationFooter.classList.remove("hidden");
  renderStep();
}

// Render current step
function renderStep() {
  const step = surveyData.steps[appState.currentStep - 1];
  elements.currentStepText.textContent = appState.currentStep;
  updateProgressRing();

  if (step.sectionTitle) {
    elements.sectionTitle.textContent = step.sectionTitle;
    elements.sectionTitle.style.display = "block";
  } else elements.sectionTitle.style.display = "none";

  elements.questionText.textContent = step.question;
  elements.questionOptions.innerHTML = "";

  switch (step.type) {
    case "emoji_choice":
      renderEmojiChoice(step);
      break;
    case "radio":
      renderRadioOptions(step);
      break;
    case "duration":
      renderDurationFields(step);
      break;
    case "textarea":
      renderTextarea(step);
      break;
  }

  updateNavigationButtons();
  restorePreviousAnswer();
}

// Render emoji choice
function renderEmojiChoice(step) {
  const container = document.createElement("div");
  container.className = "emoji-options";

  step.options.forEach((option) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = `emoji-option ${option.color}`;
    optionDiv.dataset.value = option.label;

    let emojiContent = "";
    if (
      typeof option.emoji === "string" &&
      (option.emoji.endsWith(".png") ||
        option.emoji.endsWith(".jpg") ||
        option.emoji.endsWith(".svg"))
    ) {
      emojiContent = `<img src="${option.emoji}" alt="${option.label}" class="emoji-in-option">`;
    } else emojiContent = option.emoji;

    optionDiv.innerHTML = `<div class="emoji-display">${emojiContent}</div><div class="emoji-label">${option.label}</div>`;
    optionDiv.addEventListener("click", () =>
      selectEmojiOption(container, optionDiv, option.label)
    );
    container.appendChild(optionDiv);
  });

  elements.questionOptions.appendChild(container);
}

function selectEmojiOption(container, selectedOption, value) {
  container
    .querySelectorAll(".emoji-option")
    .forEach((opt) => opt.classList.remove("selected"));
  selectedOption.classList.add("selected");
  saveAnswer(value);
  enableContinueButton();
}

// Render radio options
function renderRadioOptions(step) {
  step.options.forEach((option) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "radio-option";
    optionDiv.dataset.value = option;
    optionDiv.textContent = option;
    optionDiv.addEventListener("click", () =>
      selectRadioOption(optionDiv, option)
    );
    elements.questionOptions.appendChild(optionDiv);
  });
}

function selectRadioOption(selectedOption, value) {
  elements.questionOptions
    .querySelectorAll(".radio-option")
    .forEach((opt) => opt.classList.remove("selected"));
  selectedOption.classList.add("selected");
  saveAnswer(value);
  enableContinueButton();
}

// Render duration fields
function renderDurationFields(step) {
  const container = document.createElement("div");
  container.className = "duration-container";

  step.fields.forEach((field) => {
    const fieldDiv = document.createElement("div");
    fieldDiv.className = "duration-field";
    const label = document.createElement("label");
    label.textContent = field.label;
    const select = document.createElement("select");
    select.name = field.name;
    select.appendChild(new Option("Selecione", ""));
    field.options.forEach((opt) => select.appendChild(new Option(opt, opt)));
    select.addEventListener("change", checkDurationComplete);
    fieldDiv.appendChild(label);
    fieldDiv.appendChild(select);
    container.appendChild(fieldDiv);
  });

  elements.questionOptions.appendChild(container);
}

function checkDurationComplete() {
  const selects = elements.questionOptions.querySelectorAll("select");
  const allSelected = Array.from(selects).every((s) => s.value !== "");
  if (allSelected) {
    const values = {};
    selects.forEach((s) => (values[s.name] = s.value));
    saveAnswer(values);
    enableContinueButton();
  } else disableContinueButton();
}

// Render textarea
function renderTextarea(step) {
  const container = document.createElement("div");
  container.className = "textarea-container";
  const textarea = document.createElement("textarea");
  textarea.className = "textarea-field";
  textarea.placeholder = step.placeholder || "Digite aqui...";
  textarea.addEventListener("input", () => {
    saveAnswer(textarea.value);
    enableContinueButton();
  });
  container.appendChild(textarea);
  elements.questionOptions.appendChild(container);
}

// Save / restore answers
function saveAnswer(value) {
  appState.answers[`step${appState.currentStep}`] = value;
}

function restorePreviousAnswer() {
  const savedAnswer = appState.answers[`step${appState.currentStep}`];
  if (!savedAnswer) {
    disableContinueButton();
    return;
  }
  const step = surveyData.steps[appState.currentStep - 1];
  switch (step.type) {
    case "emoji_choice":
    case "radio":
      const option = elements.questionOptions.querySelector(
        `[data-value="${savedAnswer}"]`
      );
      if (option) option.classList.add("selected");
      enableContinueButton();
      break;
    case "duration":
      const selects = elements.questionOptions.querySelectorAll("select");
      selects.forEach((s) => {
        if (savedAnswer[s.name]) s.value = savedAnswer[s.name];
      });
      enableContinueButton();
      break;
    case "textarea":
      const textarea = elements.questionOptions.querySelector("textarea");
      if (textarea) textarea.value = savedAnswer;
      enableContinueButton();
      break;
  }
}

// Buttons
function enableContinueButton() {
  elements.continueBtn.disabled = false;
}
function disableContinueButton() {
  elements.continueBtn.disabled = true;
}

function updateNavigationButtons() {
  const isLastStep = appState.currentStep === surveyData.steps.length;
  const isFirstStep = appState.currentStep === 1;

  // Botão voltar
  backBtn.disabled = isFirstStep;

  if (isLastStep) {
    continueBtn.classList.add("hidden");
    finishBtn.classList.remove("hidden");
  } else {
    continueBtn.classList.remove("hidden");
    finishBtn.classList.add("hidden");
  }
}

// Progress ring
function updateProgressRing() {
  const circumference = 2 * Math.PI * 32;
  const progress = (appState.currentStep / appState.totalSteps) * circumference;
  elements.progressRingCircle.style.strokeDashoffset = circumference - progress;
}

// Navigation
function goToPreviousStep() {
  if (appState.currentStep > 1) {
    appState.currentStep--;
    renderStep();
  }
}

function goToNextStep() {
  const step = surveyData.steps[appState.currentStep - 1];
  let currentAnswer;

  switch (step.type) {
    case "emoji_choice":
      const selectedEmoji = elements.questionOptions.querySelector(
        ".emoji-option.selected"
      );
      if (selectedEmoji) currentAnswer = selectedEmoji.dataset.value;
      break;
    case "radio":
      const selectedRadio = elements.questionOptions.querySelector(
        ".radio-option.selected"
      );
      if (selectedRadio) currentAnswer = selectedRadio.dataset.value;
      break;
    case "duration":
      const selects = elements.questionOptions.querySelectorAll("select");
      if (Array.from(selects).every((s) => s.value !== "")) {
        currentAnswer = {};
        selects.forEach((s) => (currentAnswer[s.name] = s.value));
      }
      break;
    case "textarea":
      const textarea = elements.questionOptions.querySelector("textarea");
      if (textarea) currentAnswer = textarea.value;
      break;
  }

  if (currentAnswer !== undefined) saveAnswer(currentAnswer);

  if (appState.currentStep < appState.totalSteps) {
    appState.currentStep++;
    renderStep();
  }
}

// Submit survey
async function submitSurvey() {
  elements.loadingOverlay.classList.add("active");
  const submissionData = {
    ...appState.userInfo,
    answers: appState.answers,
    timestamp: new Date().toISOString(),
  };
  try {
    const response = await axios.post(
      "https://default3f4542cf1cf94670b1c0f8a54eefa3.c3.environment.api.powerplatform.com/powerautomate/automations/direct/workflows/cfe471ba5b28450c98f4141a459409e4/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=qWTB_zmyZ7iKUraCURh_E59O-DEIRRqDBOHU0LItr_o",
      submissionData
    );
    elements.loadingOverlay.classList.remove("active");
    elements.navigationFooter.classList.add("hidden");
    showScreen(response.status === 200 ? "successScreen" : "errorScreen");
  } catch (error) {
    console.error(error);
    elements.loadingOverlay.classList.remove("active");
    elements.navigationFooter.classList.add("hidden");
    showScreen("errorScreen");
  }
}

// Retry
function resetToLastStep() {
  showScreen("surveyContainer");
  elements.navigationFooter.classList.remove("hidden");
  renderStep();
}

// Init
if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", init);
else init();
