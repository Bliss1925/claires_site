//populates the cats tab with page info

const populateCats = () => {
    let content = document.getElementById('content');
    let container = document.createElement('div');
    let head = document.createElement('h1');
    head.innerHTML = "These are our cats: Ava, Captain Solo and Lula";
    let clairePic = new Image(200, 200);
    clairePic.src = './src/claire.jpg';
    //styling function
    let para = document.createElement('h1');
    para.innerHTML = "Each one has very different personalities."
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

export {populateCats};