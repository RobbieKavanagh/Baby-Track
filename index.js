function createNote() {
 const newNote = prompt("Enter New Note Here");
 const noteNumber = document.getElementById("note-container").childElementCount+1;
 newNote.innerHTML = noteNumber.toString();
 newNote.className = "note";
 document.getElementById("note-container").append(newNote);
}