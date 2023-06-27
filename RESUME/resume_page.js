// ADD NEW SKILL BUTTON

// let add_skill=document.getElementById("btn");
// let skill_section=document.getElementsByClassName("wrap");

// add_skill.addEventListener("click",function() {
//     let div_copy=document.getElementById("main-skill");
//     const new_skill = document.createElement('p');
//     new_skill.innerHTML = div_copy.innerHTML;
//     new_skill.classList.add('block');
//     skill_section[0].appendChild(new_skill);
// });



{/* <div class="menu_item menu_link"> 
<div class="color_picker" id="color_selected" style="background: rgb(7, 115, 232);"></div>
    <span class="menu_label menos4">COLOR</span> 
    <div class="submenu"> 
      <div id="picker1" class="color_picker picker_activo" style="background:#0773e8;" onclick="javascript:cambiarcolor('#0773e8','1') ;"></div>
      <div id="picker2" class="color_picker" style="background:#b92a78" onclick="javascript:cambiarcolor('#b92a78','2');"></div><div id="picker3" class="color_picker" style="background:#f3840b" onclick="javascript:cambiarcolor('#f3840b','3');"></div>
      <div id="picker4" class="color_picker" style="background:#2ab993" onclick="javascript:cambiarcolor('#2ab993','4');"></div><div id="picker5" class="color_picker" style="background:#252525" onclick="javascript:cambiarcolor('#000000','5');"></div>
      <div class="color_picker_custom color_picker"> <input id="selectorcolor" type="color" value="#006ce7" onchange="javascript:cambiarcolor($(this).val(),'0');"></div>
    </div>
</div> } */}

// ADD Button
let add_btns=document.querySelectorAll(".add")
let components=document.querySelectorAll(".wrap")

add_btns.forEach((btn,index)=>{
  btn.addEventListener("click",()=>{
    switch(index){
      case 0:
        technicalSkills()
        break;
      case 1:
        softSkill()
        break;
      case 2:
        hobbies()
        break;
      case 3:
        languages()
        break;
      case 4:
        certifications()
        break;
      case 5:
        workExperience()
        break;
      case 6:
        projects()
        break;
      case 7:
        education()
        break;
    }

  })
})

function technicalSkills(){
  let n = document.createElement("p")
  n.textContent=`Enter Skill`
  n.setAttribute("class","block")
  n.setAttribute("contenteditable","true")
  components[0].appendChild(n)
}
function softSkill(){
  let n = document.createElement("p")
  n.textContent=`Enter Skill`
  n.setAttribute("class","block")
  n.setAttribute("contenteditable","true")
  components[1].appendChild(n)
}
function hobbies(){
  let n = document.createElement("p")
  n.textContent=`Enter Skill`
  n.setAttribute("class","block")
  n.setAttribute("contenteditable","true")
  components[2].appendChild(n)
}
function languages(){
  let n = document.createElement("p")
  n.textContent=`Enter Skill`
  n.setAttribute("class","block")
  n.setAttribute("contenteditable","true")
  components[3].appendChild(n)
}
function certifications(){
  let n = document.createElement("p")
  n.textContent=`Enter Skill`
  n.setAttribute("class","block")
  n.setAttribute("contenteditable","true")
  components[4].appendChild(n)
}
function workExperience(){
  let n = document.createElement("li")
  n.innerHTML=`
  <div class="experience-block">
   <p class="title" contenteditable="true" placeholder="Position"></p>
   <p class="block right" contenteditable="true" placeholder="From-Until"></p>
     <div class="experience">
      <p class="block" contenteditable="true" placeholder="EMPLOYER"></p>
     </div>
     <p class="content exp" contenteditable="true" placeholder="Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant">INFO</p>
  </div>`
  document.querySelector("#work-experience ul").appendChild(n)
}
function projects(){
  let n = document.createElement("li")
  n.innerHTML=`
  <div class="experience-block">
    <p class="title" contenteditable="true" placeholder="PROJECT NAME"></p>
    <p class="block right" contenteditable="true" placeholder="From-Until"></p>
        <div class="experience">
        <p class="block" contenteditable="true" placeholder="TECH USED"></p>
        </div>
        <p class="content exp" contenteditable="true" placeholder="Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant">INFO</p>
  </div>`
  document.querySelector("#project ul").appendChild(n)
}
function education(){
  let n = document.createElement("li")
  n.innerHTML=`
  <div class="experience-block">
    <p class="title" contenteditable="true" placeholder="Position"></p>
    <p class="block right" contenteditable="true" placeholder="From-Until"></p>
      <div class="experience">
        <p class="block" contenteditable="true" placeholder="EMPLOYER"></p>
      </div>
      <p class="content exp" contenteditable="true" placeholder="Enter your work experience description. Provide details that showcase how you were able to contribute and add value. Focus on responsibilities that are relevant to the job you are applying for. If you need help writing your work experience description, you can use the AI Writing Assistant">INFO</p>
  </div> `
  document.querySelector("#education ul").appendChild(n)
}

