const inputBox = document.querySelector("#input-box");
const ListContainer = document.querySelector("#list-container");
const EnterButton = document.querySelector(".Enter-button");

// defining addTask func.

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something to add");
    }
    else{
        // inputBox ka data dedo li ko aut ListContainer me chipka do
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);

        //create deleting icon
        const span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // input box khali kardo
    inputBox.value = "";
    saveData();
}

EnterButton.addEventListener('click', addTask);
document.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        if(inputBox.value === ""){
            alert("You must write something to add");
        }
        else{
            // inputBox ka data dedo li ko aut ListContainer me chipka do
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            ListContainer.appendChild(li);
    
            //create deleting icon
            const span = document.createElement('span');
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
    
        // input box khali kardo
        inputBox.value = "";
        saveData();
    }
});

ListContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);



//functon to save data

function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}

//functiom to show saved data when we refresh page

function showItems(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showItems();