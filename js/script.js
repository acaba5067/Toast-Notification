let toastBox=document.getElementById("toastBox")
let sucessMsg='<i class="fas fa-check-circle"></i> successfully submitted'
let errorMsg='<i class="fas fa-times-circle"></i> please fix the error'
let invalidMsg='<i class="fas fa-exclamation-circle"></i>Invalid input,check again'
function showToast(msg){
   let toast= document.createElement("div");
   toast.classList.add("toast");
   toast.innerHTML=msg;
   toastBox.appendChild(toast);
   if(msg.includes('error')){
      toast.classList.add('error')
   }
   if(msg.includes('Invalid')){
    toast.classList.add('invalid')
 }

 setTimeout(()=>{
    toast.remove()
 },6000)
}