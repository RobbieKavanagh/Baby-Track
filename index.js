function createNote() {
 const newNote = document.createElement ("div");
 const noteNumber = document.getElementById("note-container").childElementCount+1;
 newNote.innerHTML = noteNumber.toString();
 newNote.className = "note";
 document.getElementById("note-container").append(newNote);
}