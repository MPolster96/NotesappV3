let titels = [];
let notes = [];
let deleteTitels = [];
let deleteNotes = [];
lode();

function render() {
  let newNotes = document.getElementById("newNotes");
  newNotes.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
    const titel = titels[i];
    const note = notes[i];

    newNotes.innerHTML += `
          <div class="note">
              <h3>${titel} </h3><br> 
              <p>${note}</p><br>
              <button class="delete" onclick="inBin(${i})">Löschen</button>
          </div>
          `;
  }
}
function render2() {
  document.getElementById("");
  let binSection = document.getElementById("binSection");
  binSection.innerHTML = "";

  for (let i = 0; i < deleteNotes.length; i++) {
    const titel = deleteTitels[i];
    const note = deleteNotes[i];

    binSection.innerHTML += `
          <div class="note">
              <h3>${titel} </h3><br> 
              <p>${note}</p><br>
              <button class="delete" onclick="deleteperma(${i})"><img src="./assets/img/delete.png" alt="endgültig Löschen"></button>
          </div>
          `;
  }
}

function Post() {
  let titel = document.getElementById("title");
  let note = document.getElementById("note");
  if (note.value != "") {
    titels.push(titel.value);
    notes.push(note.value);
  }

  document.getElementById("title").value = "";
  document.getElementById("note").value = "";

  render();
  save();
}

function inBin(i) {
  deleteTitels = titels.slice(i);
  deleteNotes = notes.slice(i);

  titels.splice(i, 1);
  notes.splice(i, 1);

  save();
  render();
}

function save() {
  let titelAsText = JSON.stringify(titels);
  let noteAsText = JSON.stringify(notes);

  localStorage.setItem("titels", titelAsText);
  localStorage.setItem("notes", noteAsText);

  let deleteTitelAsText = JSON.stringify(deleteTitels);
  let deleteNoteAsText = JSON.stringify(deleteNotes);

  localStorage.setItem("deleteTitels", deleteTitelAsText);
  localStorage.setItem("deleteNotes", deleteNoteAsText);
}

function lode() {
  let titelAsText = localStorage.getItem("titels");
  let noteAsText = localStorage.getItem("notes");

  if (titelAsText && noteAsText) {
    titels = JSON.parse(titelAsText);
    notes = JSON.parse(noteAsText);
  }

  let deleteTitelAsText = localStorage.getItem("deleteTitels");
  let deleteNoteAsText = localStorage.getItem("deleteNotes");

  if (deleteTitelAsText && deleteNoteAsText) {
    deleteTitels = JSON.parse(deleteTitelAsText);
    deleteNotes = JSON.parse(deleteNoteAsText);
  }
}

function deleteperma(i) {
  deleteTitels.splice(i, 1);
  deleteNotes.splice(i, 1);

  render2();
  save();
}
