import React from 'react';
import './Results.css'

const Results = (props) => {
    return ( 
        <div className="Results">
            {props.result}
        </div>
     );
}
 
export default Results;