function createNote() {
 const noteContents = prompt("Enter New Note Here");
 const noteNumber = document.getElementById("note-container").childElementCount+1;
 const newNote = document.createElement("div");
 const body = document.createElement("div");
 newNote.innerHTML = noteNumber.toString()+noteContents;
 body.id = "noteBody";
 body.innerHTML = "testing";
 newNote.appendChild(body);
 newNote.className = "note";
 document.getElementById("note-container").append(newNote);
}