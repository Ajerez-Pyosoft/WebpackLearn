import '../css/index.css';

import search from './search.js';
import render from './render.js';

const id = prompt('Whos that pokemon?');

search(id)
    .then((data) => {
        render(data);
    })
    .catch(()=> {
        console.log('no hubo resultado de pokemon');
    })
