import React from 'react';
import './IndexPage.css';
import CreateMovie from './CreateMovie';
import ListMovie from './ListMovie';



class IndexPage extends React.Component{
    render(){
        return (
            <div id = "indexPage">
                <ListMovie />
                <CreateMovie />
            </div>
        )
    }
}

export default IndexPage;
