
let optionsButton = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button")
let linkButton = document.getElementById("createLink");

let fontName = document.getElementById("fontName");
let fontSize = document.getElementById("fontSize");

let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
    "Roboto",
    "Lato",
    "Open Sans",
    "Bruno Ace"
];


function intializer(){
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    fontList.map(value =>{
        let option = document.createElement("option")
        option.value = value
        option.innerHTML = value
        fontName.appendChild(option)
    })

    for(let i = 1; i <= 20;i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSize.appendChild(option)
    }

    fontSize.value = 3

};

const modifyText = (comand,defaultUi,value) =>{
    document.execCommand(comand,defaultUi,value)
}

optionsButton.forEach(btn =>{
    btn.addEventListener("click",()=>{
        console.log(btn.id);
        modifyText(btn.id, false,null);
    })
})

advancedOptionButton.forEach(btn =>{
    btn.addEventListener("change", ()=>{
        modifyText(btn.id,false,btn.value)
    })
})

linkButton.addEventListener("click",()=>{
    let userLink = prompt("Escreva sua URL ");
    if(/http:/i.test(userLink)){//expressao regular !
        modifyText(linkButton.id,false,userLink)
    }else{
        userLink= "http://" + userLink;
        modifyText(linkButton.id,false,userLink);
    }
})

// function highlighter(className, needsRemoval){
//     className.forEach((btn) => {
//         btn.addEventListener("click",() => {
//             if(needsRemoval){
//                 let alreatActive = false;
//                 if(btn.classList.contains("active")){
//                     alreatActive = true;
//                 }
//                 highlighterRemover(className);
//                 if(!alreatActive){
//                     btn.classList.add("active");
//                 }else{
//                     btn.classList.toggle("active");
//                 }

//             }
//         })
//     })
// }

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            if (needsRemoval) {
                let alreadyActive = false;
                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }
                highlighterRemover(className);
                if (!alreadyActive) {
                    button.classList.add("active");
                }
            } else {
                button.classList.toggle("active");
            }
        });
    });
};


function highlighterRemover(className){
    className.forEach( btn =>{
        btn.classList.remove("active")
    })
}

window.onload = intializer();