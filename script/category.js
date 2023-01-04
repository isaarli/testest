const dataAlt = [
    {
        name: 'super',
        img: 'https://cdn.create.vista.com/api/media/medium/333702612/stock-photo-pregnancy-test-baby-clothes-and?token=',
        price:100,
        category:'Костюм'
    },
    {
        name: 'pro',
        img: 'https://cdn.create.vista.com/api/media/small/358616838/stock-photo-baby-accessories-newborns-colored-background',
        price:150,
        category:'Костюм'
    },
    {
        name: 'extra',
        img: 'https://cdn.create.vista.com/api/media/small/341755194/stock-photo-pastel-knitted-romper-jumper-shoes',
        price:180,
        category:'Костюм'
    },
    {
        name: 'italian',
        img: 'https://cdn.create.vista.com/api/media/medium/167233708/stock-photo-baby-clothes-and-accessories-on?token=',
        price:300,
        category:'Штаны'
    },
    {
        name: 'meat',
        img: 'https://cdn.create.vista.com/api/media/medium/403891058/stock-photo-baby-mockup-bodysuits-baby-girl?token=',
        price:400,
        category:'Штаны'
    },
    {
        name: 'extra',
        img: 'https://cdn.create.vista.com/api/media/small/275021038/stock-photo-dress-and-shoes-for-baby',
        price:500,
        category:'Футболки'
    },
    {
        name:  'pro',
        img: 'https://cdn.create.vista.com/api/media/small/350738446/stock-photo-baby-clothes-accessories-color-background',
        price:1000,
        category:'Футболки'
    },
    {
        name: 'ultra',
        img: 'https://cdn.create.vista.com/api/media/small/198141454/stock-photo-clothes-baby-baby-bottle-milk',
        price:2000,
        category:'Футболки'
    },
    {
        name:  'full',
        img: 'https://cdn.create.vista.com/api/media/small/495403224/stock-photo-stylish-baby-clothes-toys-color',
        price:3000,
        category:'Футболки'
    },
]

const categories = (data) =>{
    const output = document.querySelector('.output')
    output.innerHTML=''
    data.forEach(el=>{
        const col = document.createElement('div')
        const box = document.createElement('div')
        const img = document.createElement('img')
        const title = document.createElement('div')
        const name = document.createElement('p')
        const price = document.createElement('p')

        col.className='col-4'
        box.className='categories__box'
        title.className='title'

        img.src=el.img
        name.textContent=el.name
        price.textContent=`${el.price} Сом`

        box.append(img,title)
        title.append(name,price)
        col.append(box)
        output.append(col)
    })
}
categories(dataAlt)

const categoryItems = [ 'Все', 'Костюм', 'Штаны','Футболки',]

const buttonCategory = () =>{
    const categoryOutput = document.querySelector('.categories__choise')
    categoryItems.forEach(el=>{
        const button = document.createElement('button')
        button.className='button__choise'
        button.textContent = el
        button.addEventListener('click',()=>{
           const choise = dataAlt.filter(element=>{
                return element.category===el
            })
            if(el==='Все'){
                categories(dataAlt)
            }else{
                categories(choise)
            }        
        })
        categoryOutput.append(button)
    })
}
buttonCategory()

const search = document.querySelector('.search')
const searchInput = document.querySelector('.searchInput')

search.addEventListener('click',()=>{
    const selectChoise = dataAlt.filter(el=>{
        return el.name.includes(searchInput.value)
    })
    if(selectChoise.length>0){
        categories(selectChoise)
    }else{
        alert('Нечего не найдено')
    } 
})



