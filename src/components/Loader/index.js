import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = props => (
    <div>
        <img 
            style = {{ width : 125 }}
            src = {loaderSrc} 
            alt="loaderImage">
        </img>
    </div>
);

export default Loader;