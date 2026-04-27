const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// Write your Js code here 
const links = docu.querySelectorAll('.main a');
links.forEach(link => {
    link.addEventListener('clic', () =>{
        MediaDeviceInfo.classList.remove('active');
    });
});

const hamburger = document.getElementById('main');
            const main = document.getElementById('main');

            hamburger.addEventListener('clic', ()=>{
                main.classList.toggle('active') 
            });