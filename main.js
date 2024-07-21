const elInput = document.querySelector("#inp");
const elBtn = document.querySelector("#btn");
const elHeroCenter = document.querySelector("#hero-center");
const elHeroCenterOne = document.querySelector("#hero-center-one");
const elHeroBottom = document.querySelector("#hero-bootom");
const elHeroBottomP = document.querySelector("#hero-bootom-p");
const elClear = document.querySelector("#clear");
const elNum = document.querySelector("#num");
const editInput = document.querySelector("#edit-input");
const elSave = document.querySelector("#save");

const toDoList = [];

elBtn.addEventListener("click", function () {
  const newToDoList = {
    dream: elInput.value,
  };
  if (elInput.value !== "") {
    toDoList.push(newToDoList);
    elNum.textContent = toDoList.length;
    newDivCard();
  }
});

function newDivCard() {
  if (elInput.value !== "") {
    const elInputValue = elInput.value;
    const newDiv = document.createElement("div");
    newDiv.className = "hero-center-one";
    newDiv.style.marginTop = "10px";

    newDiv.innerHTML = `
              <strong id = "ozaga">${elInputValue}
               </strong>
             <div class = "d-f">
                <button class="bin">
                 <img id="bin-img" src="./image/bin.png" alt="bin" />
                </button>
                <button
                  type="button"

                  class="btn btn-primary btn1 edit"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                 Edit
               </button>
             </div>
        `;
    elHeroCenter.appendChild(newDiv);
    const deleteButton = newDiv.querySelector(".bin");
    deleteButton.addEventListener("click", function () {
      // Remove from DOM
      newDiv.remove();
      // Remove from toDoList array
      toDoList.pop();
      // Update counter
      elNum.textContent = toDoList.length;
    });

    elInput.value = "";
    elHeroCenter.appendChild(newDiv);
    const editBtn = newDiv.querySelector(".btn1");
    editBtn.addEventListener("click", function () {
      const modal = document.querySelector("#modal");
      modal.value = editBtn.parentElement.parentElement.children[0].textContent;
    });
    const modalEdit = document.querySelector("#modal");
    const saveChange = document.querySelector("#save");

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("edit")) {
        var current = e.target;
        modalEdit.value =
          current.parentElement.parentElement.children[0].textContent;

        saveChange.onclick = () => {
          current.parentElement.parentElement.children[0].textContent =
            modalEdit.value;
        };
      }
    });
  }
}
elClear.addEventListener("click", () => {
  const tasks = document.querySelectorAll(".hero-center-one");
  tasks.forEach((task) => task.remove());

  toDoList.splice(0, toDoList.length);
  elNum.textContent = 0;
});

elInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    console.log(e);
  }
});
