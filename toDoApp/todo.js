// User pressed enter
// If there is any text inside the input field, add that text to the todo list


document.body.onkeyup = function(e){
    if (e.keyCode === 13){
    var value = document.getElementById('input').value;
    if (value) addItemTodo(value);
        
      
        
    }
    
    
   
};

// Trash and Done icons in SVG format

var trashSVG = '<svg version="1.1" id="svg-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rec class="noFill" width="30" height="30"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g> </svg>';

var doneSVG = '<svg version="1.1" id="svg-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="30" height="30"/><g><path class="fill-2" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';



function removeItem(e){
    
    var item = this.parentNode.parentNode; //li
    var parent = item.parentNode; // ul
    parent.removeChild(item);
    
}

// When user clicks on Done icon the list text gets crossed off

function crossOffItem(e){
    
    var li = this.parentNode.parentNode;
    li.style.textDecoration = " line-through";
    
}


// Adds new item to the todo list

function addItemTodo(text) {
    
    var list = document.getElementById('list'); // ul
    
    var item = document.createElement('li'); // li
    item.innerText = text;
    
    var buttons = document.createElement('div'); // div buttons
    buttons.classList.add('buttons');
    
    var trash = document.createElement('button'); // btn svg-1
    trash.classList.add('svg-1');
    trash.innerHTML = trashSVG;
    
    // Add click event for removing item
    
    trash.addEventListener('click', removeItem); // btn svg-1
    
    var done = document.createElement('button');
    done.classList.add('svg-2');
    done.innerHTML = doneSVG;
    
    done.addEventListener('click', crossOffItem);
    
    buttons.appendChild(trash);
    buttons.appendChild(done);
    item.appendChild(buttons);
    list.appendChild(item);
    
    document.getElementById('input').value = '';
  
    
    
}

// When user clicks the refresh button the ul gets empty


function emptyTodo() {
    
    var e = document.querySelector("ul");
    
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
    
    
}



const refreshBtn = document.getElementById("refresh-btn");

refreshBtn.addEventListener('click', emptyTodo);


// Display the date

const dateElement = document.getElementById("date");

let options = {weekday: 'long', month: 'short', day: 'numeric'};

let today = new Date();

dateElement.innerHTML = today.toLocaleDateString("eng-US", options);








