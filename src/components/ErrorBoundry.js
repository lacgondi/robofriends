import React, {Component} from 'react';

class ErrorBundry extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError: false,
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})        
    }

    render(){
        if(this.state.hasError){
            return <h1>Ooops. This ain't it chief</h1>
        }
        return this.props.children;
    }
}

export default ErrorBundry;
