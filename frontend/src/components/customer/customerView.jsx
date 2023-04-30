import React,{Component} from 'react';
import axios from "axios"

class CustomerView extends Component {
    constructor() {
        super();
        this.state = {
            
          }
    }
    async componentDidMount(){
        const {id}=this.props.match.params
        await axios.get("http://localhost:5000/api/customers/"+id)
        .then(res => 
        {
            // console.log(res.data)
            if(res.data.length)
            this.setState({customerDetail:res.data})
            else
            this.setState({errors:"YES"})
        }
        )
    }

    render() {

        let {customerDetail,errors}=this.state
        if(errors)
        {
            return <h1>Customer Not Found</h1>
        }
        else if (customerDetail) {
            return (
                <table className="table table-bordered table-info table-striped">
                    <tbody>
                        {Object.keys(customerDetail[0]).map((key) =>
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{customerDetail[0][key]}</td>
                            </tr>
                        )}</tbody>
                </table>

            );
        }
        else
            return (<h1>Loading...</h1>)
    }
}

export default CustomerView;

