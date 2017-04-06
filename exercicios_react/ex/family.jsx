import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'
const component = (props) => {
    return(
        <div>
            <h1>Familia Silva:</h1>
            
            { childrenWithProps(props) }

        </div>
    )
}

export default component