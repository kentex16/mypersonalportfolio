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


const anchorElements = document.querySelectorAll('a[data-content-id]');


anchorElements.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        
        event.preventDefault();

       
        const contentId = this.getAttribute('data-content-id');

        
        loadContent(contentId);
    });
});


function loadContent(contentId) {
    
    
    const contentMap = {
        'lot-ecommerce': {
            title: 'Lote Ecommerce',
            description: ' Technologies used: PHP, Node.js, HTML, CSS, Bootstrap, Laravel, SQL, Tailwind CSS, jQuery, Pusher, AOS, JSON.'

        },
        
    };

    
    const content = contentMap[contentId];

    if (content) {
        
        const contentContainer = document.getElementById('content-container');
        contentContainer.innerHTML = `
            <h3>${content.title}</h3>
            <p>${content.description}</p>
            
        `;
    } else {
        // Handle the case where content for the specified contentId is not found
        console.error(`Content not found for ID: ${contentId}`);
    }
}
