const db = firebase.database();

const dashlaneBody = document.getElementsByClassName("dashlane")[0];
const dashlane404 = document.getElementsByClassName("dashlane-404")[0];
const dashlane404Message = document.getElementsByClassName(
	"dashlane-404--message"
)[0];
const emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");
const emailValue = () => emailInput.value;

const onFieldInput = () => {
	errorMessage.classList.add("_hidden");
};

const validateEmailAddress = email =>
	!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

const submitEmail = email =>
	new Promise((resolve, reject) => {
		resolve(
			db.ref("emails").push({
				"User Email": email
			})
		);
	});

const displayError = () => {
	errorMessage.classList.remove("_hidden");
};

const displaySuccess = () => {
	dashlaneBody.classList.add("_hidden");
	dashlane404.classList.remove("_hidden");
	dashlane404Message.classList.remove("_hidden");
};

const onButtonClick = () => {
	const email = emailValue();
	const invalidEmail = validateEmailAddress(email);

	if (invalidEmail) return displayError();

	submitEmail(email).then(displaySuccess);
};

emailInput.addEventListener("input", onFieldInput);
submitButton.addEventListener("click", onButtonClick);
