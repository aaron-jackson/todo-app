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


/**
 * Adds an item to the list.
 *
 * @param {Event} e - The event object.
 * @return {boolean} Returns false if the item is not added to the list, otherwise true.
 */
function addItem(e) {
    e.preventDefault();

    if (submit.value != "Submit") {
        console.log("Hello");

        editItem.target.parentNode.childNodes[0].data = document.getElementById("item").value;

        submit.value = "Submit";
        document.getElementById("item").value = "";

        document.getElementById("lblsuccess").innerHTML = "Text edited successfully";
        document.getElementById("lblsucess").style.display = "block";
        
        setTimeout(function() {
            document.getElementById("lblsuccess").style.display = "none";
        }, 2000);
        
        return false;
    }

    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null) 
        return false;
    else
        document.getElementById("item").value = ""; 

    let li = document.createElement("li");
    li.className = "list-group-item";

    let deleteButton = document.createElement("button");
    deleteButton.className = "btn-danger btn btn-sm float-right delete";
    deleteButton.appendChild(document.createTextNode("X"));

    let editButton = document.createElement("button");
    editButton.className = "btn-success btn btn-sm float-right edit";
    editButton.appendChild(document.createTextNode("Edit"));


    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    items.appendChild(li);

    }
    
    /**
     * Removes an item from the list.
     *
     * @param {Event} e - The event object.
     * @return {undefined} This function does not return anything.
     */

    function removeItem(e) {
        e.preventDefault();
        if (e.target.classList.contains("delete")) {
            if (confirm("Are you sure?")) {

                let li = e.target.parentNode;
                items.removeChild(li);

                document.getElementById("lblsuccess").innerHTML = "Text deleted successfully";
                document.getElementById("lblsucess").style.display = "block";

                setTimeout(function() {
                    document.getElementById("lblsuccess").style.display = "none";
                }, 2000);

            }
        }
        if (e.target.classList.contains("edit")) {
            document.getElementById("item").value = e.target.parentNode.childNodes[0].data;
            submit.value = "Save";
            editItem = e;
        }
    }


/**
 * Toggles the button's disabled state in the DOM.
 *
 * @param {Object} ref - The reference to the DOM element.
 * @param {string} btnID - The ID of the button.
 */
    function toggleBttn(ref, btnID) {
        document.getElementById(btnID).disabled = false;
    }

