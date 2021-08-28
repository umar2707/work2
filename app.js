const close = document.querySelector('.modal-sec'),
    modal = document.querySelector('.modal'),
    burger = document.querySelector('#burger'),
    nav2 = document.querySelector('.nav2'),
    nav3 = document.querySelector('.nav3');

burger.onclick=function(){
    modal.style.display='block';
    nav2.style.display = 'flex';
    nav3.style.display = 'flex';
}
close.onclick=function(){
    modal.style.display='none';
    nav2.style.display = 'none';
    nav3.style.display = 'none';
}