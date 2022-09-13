let invoiceUrl = "http://localhost:3000/api/invoice"
let userUrl = "http://localhost:3000/api/users";
let onUser = document.getElementById("Users")
let onTotal = document.getElementById("Total")
let onPaid = document.getElementById("Paid")
let onRemainig = document.getElementById("Remaining")
cal()

function cal(){
   // users total
   fetch(userUrl)
   .then(res => res.json())
   .then(data => {
         onUser.innerHTML = data.length
    })
   .catch((e)=>{
         console.log(e)
   })
   
   // invoice total
   fetch(invoiceUrl)
       .then(res => res.json())
       .then(data => {
            let dTotal = 0
            let dPaid= 0
            let dRemaining = 0
            
            data.forEach(function(item,index){
               if(Array.isArray(item.product)){
                   item.product.forEach(function(elem){
                        dTotal  += Number(elem.price)*Number(elem.quantity)
                        dPaid += Number(elem.paid)
                        dRemaining = dTotal - dPaid
                       // console.log(elem.paid)
                   })
               }
            })
            onTotal.innerHTML = "₹"+dTotal
            onPaid.innerHTML = "₹"+dPaid
            onRemainig.innerHTML = "₹"+dRemaining
       })
       .catch((e)=>{
       console.log(e)
       })
}