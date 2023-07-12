function createNote() {
    const titleInput = prompt("Enter Note Title");
    const bodyInput = prompt("Enter New Note Here");

    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const titleDiv = document.createElement("div");
    titleDiv.className = "noteTitle";
    titleDiv.innerHTML = titleInput;

    const bodyDiv = document.createElement("div");
    bodyDiv.className = "noteBody";
    bodyDiv.innerHTML = bodyInput;

    noteDiv.appendChild(titleDiv);
    noteDiv.appendChild(bodyDiv);

    document.getElementById("note-container").append(noteDiv);
}

function getNotes() {
 allNotes.array.array.forEach((note) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const titleDiv = document.createElement("div");
    titleDiv.className = "noteTitle";
    titleDiv.innerHTML = note.noteTitle;

    const bodyDiv = document.createElement("div");
    bodyDiv.className = "noteBody";
    bodyDiv.innerHTML = note.noteBody;

    const dateDiv = document.createElement("div");
    dateDiv.className = "noteDate";
    dateDiv.innerHTML = note.noteBody;

    document.getElementById("note-container").append(noteDiv);

 });
} 