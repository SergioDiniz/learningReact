import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(

    <Family familyName=' Silva'>
        <Member name='Guilherme'/>
        <Member name='José'/>
        <Member name='Sérgio'/>
    </Family>

, document.getElementById('app')) 