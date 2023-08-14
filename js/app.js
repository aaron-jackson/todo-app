/**
 * Initializes the window.onload event listener and sets up the form and event listeners for adding and removing items.
 *
 * @param {Event} event - The event object triggered by the form submission.
 * @return {undefined} This function does not return a value.
 */
window.onload = () => {
    const form1 = document.querySelector('#addForm');

    let items = document.getElementById("items");
    let submit = document.getElementById("submit");
    let editItem = null;

    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
};

