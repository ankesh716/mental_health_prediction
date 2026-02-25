// Handle form submission
const form = document.getElementById("assessmentForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = new FormData(form);

        const stress = parseInt(data.get("stress"));
        const sleep = parseInt(data.get("sleep"));
        const motivation = parseInt(data.get("motivation"));
        const anxiety = parseInt(data.get("anxiety"));

        const score = stress + sleep + motivation + anxiety;

        window.location.href = `result.html?score=${score}`;
    });
}


// Handle result page
const params = new URLSearchParams(window.location.search);
const score = parseInt(params.get("score"));

if (score) {

    const statusText = document.getElementById("statusText");
    const descriptionText = document.getElementById("descriptionText");

    // Score Range: 4 – 40

    if (score <= 12) {
        statusText.textContent = "Healthy Mental State";
        descriptionText.textContent =
        "Your stress indicators are within a balanced range. Maintain healthy routines.";
    }
    else if (score <= 25) {
        statusText.textContent = "Moderate Stress Level";
        descriptionText.textContent =
        "You show moderate stress patterns. Consider rest and stress management practices.";
    }
    else {
        statusText.textContent = "High Stress Level";
        descriptionText.textContent =
        "Your responses indicate high stress. Professional guidance or lifestyle adjustments are recommended.";
    }
}