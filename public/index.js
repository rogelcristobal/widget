{
	let toggleTitle = false;
	let toggleInBox = false;

	const titleContainer = document.querySelector("#title-container");
	const mpnContainer = document.querySelector("#mpn-container");
	// btns
	const mpnBtn = document.querySelector("#inBox-btn");
	const titleBtn = document.querySelector("#title-btn");
	const clr = document.querySelector("#clear-btn");

	// input field
	const inputTitle = document.querySelector("#title-input");
	const mpn = document.querySelector("#mpn-input");

	// functions
	titleBtn.addEventListener("click", function () {
		if (!toggleTitle) {
			titleContainer.style.display = "grid";
			titleBtn.style.borderColor = "black";
			titleBtn.style.color = "black";
			toggleTitle = true;
		} else {
			titleContainer.style.display = "none";
			titleBtn.style.borderColor = " rgb(163, 163, 163)";
			titleBtn.style.color = " rgb(163, 163, 163";
			toggleTitle = false;
		}
	});

	mpnBtn.addEventListener("click", function () {
		if (!toggleInBox) {
			mpnContainer.style.display = "grid";
			mpnBtn.style.borderColor = "black";
			mpnBtn.style.color = "black";
			toggleInBox = true;
		} else {
			mpnContainer.style.display = "none";
			mpnBtn.style.borderColor = " rgb(163, 163, 163)";
			mpnBtn.style.color = " rgb(163, 163, 163";
			toggleInBox = false;
		}
	});
	clr.addEventListener("click", function () {
		inputTitle.value = "";
		mpn.value = "";
	});
}
