import React from 'react';
import "./Searchthingy.css"

const Searchthingy = function(){
    return(
        <div className="searchthingy-container w-90 center">
            <div className="Searchthingy center w-90 flex justify-center">
                <input type="searchbox" className="sadzebni self-center w-30 br2" placeholder="რესტორანი, კბილის ექიმი, ადვოკატი"></input>
            </div>
            <div className="categories"></div>
        </div>    

    )



}


export default Searchthingy;