// REMOVE Button
let remove_btns=document.querySelectorAll(".remove")
// let components=document.querySelectorAll(".wrap")
let indexes=document.querySelectorAll(".index")

remove_btns.forEach((btn,index)=>{
  btn.addEventListener("click",()=>{
    switch(index){
      case 0:
        removetechnicalSkills()
        break;
      case 1:
        removesoftSkill()
        break;
      case 2:
        removehobbies()
        break;
      case 3:
        removelanguages()
        break;
      case 4:
        removecertifications()
        break;
      case 5:
        removeworkExperience()
        break;
      case 6:
        removeprojects()
        break;
      case 7:
        removeeducation()
        break;
    }

  })
})

function removetechnicalSkills(){
  components[0].removeChild(components[0].children[(indexes[0].value)-1])
}
function removesoftSkill(){
  components[1].removeChild(components[1].children[(indexes[1].value)-1])
}
function removehobbies(){
  components[2].removeChild(components[2].children[(indexes[2].value)-1])
}
function removelanguages(){
  components[3].removeChild(components[3].children[(indexes[3].value)-1])
}
function removecertifications(){
  components[4].removeChild(components[4].children[(indexes[4].value)-1])
}
function removeworkExperience(){
  document.querySelector("#work-experience ul").removeChild(document.querySelector("#work-experience ul").children[(indexes[5].value)-1])
}
function removeprojects(){
  document.querySelector("#project ul").removeChild(document.querySelector("#project ul").children[(indexes[6].value)-1])
}
function removeeducation(){
  document.querySelector("#education ul").removeChild(document.querySelector("#education ul").children[(indexes[7].value)-1])
}

// Change Colors
let colors=document.querySelectorAll(".colors")
let title=document.querySelectorAll(".title")
let main_box=document.querySelector("#header-1")

// colors.forEach((clr,index)=>{
//   clr.addEventListener("click",()=>{
//     switch(index){
//       case 0:
//         title.forEach((t)=>{
//           t.style.color=`blueviolet`
//         })
//         main_box.style.background=`blueviolet`
//         break;
//       case 1:
//         title.forEach((t)=>{
//           t.style.color=`green`
//         })
//         main_box.style.background=`green`
//         break;
//       case 2:
//         title.forEach((t)=>{
//           t.style.color=`orangered`
//         })
//         main_box.style.background=`orangered`
//         break;
//       case 3:
//         title.forEach((t)=>{
//           t.style.color=`blue`
//         })
//         main_box.style.background=`blue`
//         break;
//       case 4:
//           title.forEach((t)=>{
//             t.style.color=`grey`
//           })
//           main_box.style.background=`grey`
//           break;  
  
//     }
//   })
  
// })

let clrpicker=document.querySelector(".clr-picker")
let left=document.getElementsByClassName("toggle");
let right=document.getElementsByClassName("side-baar");
let body=document.querySelector("body");

clrpicker.addEventListener("input",()=>{
  let c=clrpicker.value
  // left[0].style.background=c
  // right[0].style.background=c
  title.forEach((t)=>{
    t.style.color=c
  })
  main_box.style.background=c

})

// Font Change
let fs=document.querySelector("#font-style")

fs.addEventListener("input",()=>{
  let mc=document.querySelector(".main_container").style.fontFamily=fs.value
})

let linkedin=document.getElementById("linkedin");
let github=document.getElementById("github");

let al=document.getElementById("linkedinhere");
let ag=document.getElementById("githubhere");

linkedin.addEventListener("input",e=>{
      al.setAttribute("href",linkedin.value);
});

github.addEventListener("input",e=>{
  ag.setAttribute("href",github.value);
});



