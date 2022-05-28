import React from 'react';


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        const node = this.myRef.current;
        return(
            <div ref={this.myRef}/>;
        )
    }
}