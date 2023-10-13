const qr_text=document.getElementById("qr_text");
const sizes=document.getElementById("sizes");
const generatebtn=document.getElementById("generatebtn");
const downloadbtn=document.getElementById("downloadbtn");
const qr_body = document.querySelector("body > div > div.qr_body")
let size ,image;

sizes.addEventListener('change',function(){
    size=sizes.value
})
generatebtn.addEventListener('click',(e)=>{
    console.log(size)
    e.preventDefault();
    // qr_text.style.display="none";
    generateqrcode();
})

downloadbtn.addEventListener('click',()=>{
    isempty();
    image =document.querySelector("body > div > div.qr_body > img");
    console.log()
if(image.hasAttribute('src')){
    downloadbtn.setAttribute("href",image.getAttribute('src'))
}
else{
    alert("something went wrong");
    downloadbtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
}

})

function isempty(){
    if (qr_text.innerText == "") {
        alert("please enter some text");
}
else{
    
}

}

function generateqrcode(){
    qr_body.innerHTML="";
    new QRCode(qr_body,{
        text: qr_text.value,
        height:size,
        width:size,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })
}
