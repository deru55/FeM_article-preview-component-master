const cardUser = document.getElementById("card-user");
const shareBtn = document.getElementById("share-btn");
const socialLinks = document.getElementById("social-links");

shareBtn.addEventListener("click", () => {
  cardUser.classList.toggle("active");
  shareBtn.classList.toggle("active");
  socialLinks.classList.toggle("active");
});
