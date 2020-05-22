import React, { useState } from 'react';

const Expression = () => {

    const [expression, setExpression] = useState(0);

    return ( 
        <>
            <p>Expression: {expression}</p>
        </>
     );
}
 
export default Expression;