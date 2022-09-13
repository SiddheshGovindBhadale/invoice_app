let url = "http://localhost:3000/api/invoice";
let tbody = document.querySelector("tbody")
let no = document.getElementById("no")
let name = document.getElementById("name")
let userForm = document.getElementById("form")


  showData()



      
/*// show data in dom
function showData(){
   let tbody = document.querySelector("tbody")
   let Data = "";
   /*get request*/
   /*fetch(url)
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
*/

// product showData function
function showData(){
    /*get request*/
    fetch(url)
       .then(res => res.json())
       .then(data => { 
            let Data = "" ;
            data.forEach(function(userD , index){
                 userD.product.forEach(function(productD,index){
                     let addition = 0 ;
                     let paidVal = 0 ;
                     let remaining = 0
                     
                     addition += Number(productD.price )*Number( productD.quantity)
                     paidVal += Number(productD.paid)
                     remaining = addition - paidVal
                     
                     Data += `
                          <tr>
                             <td class="tNo">${userD.No}</td>
                             <td><p class="tName">${userD.name}</p></td>
                             <td class="tNo">₹${addition}</td>
                             <td class="tNo">₹${paidVal}</td>
                             <td class="tNo">₹${remaining}</td>
                             <td>
                                 <div data-id=${userD._id} class="action">
                                      <a data-bs-toggle="modal" href="#exampleModal" class="status completed" id="${index}" onclick="update(this.id)">edit</a>
                                      <a href="#!" class="status pending" id="${userD._id}" onclick="remove(this.id)">delete</a>
                                 </div>
                             </td>
                          </tr>`;
                 })
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