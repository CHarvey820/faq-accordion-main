
const accordionTitles = document.querySelectorAll(".accordionTitle");

/**
 * Adds a click event to each accordionTitle to toggle the "is-open" class, which controls the accordion visibility along with toggling the fold icons
 * @param {any} ".accordionTitle"
 * @returns {any}
 */
Array.from(accordionTitles).forEach((accordionTitle) => {
    accordionTitle.addEventListener("click", () => {
        accordionTitle.classList.toggle("is-open");
        accordionIconPlus = accordionTitle.querySelector(".foldIconPlus");
        accordionIconMinus = accordionTitle.querySelector(".foldIconMinus");
        accordionIconPlus.classList.toggle("iconHidden");
        accordionIconMinus.classList.toggle("iconHidden");
    });
});