var input = document.getElementById("input");
var leftPane = document.getElementById("leftPane");
var chats=[];
let chat_fetch = localStorage.getItem("chat");
var isEditing  = false;

if(chat_fetch){
 chats=JSON.parse(chat_fetch);
}

chats.forEach(item=>{
     var newTask = document.createElement("div");
    leftPane.appendChild(newTask);
    newTask.setAttribute("id","newTask")
    var p = document.createElement("p");
    var cross = document.createElement("span");
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", 'checkbox');
    checkBox.style.float="right";
     newTask.appendChild(p);
    p.innerHTML = item.inputs;
    cross.innerHTML="X";
    cross.style.cursor = "default";
    cross.style.float="right";
    cross.style.fontFamily="sans-serif";
    newTask.appendChild(cross);
    newTask.appendChild(checkBox);
   p.style.display="inline-block";
   p.style.outline="none";
   if(item.isChecked === true){
    checkBox.setAttribute("checked","true");
    taskStatus();
   }
    
   
   console.log(item);
   

   checkBox.addEventListener("load",taskStatus);
   checkBox.addEventListener('click',taskStatus);
    
    function taskStatus(){
        if(checkBox.checked){
           p.style.textDecoration = "line-through";
     let index = chats.findIndex(x=>x.inputs===p.innerHTML);
     chats[index].isChecked = true;
    let chat_string=JSON.stringify(chats);
       localStorage.setItem("chat",chat_string);

        }
        else{
           p.style.textDecoration = "initial";
      let index = chats.findIndex(x=>x.inputs===p.innerHTML);
     chats[index].isChecked = false;
          let chat_string=JSON.stringify(chats);
         localStorage.setItem("chat",chat_string);
        }
      
    }

 cross.addEventListener('click', removeDiv);
  function removeDiv(){   

    leftPane.removeChild(newTask);
    let index =  chats.findIndex(x=>x.inputs===p.innerHTML);
    chats.splice(index,1);
      let chat_string=JSON.stringify(chats);
    localStorage.setItem("chat",chat_string);

  }
   p.addEventListener("click",editContent)
    function editContent(){
      input.value = p.innerHTML;
      isEditing = true;
      input.addEventListener('keyup',function(event){
        if(event.keyCode === 13){
     let index = chats.findIndex(x=>x.inputs=== p.innerHTML);
          p.innerHTML = input.value;
      chats[index].inputs = p.innerHTML;
      let chat_string=JSON.stringify(chats);
      localStorage.setItem("chat",chat_string);
         input.value="";
         isEditing = false;
        }
      })
    }
}) 



input.addEventListener('keyup',takeInput);
function takeInput(event){
  if(event.keyCode===13 && !isEditing){
    console.log(event.target.value);
    var value = input.value;
      if(value != ""){
     var newTask = document.createElement("div");
    leftPane.appendChild(newTask);
    newTask.setAttribute("id","newTask")
    var p = document.createElement("p");
    var cross = document.createElement("span");
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", 'checkbox');
    checkBox.style.float="right";
     newTask.appendChild(p); 
     p.innerHTML = value;
    cross.innerHTML="X";
    cross.style.cursor = "default";
    cross.style.float="right";
    cross.style.fontFamily="sans-serif";
    newTask.appendChild(cross);
    newTask.appendChild(checkBox);
    p.style.display="inline-block";
    p.style.outline="none";


 cross.addEventListener('click', removeDiv);
  function removeDiv(){
    leftPane.removeChild(newTask);
       let index = chats.findIndex(x=>x.inputs=== p.innerHTML);
      chats.splice(index,1);
      let chat_string=JSON.stringify(chats);
    localStorage.setItem("chat",chat_string);

  }

   checkBox.addEventListener("load",taskStatus);
   checkBox.addEventListener('click',taskStatus);

    function taskStatus(){
        if(checkBox.checked){
           p.style.textDecoration = "line-through";
         let index = chats.findIndex(x=>x.inputs===p.innerHTML);
         chats[index].isChecked = true;
        let chat_string=JSON.stringify(chats);
       localStorage.setItem("chat",chat_string);

        }
        else{
           p.style.textDecoration = "initial";
         let index = chats.findIndex(x=>x.inputs===p.innerHTML);
         chats[index].isChecked = false;
          let chat_string=JSON.stringify(chats);
         localStorage.setItem("chat",chat_string);
        }
      
    }
  chats.push({
    inputs:input.value,
    isChecked:checkBox.checked});
  var chat_string=JSON.stringify(chats);
  localStorage.setItem("chat",chat_string);

  p.addEventListener("click",editContent);

   function editContent(){
      input.value = p.innerHTML;
      isEditing = true;
      input.addEventListener('keyup',function(event){
        if(event.keyCode === 13){
     let index = chats.findIndex(x=>x.inputs=== p.innerHTML);
          p.innerHTML = input.value;
      chats[index].inputs = p.innerHTML;
      let chat_string=JSON.stringify(chats);
      localStorage.setItem("chat",chat_string);
         input.value="";
         isEditing = false;
        }
      })
    }

    input.value="";

 } }
  

}
