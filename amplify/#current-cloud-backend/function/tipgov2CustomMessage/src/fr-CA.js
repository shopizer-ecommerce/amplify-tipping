async function signUpMessage(event, generateEmailBody) {
	event.response = {
		emailSubject: `Tip&Go: Code de vérification`,
		emailMessage: generateEmailBody(`
      <p>Bienvenue à Tip&Go</p>
      <p>Votre couriel enregistré est <strong>${event.request.userAttributes.email}</strong> votre code de vérification est <strong>${event.request.codeParameter}</strong></p>
      <br />
      <p>Entrez votre code dans le champs requis à cet effet ou <a href="https://app.tip-go.ca/confirmer-enregistrement"?lang=${event.request.userAttributes.locale}&email=${event.request.userAttributes.email}&code=${event.request.codeParameter}">cliquer ce lien pour activer automatiquement votre compte</a>.</p>
      `),
	};
	return event;
}

async function forgotPassword(event, generateEmailBody) {
	event.response = {
		emailSubject: `Tip&Go: Retrouvez votre mot de passe`,
		emailMessage: generateEmailBody(`
      <p>Votre code de récupération de mot de passe est: ${event.request.codeParameter}</p>
      <br />
      <p>Entrez votre code dans le champs requis à cet effet.</p>
      `),
	};
	return event;
}

async function updateUserAttributeMessage(event, generateEmailBody) {
	event.response = {
		emailSubject: `Tip&Go: Mise à jour du profil`,
		emailMessage: generateEmailBody(
			`<p>Votre profile a été mis à jour, veuillez utiliser ce code: ${event.request.codeParameter}</p>`
		),
	};
	return event;
}

async function verifyUserAttribute(event, generateEmailBody) {
	event.response = {
		emailSubject: `Tip&Go: Mettre à jour votre courriel`,
		emailMessage: generateEmailBody(`<p>Pour mettre à jour votre couriel utilisez ce code: ${event.request.codeParameter}</p>`),
	};
	return event;
}

module.exports = {
	signUpMessage,
	forgotPassword,
	updateUserAttributeMessage,
	verifyUserAttribute,
};
