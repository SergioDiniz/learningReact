import React from 'react'

const component = (props) => {
    return(
        <div>
            <h1>Familia Silva:</h1>
            
            { React.Children.map(props.children, 
                            child => React.cloneElement(child, {...props})) }

        </div>
    )
}

export default component