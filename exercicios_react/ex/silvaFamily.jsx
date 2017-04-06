import React from 'react'
import Member from './member'

const component = (props) => {
    return(
        <div>
            <Member name='João' lastName='Silva' />
            <Member name='Maria' lastName='Silva' />
            <Member name='Pedro' lastName='Silva' />
            <Member name='José' lastName='Silva' />
        </div>
    )
}

export default component