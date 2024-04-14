import axios from 'axios';
import React from 'react';

class ax extends React.Component{
    state = {details: [],}
    componentDidMount(){
        let data;
        axios.get('http://127.0.0.1:8000/getaccounts/')
        .then( res => {
            data = res.data;
            this.setState({
                details: data
            });
            
        })
        .catch(err => {})
    }
    render(){
        return(
            <div>
                DATA
                <hr></hr>
                {this.state.details.map((output, id)=> (
                    <div>
                        <h2>{output.status}</h2>
                        <h3>{output.sender_name}</h3>
                        <h4>{output.account_type}</h4>
                    </div>
                ))}
            </div>
            
        )
    }
}
export default ax;
