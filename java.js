//التحقق من اسم المستخدم
document.getElementById("add").onsubmit=function(){
    let userName=document.getElementById('user').value
    let uservalid=/[A-za-z]_\d/g
    let validResult=uservalid.test(userName)
    if(validResult===false){
        return false
    }
    return true
}

//التحقق ان الاسم بالغغة العربية
document.getElementById("add").onsubmit=function(){
    let name=document.getElementById('name').value
    let namevalid=/^[\u0621-\u064A\s]+$/g
    let validResult=namevalid.test(name)
    if(validResult===false){
        return false
    }
    return true
}
// التحقق من رقم
document.getElementById("add").onsubmit=function(){
    let phone=document.getElementById('phone').value
    let phonevalid=/(\+963)\d{7}$/g
    let validResult=phonevalid.test(phone)
    if(validResult===false){
        return false
    }
    return true
}
let a=document.querySelector('.user')
a.onblur=function(){
    a.value.charAt(0)=a.value.charAt(0).toUpperCase()
}
