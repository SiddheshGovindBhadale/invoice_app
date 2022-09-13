// update 
let patchBtn = document.getElementById("patchBtn")
let updateNo = document.getElementById("updateNo")
let updateName = document.getElementById("updateName")

function update(index){
   let text = document.getElementById(`${index}`)
   let parent = text.parentElement.parentElement.parentElement
   let noVal = parent.querySelector(".tNo")
   let nameVal = parent.querySelector(".tName")
   let i = 0
   
   let obj = {
  
   }
   
   updateNo.value = noVal.textContent
   updateName.value = nameVal.textContent
   
   patchBtn.addEventListener("click" , function(e){
      e.preventDefault()
      
      
      fetch(url)
        .then(res => res.json())
        .then(data => {
              i = data[index]._id
              
              obj = {
                 No:updateNo.value,
                 name:updateName.value
              }
              console.log(obj)
              
              console.log(i)
              fetch(`${url}/${i}` , {
                   method: 'PATCH',
                   headers:{
                           'Content-Type': 'application/json'
                   },
                   body: JSON.stringify(
                         obj
                   ),
              })
              .then(res => res.json())
              .then(data => {
                    showData()
                    window.location.reload();
               })
              .catch(error => {
                   console.log(error);
              });
              
        })
        .catch((e)=>{
              console.log(e)
        })
   })
}