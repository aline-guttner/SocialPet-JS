import React from 'react'
import Parser from 'html-react-parser';
import Perfil from './perfil'

var thisIsMyCopy = Perfil


function Perfil2 () {
    return (
        <div className="content">{Parser(thisIsMyCopy)}</div>
    );
}

export default Perfil2