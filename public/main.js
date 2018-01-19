const db = firebase.database();

const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");

console.log({ emailInput });
console.log({ passwordInput });
console.log({ submitButton });

const emailValue = () => emailInput.value;

const onEmailInput = () => {
	console.log("email");
};

const checkForPassword = () => !(passwordInput.value.length > 0);

const submitEmail = () =>
	new Promise((resolve, reject) => {
		resolve(console.log("emailSubmitted"));
	});

const displayError = () => {
	errorMessage.classList.remove("_hidden");
};

const displaySuccess = () => {
	console.log("success");
	errorMessage.classList.add("_hidden");
};

const onButtonClick = () => {
	const email = emailValue();
	const empty = checkForPassword();

	if (empty) return displayError();

	submitEmail(email).then(displaySuccess);

	console.log("submit", email);
};

emailInput.addEventListener("input", onEmailInput);
submitButton.addEventListener("click", onButtonClick);
