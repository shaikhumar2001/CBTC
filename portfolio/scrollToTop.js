// const scrollTop = () => {
//     headerSection.scrollIntoView({ behavior: "smooth" });
// };

// const scrollToAbout = () => {
//     aboutSection.scrollIntoView({ behavior: "smooth" });
// };

// scrollElement.addEventListener("click", scrollToAbout);
// scrollElement.addEventListener("click", scrollTop);

// window.addEventListener("scroll", () => {
//     const scrollPosition = window.scrollY;
//     const heroHeight = heroSection.offsetHeight;

//     const scrollFloatingButton = document.getElementById(
//         "scrollFloatingButton"
//     );

//     if (scrollPosition < heroHeight) {
//         scrollFloatingButton.classList.remove("fa-arrow-up");
//         scrollFloatingButton.classList.add("fa-arrow-down");
//         scrollElement.classList.add("arrow-down-translate");
//         scrollElement.addEventListener("click", scrollToAbout);
//     } else {
//         scrollFloatingButton.classList.remove("fa-arrow-down");
//         scrollElement.classList.remove("arrow-down-translate");

//         scrollFloatingButton.classList.add("fa-arrow-up");
//         scrollElement.addEventListener("click", scrollTop);
//     }
// });
