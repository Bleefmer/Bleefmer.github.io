// Function to get a random answer
function getRandomAnswer() {
    const answers = ["Yes", "No"];
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
}

function GetRandomQuestion() {
    const questions = ["Do you go to the cinema ?", "Do you go to the city?","Do you go to the park"];
    const randomIndexQ = Math.floor(Math.random() * questions.length);
    return questions[randomIndexQ];
}

// Create and style the container div
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Create and style the question heading (h1)
const questionHeading = document.createElement("h1");
questionHeading.textContent = "Click here to get a random question";
questionHeading.classList.add("question-heading");
container.appendChild(questionHeading);

// Create and style the image container
const imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");
container.appendChild(imageContainer);

// Create and style the image
const imgElement = document.createElement("img");
imgElement.src = "magicball.jpg"; // Replace with the URL of your image
imgElement.alt = "Answer";
imgElement.classList.add("answer-image");
imageContainer.appendChild(imgElement);

// Create and style the text over the image
const textOverImage = document.createElement("div");
textOverImage.textContent = "Yes";
textOverImage.classList.add("text-over-image");
imageContainer.appendChild(textOverImage);

// Event listener for question click
questionHeading.addEventListener("click", function () {
    const randomQuestion = GetRandomQuestion();
    questionHeading.textContent = randomQuestion;
});

// Event listener for image click
imgElement.addEventListener("click", function () {
    const randomAnswer = getRandomAnswer();
    textOverImage.textContent = randomAnswer; // Update text over the image
    // Highlight the text in blue
    textOverImage.style.color = "blue";
});
