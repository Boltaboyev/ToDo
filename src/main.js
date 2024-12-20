const form = document.querySelector(".form")
const input = document.querySelector(".addTextInput")
const listContainer = document.querySelector(".list_container")
const error = document.querySelector(".error")
const inputForEdit = document.querySelector(".inputForEdit")
const time = document.querySelector(".time")
const currentDate = new Date()

form.addEventListener("submit", (e) => {
    e.preventDefault()
    addItem(input)
})

function addItem(inputElement) {
    if (inputElement.value.trim() === "") {
        error.classList.remove("hidden")
        error.classList.add("block")
    } else {
        const newDiv = document.createElement("div")
        newDiv.classList.add("list")
        newDiv.innerHTML = `
            <p>${inputElement.value}</p>
            <div class="list_btn">
                <button class="edit">
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button class="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </button>

                
                <div class="time">
                    ${
                        currentDate.getHours() + ":" + (currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes())
                    }
                </div>
            </div>
        `
        listContainer.append(newDiv)
        error.classList.add("hidden")
        error.classList.remove("block")
        inputElement.value = ""
    }
}

listContainer.addEventListener("click", (e) => {
    const list = e.target.closest(".list")

    if (e.target.closest(".delete")) {
        const sure = confirm("Are you sure?")
        sure ? list.remove() : list
    }

    if (e.target.closest(".edit")) {
        newText = list.children[0]
        editInput.value = newText.textContent
        inputForEdit.classList.remove("hidden")
        inputForEdit.classList.add("flex")
    }
})

const editForm = document.querySelector(".editForm")
const editInput = document.querySelector(".editInput")

editForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (editInput.value.trim() === "") {
        editInput.style.borderColor = "red"
        editForm.classList.toggle("shake")
    } else {
        editInput.style.borderColor = "#fff"
        editForm.classList.remove("shake")
        newText.textContent = editInput.value.trim()
        inputForEdit.classList.add("hidden")
        inputForEdit.classList.remove("flex")
    }
})

const xMark = document.querySelector(".fa-circle-xmark")
xMark.addEventListener("click", () => {
    inputForEdit.classList.add("hidden")
    inputForEdit.classList.remove("flex")
})
