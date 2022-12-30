      const captcha = document.querySelector(".captcha"),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-text");

//تخزين جميع أحرف الكابتشا في مجموعة
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z'];
function getCaptcha(){
  for (let i = 0; i < 6; i++) { //الحصول على 6 أحرف عشوائية من المصفوفة
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; //تمرير 6 أحرف عشوائية داخل نص الكابتشاالداخلي
  }
}
getCaptcha(); //اظهار الكابتشا عند فتح الصفحة


submit.addEventListener("click", e =>{
  e.preventDefault(); //منع الزر من سلوكه الافتراضي
  statusTxt.style.display = "block";
  //إضافة مسافة بعد إدخال كل حرف للمستخدم القيم لأنني أضفت مسافات أثناء إنشاء رمز التحقق
  });

function removeContent(){
 inputField.value = "";
 captcha.innerText = "";
 statusTxt.style.display = "none";
}

//  لجعل اول حرف من اسم المستخدم حرف  كبير حتى لو تم ادخالة صغير سوف يتحول الى حرف كبير تلقائيا لكي يحقق الشرط
let UpperCase=document.getElementById("id")
//عند الخروج من الحقل يتحول اول محرف الى حرف كبير
UpperCase.onblur=function(){
  UpperCase.value=UpperCase.value.charAt(0).toUpperCase() + UpperCase.value.slice(1)
}
//اسناد متغير للزر فعند الضغط على الزر تتم تنفذ الاكواد
document.getElementById('submit').onclick=function(){ 
// اسناد متغيرات لقيم حقول الادخال
    let id=document.getElementById('id').value
    let name=document.getElementById('name').value 
    let phone=document.getElementById('phone').value
    let date=document.getElementById('date').value
    let prog=document.getElementById('prog').value

    

    let uservalid=/[A-za-z]_\d/g  //لتحقق من شرط اسم المستخدم
    let namevalid=/^[\u0621-\u064A\s]+$/g //لتحقيق شرط كتابة الاسم ففط باللغة العربية
    let phonevalid=/\+963\d{9}$|\+\d{10}$/g // اذا كان +963 يتبعة 9 ارقام ليتوافق مع شبكة ام تي ان اذا كان غير نداء دولي سوري فيتبعة 7 ارقام بعدزائد ثم ثلاث ارقام ندائ ددء دولي 
    let validResultU=uservalid.test(id) //عمل تيست للشرط ان كان محقق يرجع قيمة صحيحة
    let validResultN=namevalid.test(name) //عمل تيست للشرط ان كان محقق يرجع قيمة صحيحة
    let validResultP=phonevalid.test(phone)//عمل تيست للشرط ان كان محقق يرجع قيمة صحيحة
    let inputVal = inputField.value.split('').join(' ');//عمل تيست ان كان ادخال الكابتشا صحيح



    if(validResultU===false||validResultN===false||validResultP===false||inputVal != captcha.innerText){//بعد تيست ان كان القيم المدخلة خاطئة يظهر رسالة اليرت
        alert("Format Don't Match")
    }
    else{ //بعد التيست ان كانت الفورمات صحيحة ينفئ الكوتد التالية
      let table = document.getElementById("table"); //اسناد للجدول متغير
              let row = document.createElement("tr");//انشاء سطر 
              let a = document.createElement("td");// تعريف متغير وانشاء خلية
              let b = document.createElement("td");//تعريف متغير وانشاء خلية
              let c = document.createElement("td");//تعريف متغير وانشاء خلية
              let d = document.createElement("td");//تعريف متغير وانشاء خلية
              a.innerHTML = (table.rows.length); //الخلية تحوي قيمة عدد الاسطر في الجدول
              b.innerHTML = document.getElementById('id').value; //الخلية تحوي قيمة الحقل اسم المستخدم
              c.innerHTML = document.getElementById('name').value;//الخلية تحوي قيمة اسم الطالب
              d.innerHTML = document.getElementById('prog').value;//الخلية تحوي قيمة اسم البرنامج
              row.appendChild(d); //لاظهار الخلية الاولى في السطر
              row.appendChild(c);//لاظهار الخلية الثانية في سطر 
              row.appendChild(b);//لاظهار الخلية الثالثة في السطر
              row.appendChild(a);//لاظهار الخلية الرايعة في السطر
              table.appendChild(row);//لاظهار السطر الذي يحوي الخلايا السابقة في الجدول
              b.style.color="blue"
    }
      
      }


let filtering =document.getElementById('filtering')//تعريف متغير 
filtering.onchange =function(){  
  let selected = document.getElementById('filtering').value; //تعريف متغير واسناد له قيمة 
  let table, rows; //تعريف متغيرين
      table = document.getElementById('table'); //اسناد قيمة للمتغير الاول
      rows = table.rows; //اسناد قيمة للمتغير الثاني

  for (i = 1; i < (rows.length); i++) { //انشاء حلقة فةر التي سوف تمر علي جميع السطور في الجدول
          rows[i].style.display = ''; // سوف تكون  السطور التي تحوي قيم ظاهرة
  }

  if(selected !== 'All'){// التحقق من الشرط اذا كانت قيمة المتغير لا تساوي قيمة 
      for (i = 1; i < (rows.length); i++) {//انشاء حلقة فور وسوف تمر على الاسطر
          x = rows[i].getElementsByTagName("td")[0]; //سوف تتم الفتلرة من خلال الخلية الاولى وهي البرنامج
          if (x.innerHTML !== selected) { //ان كان قيمة الخلية ليست نفي قيمة سيلكت
              rows[i].style.display = 'none'; //سوف يتم اخفاء الاسطر التى قيمة الخلية الاولى غير مساوية لقيمة سيليكت
          }
      }
  }

}
let convert =document.getElementById('but'); //تعريف متغير واسناد قيمة له
convert.onclick=function(){ //عند ضغط سوف تنفذ الفانكشن
  let table = document.getElementById('table');  //تعريف متغير و اسناد له قيمة
  let header = []; //تعريف مصفوفة واعطاء قيمة له
  let rows = [];// تعريف مصفوفة واعطاء قيمة له

  for (var i = 0; i < table.rows[0].cells.length; i++) { //انشاء جلقة فور وسوف تمر على سطر الاول في الجدول وخلاياه
      header.push(table.rows[0].cells[i].innerHTML);  //ادخال قيم الخلايا في لمصفوقة
  }

  for (var i = 1; i < table.rows.length; i++) { //انشاء حلقة فور سوف تمر عل السطور
      var row = {}; //تعريف متغير
      for (var j = 0; j < table.rows[i].cells.length; j++) { //انشاء حلقة فور تمر على خلايا جميع الاسطر
          row[header[j]] = table.rows[i].cells[j].innerHTML; // اعطاء قيم خلايا لمفصفوة
      }
      rows.push(row); //ادخال فيم بل مصفوفة 
  }

  document.getElementById('jeson').innerHTML= JSON.stringify(rows);
}