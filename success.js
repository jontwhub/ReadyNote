

const alertBox = () =>{
    document.getElementsByClassName('open-popup-btn').addEventListener('click', function(){
        document.getElementsByClassName('popup')[0].classList.add('active');
    })
    document.getElementsByClassName('dismiss-popup-btn').addEventListener('click', function(){
        document.getElementsByClassName('popup')[0].classList.remove('active');
    })
}
