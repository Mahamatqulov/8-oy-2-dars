const avatarURL = localStorage.getItem("avatar");
const fullName = localStorage.getItem("fullName");
const email = localStorage.getItem("email");
const githubUsername = localStorage.getItem("githubUsername");

if (avatarURL && avatarURL !== "No file uploaded") {
  const avatarImg = document.getElementById("avatar");
  avatarImg.src = avatarURL;
  avatarImg.alt = "Avatar";
}

document.getElementById("fullName").textContent =
  fullName || "Ism kiritilmagan";
document.getElementById("email").textContent = email || "Email kiritilmagan";
document.getElementById("githubUsername").textContent =
  githubUsername || "GitHub foydalanuvchi nomi kiritilmagan";
