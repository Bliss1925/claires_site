import './app.style.css';
import * as homeModule from './home.js';
import * as catsModule from './cats.js';
import * as workModule from './work.js';

const container = document.getElementById('content');
const nav = document.createElement('div');
//creates nav bar and title
const navCreate = (() => {
    nav.style.display = "flex";
    nav.style.flexWrap = 'wrap'; 
    nav.style.width = "100%";
    nav.style.height = "fit-content";
    nav.style.backgroundColor = "#ffff6c";
    nav.style.fontFamily = 'cursive';
    nav.style.textAlign = 'center';
    nav.style.fontWeight = 'bolder';
    nav.style.fontSize = '50px';
    nav.style.color = 'grey';
    container.appendChild(nav);
    const p = document.createElement('p');
    p.style.width = '100%';
    p.style.height = 'fit-content';
    p.innerHTML = "Claire Bramley Bliss";
    nav.appendChild(p);
    nav.style.justifyContent = 'space-evenly';
})();

//factory function that builds tabs at top
const Tabs = (name) => {
    const tab = document.createElement('div');
    nav.appendChild(tab);
    tab.style.display = 'inline-block';
    tab.style.height = 'fit-content';
    tab.style.width = 'fit-content';
    tab.style.borderStyle = 'solid solid none';
    tab.style.borderRadius = '5px'
    tab.style.padding = '10px';
    tab.innerHTML = name;
    tab.setAttribute('id', name);
    return document.getElementById(name);
}

//three tab variables for page switching
const home = Tabs('Home');
const cats = Tabs('Cats');
const work = Tabs('Work');
debugger;
homeModule.populateHome();

//removes container element from page
function tabClear() {
    let container = document.getElementById('container');
    container.remove();
}
//sets removal function
home.addEventListener('click', tabClear);
cats.addEventListener('click', tabClear);
work.addEventListener('click', tabClear);


home.addEventListener('click', homeModule.populateHome);
cats.addEventListener('click', catsModule.populateCats);
work.addEventListener('click', workModule.populateWork);