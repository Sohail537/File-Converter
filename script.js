let textarea = document.querySelector("textarea");
let fileNameInput = document.getElementById("filename");
let selectMenu = document.getElementById("saveAs");
let saveBtn = document.getElementById("btn");

saveBtn.addEventListener("click", () =>{
    const blob = new Blob([textarea.value], {type: selectMenu.value});
    let fileUrl = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.download = fileNameInput.value; 
    link.href = fileUrl; 
    link.click(); 
});