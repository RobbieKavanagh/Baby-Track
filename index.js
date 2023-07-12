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

    const dateDiv = document.createElement("div");
    dateDiv.className = "noteDate";

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let currentDate = `${day} ${month} ${year}`;

    dateDiv.innerHTML = currentDate;

    noteDiv.appendChild(titleDiv);
    noteDiv.appendChild(bodyDiv);
    noteDiv.appendChild(dateDiv);

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


    document.getElementById("note-container").append(noteDiv);
    

 });
} 