// console.log("hello js");


//if user adds note save it to locakstorage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (addTxt.value != '') {
        notesObj.push(addTxt.value);
    }
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    shownotes();
});
shownotes();
//function to show elements from local storage
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        if (element != '') {
            html += `<div class="notecard my-2 mx-2 card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deletenotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
        }
    });
    let noteelem = document.getElementById('notes');
    // console.log(html);
    if (notesObj.length != 0) {
        noteelem.innerHTML = html;
    }
    else {
        noteelem.innerHTML = `<div>Nothing to show "Add Note".</div>`
    }
}
//function to delete a note

function deletenotes(index) {
    let ele = document.getElementById(index);

    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        notesObj = Array.from(notesObj);
    }

    notesObj.splice(index, 1);
    // console.log(notesObj);
    if (notesObj.length != 0) {
        localStorage.setItem('notes', JSON.stringify(notesObj));
    }
    else {
        localStorage.clear();
    }
    shownotes();


}
let searchTxt=document.getElementById('searchTxt');
searchTxt.addEventListener('input',function(){
    let inputval=searchTxt.value.toLowerCase();
    // console.log(inputval);
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
        let cardTxt =element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display="block";

        }
        else{
            element.style.display="none";

        }
        // console.log(cardTxt);
    });
})