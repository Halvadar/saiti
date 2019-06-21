import React, { Component } from 'react';
import Nav from '../Navbar/nav'
import Searchthingy from '../Header/Searchthingy'

class Rame extends Component {
    render(){
        return(
            <div className="Rame">
                <Nav/>
                <Searchthingy/>
            </div>
        );
    }


} 

export default Rame;