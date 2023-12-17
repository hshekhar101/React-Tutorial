const reactElement={
    type : 'a',
    props : {
        href: 'https://google.com',
        target : '_blank'
    },
    description: "click me to reach google"
}

function CustomRender(reactElement, mainContainer){
    const anchorElement=document.createElement(reactElement.type)
    anchorElement.innerHTML=reactElement.description
    for (const prop in reactElement.props) {
        anchorElement.setAttribute(prop, reactElement.props[prop]);
    }
   
    mainContainer.appendChild(anchorElement)
    console.log("Entered in function")
}

const mainContainer=document.getElementById('root')

CustomRender(reactElement, mainContainer)
