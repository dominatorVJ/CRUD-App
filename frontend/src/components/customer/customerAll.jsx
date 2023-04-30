import React from 'react';
import {Link} from "react-router-dom"
import FetchCust from "./fetchCustomer"

class Customers extends FetchCust {  
    render() { 
        const {customerDetails} = this.state
        if(customerDetails)
        {
          if(customerDetails.length===0)
            return <div className="container"> <Link  to="customerNew" className="btn btn-block btn-primary my-4">Add New Customer</Link>
             <h2 className={"text-center"}>NO CUSTOMERS PRESENT IN DATABASE</h2> </div>
        return ( 
            <div className="container">
            <div> <Link  to="customerNew" className="btn btn-block btn-primary my-4">Add New Customer</Link></div>  
            <div className="table-responsive">
              <table className="table table-hover table-striped table-info">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Customer_ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No.</th>
                {/* <th scope="col">Date</th> */}
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {customerDetails.map((c)=>{
                return (
                <tr key={c._id}>
                <td>{c.Id}</td>
                <td>{c.Name}</td>
                <td>{c.Email}</td>
                <td>{c.Mobile}</td>
                {/* <td>{(c.Date).toDateString()}</td> */}
                <td ><Link  to={{pathname:"/customerView/"+c.Id,state:{Id:c.Id}}} className="btn btn-sm btn-light" >View</Link></td>
                <td ><Link  to={{pathname:"/customerUpdate/"+c.Id,state:{Id:c.Id}}} className="btn btn-sm btn-light" >Update</Link></td>
                <td ><Link  to={{pathname:"/customerDelete/"+c.Id,state:{Id:c.Id}}} className="btn btn-sm btn-danger" >Delete</Link></td>
              </tr>
                )
              })}
            </tbody>
          </table>
          </div>
            </div>
 );
}

 else  return <h1>Loading....</h1>
    }
}
 
export default Customers;

