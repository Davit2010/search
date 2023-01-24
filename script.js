let names = document.querySelector('.names-cont')
let usersCont = document.querySelector('.users-cont')
let input = document.querySelector('input')
let categoris = document.querySelector('.categoris')

input.addEventListener('input', () => {
    usersCont.innerHTML = ''
    names.innerHTML = ''
    getUrl(input.value)
    // names.classList.remove('hide')
    // usersCont.classList.remove('hide')
})

categoris.addEventListener('click', () => {
    usersCont.innerHTML = ''
    names.innerHTML = ''
    getUrl(input.value)
    names.classList.toggle('hide')
    usersCont.classList.toggle('hide')
})

document.querySelector('.serch-icon').addEventListener('click', () => {
    usersCont.innerHTML = ''
    names.innerHTML = ''
    getUrl(input.value)
})

function getUrl(input) {
    let newInput = input.split(' ').join('&')

    fetch(`https://dummyjson.com/users/search?q=${newInput}`, {
        method: 'GET' /* or POST/PUT//DELETE */
    })
        .then(res => res.json())
        .then(respons => {
            let allusers = respons.users
            allusers.forEach(el => {
                getAllUsers(el)
                getAllNames(el)
            });
            Mor_info()
        })
}

let bul = false
function getAllUsers(el) {
    let div = document.createElement('div')
    div.className = 'user'

    div.innerHTML = `
        <div class='main-cont'>
            <img class="image" src="${el.image}" alt="user" />
            <h2 class="nameSname">${el.firstName} ${el.lastName}</h2>
            <button class='more-inf'>more info</button>
            </div>
            <p class="paragraph">${el.address.address}</p>`
    usersCont.appendChild(div)
}

function Mor_info() {
    let morInf = document.querySelectorAll('.more-inf')
    let paragraph = document.querySelectorAll('.paragraph')

    morInf.forEach((el, i) => {
        el.addEventListener('click', () => {
            if (document.querySelectorAll('.paragraph')[i].style.display == 'none') {
                paragraph[i].classList.toggle('show')
                paragraph[i].style.display == 'block'
            }
            else {
                paragraph[i].classList.toggle('show')
                paragraph[i].style.display == 'none'
            }
        })
    })
}


function getAllNames(el) {
    let div = document.createElement('div')
    div.className = 'names'
    div.innerHTML = `${el.firstName} ${el.lastName}`
    names.appendChild(div)

    getnameFromInput()
}

function getnameFromInput() {
    document.querySelectorAll('.names').forEach(el => {
        el.addEventListener('click', () => {
            input.value = el.innerHTML
        })
    });
}





























// function searchLogic() {
//     input.addEventListener('input', (e) => {
//         let nameSname = document.querySelectorAll('.nameSname')
//         let inpVal = e.target.value

//         nameSname.forEach((el, i) => {
//             if (!el.textContent.toLowerCase().match(inpVal.toLowerCase())) {
//                 document.querySelectorAll('.user')[i].classList.add('hide')
//             } else {
//                 document.querySelectorAll('.user')[i].classList.remove('hide')
//             }
//         })
//     })
// }

// searchLogic()