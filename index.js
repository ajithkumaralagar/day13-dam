let doc=document.getElementById("root")
doc.innerHTML='<h1 style="color:red;">Welcome to guvi<h1>'
doc.innerHTML='<h1>hello ajith</h1>'
doc.setAttribute('class','text-color')
doc.style.textAlign="center"
doc.style.color="blue"
doc.style.fontFamily="verdana"
doc.style.fontSize="Large"

let docs=document.getElementsByTagName('div')
for(let i=0;i<docs.length;i++)
{
    docs[i].innerHTML='hello welcome on board'
    docs[i].setAttribute('class','text-color')
    docs[i].style.fontSize="Large"
    docs[i].style.fontFamily="verdana"
    docs[i].style.textAlign="center"
}

let head=document.createElement('h1')
head.innerHTML="hello guvi learner"
document.body.appendChild(head)
head.style.textAlign="center"

let head2=document.createElement('h1')
head2.innerHTML="hi ajith its started"
document.body.appendChild(head2)
head2.append("the learning")

let parent = document.createElement('div')
parent.setAttribute('class','paflex')
document.body.appendChild(parent)

let child= document.createElement('div')
parent.appendChild(child)
let image = document.createElement('img')
image.setAttribute('src','./malai.jfif')
image.style.width="200px"
child.appendChild(image)

let child1 = document.createElement('div')
parent.appendChild(child1)

let image1 = document.createElement('img')
image1.setAttribute('src','profile boy.jfif')
image1.style.width="200px"
child1.appendChild(image1)


let myFav=["coffee","tea","apple","lemon juise","comics"]

let h1=document.createElement('h1')
h1.innerHTML="MY FAVOURITES:"
document.body.appendChild(h1)
let ul=document.createElement('ul')
document.body.appendChild(ul)


for(let i=0;i<myFav.length;i++)
{
    let li=document.createElement('li')
    li.innerHTML=myFav[i]
    ul.appendChild(li)
}


let comic=["naruto","onepiece","bleach","Death Note","Seven DeadlySins","Vinland Saga","Demon Slayer","Attack on Titan"]

let MyCom=document.createElement('h1')
MyCom.innerHTML="My Favourite Comics are:"
document.body.appendChild(MyCom)

let ul1=document.createElement('ul')
document.body.appendChild(ul1)
for(let j=0;j<comic.length;j++)
{
    let li1=document.createElement('li')
    li1.innerHTML=comic[j]
    ul1.appendChild(li1)

}



