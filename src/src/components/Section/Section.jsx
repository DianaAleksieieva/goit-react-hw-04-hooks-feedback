import React from 'react';
export default class Section extends React.Component {
    
    render({feedbackOption, statistic, title}=this.props) {
        return <div>
            <h2>{title}</h2>
            <div>{feedbackOption}</div>
            {<div>{statistic}</div>}
        </div>
    }
}
