//populates home tab with background info and picture

const populateHome = () => {
    let content = document.getElementById('content');
    let container = document.createElement('div');
    let head = document.createElement('h1');
    head.innerHTML = "This is my beautiful wife, Claire bliss";
    let clairePic = new Image(200, 200);
    clairePic.src = './src/claire.jpg';
    //styling function
    let para = document.createElement('h1');
    para.innerHTML = "She is the love of my life. Her favorite colors are yellow and grey."
    const styling = (() => {
        head.style.color = "grey";
        head.style.textAlign = "center";
        container.style.textAlign = 'center';
        para.style.color = 'grey';
        container.setAttribute('id', 'container');
    })();
    container.appendChild(head);
    container.appendChild(clairePic);
    container.appendChild(para);
    content.appendChild(container);
    

    return content;
}

export {populateHome};