const toggleHeart = document.getElementById('heart');
const conatct = document.getElementById('contact');

    toggleHeart.addEventListener('click', () => {
        toggleHeart.classList.toggle('fa-solid')
        if (toggleHeart.classList == 'fa-regular fa-heart fa-solid') {
            toggleHeart.style.color = 'red'
        }
        else {
            toggleHeart.style.color = 'white'
        }
    })  

    conatct.addEventListener('click', () => {
        window.open("https://www.linkedin.com/in/mridul-garg-072004", "_blank");
    } )