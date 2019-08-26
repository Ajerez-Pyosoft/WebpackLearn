import React, {useState} from 'react';
import data from '../info.json';
import Loader from './loader';
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

console.log(data);

function App() {
    const [loaderList, setLoaderList] = useState([]);
    
    function handleClick() {
        setLoaderList(data.loaders);
    }
    
    return(
        <div>
            <p className="sass">This is sass</p>
            <p className="less">This is less</p>
            <p className="stylus">This is stylus</p>
            <p className="post-css">This is postcss</p>
            Que linda aplicacion hecha en React.js
            <video src={video} width={360} controls poster={logo}></video>
            <p>
                <img src={logo} alt="" width={40}/>
            </p>
            <ul>
                {
                    loaderList.map((item) => 
                        <Loader {...item} key={item.id}/>
                    )
                }
            </ul>
            <button onClick={handleClick}>Show me what you got</button>
            
        </div>
    )
}

export default App;