import React,{Component} from 'react';
import axios from "axios"

class CustomerDelete extends Component {
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
            if(res.data.length)
            this.setState({customerDetail:res.data})
            else
            this.setState({errors:"YES"})
        }
        )
    }

    deleteCustomer = async ()=>{
        const {id}=this.props.match.params
        await axios.delete("http://localhost:5000/api/customers/"+id)
        .then(res => this.goBack() )    
    }
    goBack =()=>{
        this.props.history.replace("/")

    }
    render() {

        let {customerDetail,errors}=this.state
        if(errors)
        {
            return <h1>Customer Not Found</h1>
        }
        else if (customerDetail) {
            return (
                <div>
                <table className="table table-bordered table-info table-striped">
                    <tbody>
                        {Object.keys(customerDetail[0]).map((key) =>
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{customerDetail[0][key]}</td>
                            </tr>
                        )}</tbody>
                </table>

                <h4>Are you sure you want to delete this customer?</h4>
                <button onClick={this.deleteCustomer} className="btn btn-md btn-danger mr-1">YES</button>
                <button onClick={this.goBack} className="btn btn-md btn-primary">NO</button>

                </div>
            );
        }
        else
            return (<h1>Loading...</h1>)
    }
}

export default CustomerDelete;

