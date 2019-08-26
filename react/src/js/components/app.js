import React, {useState} from 'react';
import data from '../info.json';
import Loader from './loader';

console.log(data);

function App() {
    const [loaderList, setLoaderList] = useState([]);
    
    function handleClick() {
        setLoaderList(data.loaders);
    }
    
    return(
        <div>
            <ul>
                {
                    loaderList.map((item) => 
                        <Loader {...item} key={item.id}/>
                    )
                }
            </ul>
            <button onClick={handleClick}>Show me what you got</button>
            Que linda aplicacion hecha en React.js
        </div>
    )
}

export default App;