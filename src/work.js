//work module

const populateWork = () => {
    let content = document.getElementById('content');
    let container = document.createElement('div');
    let head = document.createElement('h1');
    head.innerHTML = "Claire is an amazing Esthetician and Lash artist, take a look!!";
    let clairePic = new Image(200, 200);
    clairePic.src = './src/claire.jpg';
    //styling function
    //let para = document.createElement('h1');
    //para.innerHTML = "Each one has very different personalities."
    const styling = (() => {
        head.style.color = "grey";
        head.style.textAlign = "center";
        container.style.textAlign = 'center';
        //para.style.color = 'grey';
        container.setAttribute('id', 'container');
    })();
    container.appendChild(head);
    container.appendChild(clairePic);
    //container.appendChild(para);
    content.appendChild(container);
    

    return content;
}

export {populateWork};