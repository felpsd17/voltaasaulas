//Mensagem de boas-vindas ao clicar no botão
document.addEventlistener('DOMContentLoaded',()=>{
    const button = document.querySelector('button');
    button.addEventlistener('click',()=> {
        alert('Estamos animados para começar o ano com vocês!');
    });

    //Contador de dias para o início das aulas
    const startDate=new date('2024-08-01');//defina a data de inicio das aulas
    const today =nem date();
    const timeDiff=startDate-today;
    const daysLeft= Math.ceil(timeDiff/1000* 60 *60 * 24));

    const countdownElement =document.createElement('p');
    countdowmElement.textcontent = faltam ${daysLeft}dias para o inicio das aulas!';
    document.qyerySelector('card').appendChild(countdownElement);

    //alterar a imagem ao clicar
    const image = document.querySelector('img');
    image.addEventListener('click'.() =>{
        image.src =voltaaulas.jpg;
    });

    //mostrar uma mensagem de boas-vindas com animacao 
    const card=document.querySelector('card');
    card.style.opacity =d;
    card.style.transition ='opacity 2s';

    setTimeout(()=>{
        card.style.opacity =1;
    },100);
    });