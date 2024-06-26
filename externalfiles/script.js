let addButton = document.querySelector('#addItem');
const taskList = document.getElementById('task');
const addItemButton = document.getElementById('addItem');
const inputField = document.getElementById('input');
let storedList = [];
let closeBtn = document.getElementById('close')
let openBtn = document.getElementById('open')
let saveBtn = document.getElementById('save')
let section1 = document.querySelector('aside')

// Add event listener to the add item button
addItemButton.addEventListener('click', (e) => {
    e.preventDefault();
    const listItem = inputField.value.trim();
    if (listItem) {
        storedList.push(listItem);
        renderList();
        inputField.value = '';
    }
});

// renders my  list
function renderList() {
    taskList.innerHTML = '';
    storedList.forEach((item) => {
        taskList.innerHTML +=`
            <li>
                <input type="checkbox">
                <span class="liDivider">${item}</span>
            </li>
        `;
    });
}

taskList.addEventListener('click', (e)=>{
    let targPrac = e.target.tagName
    if(targPrac == 'LI'||targPrac == 'SPAN'){
        let index = storedList.indexOf(e.target.innerText)
        storedList.splice(index,1)
        renderList()
    }else if(targPrac == "INPUT"){
        let span = e.target.nextElementSibling
        if (e.target.checked) {
            span.classList.add('strikethrough')
            console.log(span.classList)
            
        }else{
            span.classList.remove('strikethrough')
            console.log(e.target.checked)
        }
    }
})

// mobile functions
closeBtn.addEventListener('click', ()=>{
    section1.style.display="none"
    openBtn.style.display="block"
})
openBtn.addEventListener('click', ()=>{
    section1.style.display="block"
    openBtn.style.display="none"
})






















