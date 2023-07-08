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

}