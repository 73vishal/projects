const testimonials = [
    {
        name:"- Sophie Livingston",
        photoUrl:"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I am beyond impressed with the user interface of Apple's mobile products. The sleek design and intuitive features make it a joy to use every day. I highly recommend Apple for anyone looking for a seamless user experience."
    },
    {
        name:"- Alicia Reynolds",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"software has truly transformed our workflow with their programar tool. The user interface is intuitive and efficient, making our tasks much easier to manage. We highly recommend software for anyone looking to streamline their processes."
    },
    {
        name:"- Emily Johnson",
        photoUrl:"https://plus.unsplash.com/premium_photo-1675626492183-865d6d8e2e8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text:"apple's mobile products offer a seamless user interface experience that is unmatched. I am thoroughly impressed with the innovation and quality of their devices."
    },
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx =0;
updateTestimonial();

function updateTestimonial(){
    const{name,photoUrl,text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial();
    },10000);
}