import React from 'React'

import './MainHeader.css'

const MainHeader = props => {
    return <header className="main-header">{props.children}</header>
};

export default MainHeader