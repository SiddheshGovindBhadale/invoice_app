let url = "http://localhost:3000/api/users";
let thead = document.querySelector("thead")
let no = document.getElementById("no")
let name = document.getElementById("name")
let userForm = document.getElementById("form")


  showData()


// post user data 
userForm.addEventListener("submit" , function(e){
     e.preventDefault()
     let obj = {
         No:no.value,
         name:name.value
     }
     fetch(url , {
           method: 'POST',
           headers:{
                    'Content-Type': 'application/json'
           },
           body: JSON.stringify(obj),
      })
      .then(res => res.json())
      .then(data => {
            no.value = ""
            name.value = ""
            showData()
      })
      .catch(error => {
            console.log(error);
      });
      showData()
})
      
      
// show data in dom
function showData(){
   let tbody = document.querySelector("tbody")
   let Data = "";
   /*get request*/
   fetch(url)
      .then(res => res.json())
      .then(data => {
            data.forEach(function(item,index){
                 Data += `
                          <tr>
                             <td class="tNo">${item.No}</td>
                             <td>
                                <p class="tName">${item.name}</p>
                             </td>
                             <td>
                                 <div data-id=${item._id} class="action">
                                      <a data-bs-toggle="modal" href="#exampleModal" class="status completed" id="${index}" onclick="update(this.id)">edit</a>
                                      <a href="#!" class="status pending" id="${item._id}" onclick="remove(this.id)">delete</a>
                                 </div>
                             </td>
                          </tr>`;
              })
              tbody.innerHTML = Data;
        })
        .catch((e)=>{
               console.log(e)
        })
}



      
// delete function
function remove(id){
     fetch(url + "/" + id, {
           method: 'DELETE'
     })
     .then(() => {showData()})
     .catch(err => {
         console.error(err)
     });
     showData()
     cal()
}