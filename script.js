// script to password generator
function passwordGenerator() {
  let englishChar = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let englishCharSmall = ["s", "t", "u", "v", "w", "x", "y", "z"];
  let specialChar = ["@", "&", "!", "$", "#", "_", "<", "-"];
  let randomNumbers1 = Math.floor(Math.random() * 8);
  let randomNumbers2 = Math.floor(Math.random() * 8);
  let randomNumbers3 = Math.floor(Math.random() * 8);
  let randomNumbers4 = Math.floor(Math.random() * 8);
  let randomNumbers5 = Math.floor(Math.random() * 8);
  let randomNumbers6 = Math.floor(Math.random() * 8);
  let password = `${randomNumbers5}${randomNumbers3}${specialChar[randomNumbers4]}${randomNumbers4}${englishCharSmall[randomNumbers1]}${randomNumbers2}${englishChar[randomNumbers1]}${randomNumbers6}`;
  const showPassword = document.querySelector("h2");
  showPassword.innerHTML = password;
}
