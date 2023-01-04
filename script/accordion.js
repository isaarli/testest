const data = [
    {
        title:'Кыргызстан',
        text:`Доставка по Кыргызстану от 1 дня(Такси, Автобус, Камаз, Поезд ,Карго). 100-150 тенге/кг.`
    },
    {
        title:'Россия',
        text:`Доставка по Россий от 5-10 дней(ТК карго). 25-35 руб/кг.`,
    },
    {
        title:'Казахстан',
        text:`Доставка по Казахстану от 1-3 дней(Такси, Автобус, Камаз, Поезд ,Карго). 100-150 тенге/кг..`
    },
    {
        title:'Другие страны',
        text:`Доставка в другие страны от 3 дней.`
    },

]

const output = document.querySelector('.accordion')

const accordionRender = () =>{
    data.forEach(el=>{
        const wrap = document.createElement('div')
        const header = document.createElement('div')
        const name = document.createElement('p')
        const img = document.createElement('img')
        const contentWrap = document.createElement('div')
        const content = document.createElement('p')

        wrap.className='accordion__wrap'
        header.className='accordion__name'
        img.className='plus'
        img.src='../images/plus.png'
        contentWrap.className='accordion__content'

        name.textContent=el.title
        content.textContent=el.text

        contentWrap.append(content)
        header.append(name,img)
        wrap.append(header,contentWrap)
        output.append(wrap)
    })
}
accordionRender()

const accordion = () =>{
    const accordion = document.querySelectorAll('.accordion__wrap')
    console.log(accordion);
    for(let i = 0;i<accordion.length;i++){
        // console.log(`first: ${i}`);
       
        accordion[i].addEventListener('click',()=>{
            accordion.forEach((el,index)=>{
                // console.log(`second:${index}`);
                if(i===index){
                    el.classList.toggle('accordion__active')
                }else{
                    console.log('accordion close '+index);
                    el.classList.remove('accordion__active') 
                }
            })
        })
    }
}
accordion()