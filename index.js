function createNote() {
 const noteContents = prompt("Enter New Note Here");
 const noteNumber = document.getElementById("note-container").childElementCount+1;
 const newNote = document.createElement("div");
 newNote.className = "note";
 const body = document.createElement("div");
 newNote.innerHTML = noteNumber.toString()+noteContents;

 const noteTitle = document.createElement("div");
 noteTitle.innerHTML = noteNumber.toString()+noteContents;
 noteTitle.className = "noteTitle";

 body.id = "noteBody";
 body.innerHTML = "Testing";
 newNote.appendChild(body);
 newNote.className = "note";
 document.getElementById("note-container").append(newNote);
}
document.addEventListener("DOMContentLoaded", function() {
    console.log("Testing 123");
    getNotes()
});