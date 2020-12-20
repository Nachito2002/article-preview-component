const iconShareDisabled = document.getElementsByClassName("footer__icon")[0];
const iconShareActive = document.getElementsByClassName("share__icon-share")[0];
const footerInfo = document.getElementsByClassName("footer")[0];
const footerShare = document.getElementsByClassName("share")[0];

function showShareComponent() {
	footerInfo.style.display = "none";
	footerShare.style.display = "flex";
}

function hideShareComponent() {
	footerShare.style.display = "none";
	footerInfo.style.display = "flex";
}

iconShareDisabled.addEventListener("click", showShareComponent);
iconShareActive.addEventListener("click", hideShareComponent);
