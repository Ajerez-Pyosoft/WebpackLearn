import '../css/index.css';

import text from './text.js';


if(module.hot){
    module.hot.accept('./text.js', function() {
        console.log('I have done a hot reload')
        text();
    })
}

text();