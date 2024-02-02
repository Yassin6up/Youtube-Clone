const hideBtn = document.getElementById("hide");
const div1 = document.getElementById("cont1")
const div2 = document.getElementById("cont2")

hideBtn.onclick = ()=>{
   
    div1.classList.toggle('hide')
    div2.classList.toggle('hide')
    if(div1.className.includes("hide") && div2.className.includes("hide") ){
        hideBtn.innerHTML = "المزيد..."
    }else{
        hideBtn.innerHTML = "عرض محتوى أقل"
    }
}




// 