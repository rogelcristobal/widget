{
	let toggleTitle = false;
	let toggleInBox = false;
	const inputTitle = document.querySelector("#title-input");
	const inBoxInput = document.querySelector("#inBox-input");
	const inBoxBtn = document.querySelector("#inBox-btn");
	const titleBtn = document.querySelector("#title-btn");
	const clr = document.querySelector("#clear-btn");

	titleBtn.addEventListener("click", function () {
		if (!toggleTitle) {
			inputTitle.style.display = "grid";
			titleBtn.style.borderColor = "black";
			titleBtn.style.color = "black";
			toggleTitle = true;
		} else {
			inputTitle.style.display = "none";
			titleBtn.style.borderColor = " rgb(163, 163, 163)";
			titleBtn.style.color = " rgb(163, 163, 163";
			toggleTitle = false;
		}
	});

	inBoxBtn.addEventListener("click", function () {
		if (!toggleInBox) {
			inBoxInput.style.display = "grid";
			inBoxBtn.style.borderColor = "black";
			inBoxBtn.style.color = "black";
			toggleInBox = true;
		} else {
			inBoxInput.style.display = "none";
			inBoxBtn.style.borderColor = " rgb(163, 163, 163)";
			inBoxBtn.style.color = " rgb(163, 163, 163";
			toggleInBox = false;
		}
	});
	clr.addEventListener("click", function () {
		alert(inputTitle.value);
	});
}
