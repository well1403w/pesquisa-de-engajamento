// Emoji image assets
const RostoFeliz = "./assets/rosto-feliz.png";
const RostoNeutro = "./assets/rosto-neutro.png";
const RostoTriste = "./assets/rosto-triste.png";

// Survey data structure
// Survey data structure
const surveyData = {
  steps: [
    {
      number: 6,
      question: "6. Nossos valores são praticados no dia a dia?",
      type: "emoji_choice",
      options: [
        {
          label: "SIM",
          emoji:
            "https://www.pesquisamaster.com.br/assets/rosto-feliz-DOT3AjJG.png",
          color: "green",
        },
        {
          label: "PARCIAL",
          emoji:
            "https://www.pesquisamaster.com.br/assets/rosto-neutro-BW_2vk46.png",
          color: "yellow",
        },
        {
          label: "NÃO",
          emoji:
            "https://www.pesquisamaster.com.br/assets/rosto-triste-DvM_A49u.png",
          color: "red",
        },
      ],
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

function resetPesquisa() {
  console.log("ee");
}

// Retry
function resetSurvey() {
  // Zera estado
  appState.currentStep = 1;
  appState.answers = {};

  // Reset progresso
  updateNavigationButtons();
  updateProgressBar();

  // Troca telas
  document.getElementById("welcomeScreen").classList.add("active");
  document.getElementById("surveyContainer").classList.remove("active");
  document.getElementById("successScreen").classList.remove("active");
  document.getElementById("errorScreen").classList.remove("active");

  // Oculta o footer de navegação
  document.getElementById("navigationFooter").classList.add("hidden");

  // Renderiza novamente o step inicial
  renderStep();
}

// Init
if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", init);
else init();
