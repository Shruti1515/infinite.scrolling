let gallery = document.querySelector('#gallery');
let page = 1;
let flag=false;


async function getData(api) { 
    let response = await fetch(api)
    let data = await response.json()
    console.log(data)
    displayData(data)
} 
getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
function displayData(arr){
    arr.forEach((ele)=>{
        let card = document.createElement('div')

        let image = document.createElement('img')
        image.src= ele.url;

        let title = document.createElement('h3');
        title.textContent= ele.title;

        card.append(image,title);
        gallery.append(card);

    })
    flag = true;
}

window.addEventListener('scroll',function(){
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;

    // console.dir(document);
    // console.log(clientHeight,scrollHeight,scrollTop)
    if(Math.ceil(scrollHeight-clientHeight) <= Math.ceil(scrollTop)){
        console.log('reach the bottom');
        page++;
        getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
        flag=false;
    }
})

