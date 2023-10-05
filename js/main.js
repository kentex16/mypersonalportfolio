var typed = new Typed(".text", {
    strings: [
        '<span style="color: #fff;">I\'m a Website Developer.</span>',
        '<span style="color: var(--red);">With Laravel Framework.</span>',
        '<span style="color: #fff;">I\'m not proficient in designing </span>',
        '<span style="color: var(--red);">Thats why I started to Learn React.js.</span>',
        '<span style="color: var(--red);">I want to learn more to improve myself. </span>',
        '<span style="color: #fff;">Please check my skills and interests below.</span>'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    smartBackspace: true 
});
function sendEmail (){
    Email.send({
        secureToken :"cf4b053f-42d7-4f4c-82e4-837c369073bb",
        To : 'kennethnovero6@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Insights",
        Body : "Name" +document.getElementById('name').value
        + "<br> Email:"  + document.getElementById("email").value
        + "<br> Message:"  + document.getElementById("message").value
     }).then(
      message => alert("Message sent Successfully")
    );
}

