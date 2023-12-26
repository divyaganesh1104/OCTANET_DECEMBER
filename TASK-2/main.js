var input_container = document.getElementById("value");
var list_of_value = document.getElementById("list");
var form = document.getElementById("form")
var counter=1;
window.addEventListener("load",() => {
    form.addEventListener("submit" ,(e) =>
    {
        e.preventDefault();
        if(input_container.value==""){
            alert("Please enter a value")
        }
        else{
            let combination_box = document.createElement('div')
            combination_box.classList.add("combination")
            let add_input = document.createElement('div');
            let check_box = document.createElement('input');
            check_box.type ='checkbox'
            check_box.classList.add('align-check-box')
            check_box.value=input_container.value
            check_box.id="item"+counter;
            let edit_input_box = document.createElement('input');
            edit_input_box.classList.add("input-cls")
            edit_input_box.type = 'text'
            combination_box.id="text"+counter;
            edit_input_box.setAttribute("value",input_container.value)
            console.log(edit_input_box)
            edit_input_box.setAttribute("readonly","readonly")
            add_input.appendChild(check_box)
            add_input.appendChild(edit_input_box)
            
           
            let icons = document.createElement("div");
            let edit_icon = document.createElement('div')
            edit_icon.innerHTML="<i class='fa-solid fa-pen-to-square'></i>";
            edit_icon.classList.add("square")
            let delete_icon = document.createElement("div");
            delete_icon.innerHTML="<i class='fa-solid fa-trash'></i>";
            delete_icon.classList.add("trash")
            icons.appendChild(edit_icon)
            icons.appendChild(delete_icon)
            combination_box.appendChild(add_input);
            combination_box.appendChild(icons)
            list_of_value.appendChild(combination_box)
            counter++;
            input_container.value="";
           
            edit_icon.addEventListener("click", ()=>{
                if (edit_icon.className==="square"){
                    edit_input_box.removeAttribute("readonly")
                    edit_icon.innerHTML="<i class='fa-solid fa-floppy-disk'></i>"
                    edit_icon.classList.remove("square")
                    edit_icon.classList.add("save")
                }
                else if (edit_icon.className==="save"){
                    edit_input_box.setAttribute("readonly","readonly")
                    edit_icon.innerHTML="<i class='fa-solid fa-pen-to-square'></i>";
                    edit_icon.classList.remove("save")
                    edit_icon.classList.add("square")
                }
            });
            delete_icon.addEventListener("click",()=> {
                combination_box.remove();
            });
            
        }
    });
});
function deleteSelectedItem(){
    var checkboxes=document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function (checkbox){
        var textInputId = checkbox.id.replace('item','text');
        var textInput = document.getElementById(textInputId)
        if(textInput){
            textInput.remove();
        }
        checkbox.remove();
    })
}
function deleteAllItem() {
    list_of_value.remove();
}