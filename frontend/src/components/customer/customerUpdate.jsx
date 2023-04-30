import React from 'react';
import InputForm from "../common/form"
import Joi from "joi-browser"
import FormFunc from "../common/formFunc"
import axios from "axios"

class CustomerUpdate extends FormFunc {
    constructor() {
        super();
        this.state = {
            errors: {},
            data: { "Name": "", "Email": "", "Mobile": "", "Password": "", "Id": "" }
        }
    }
    Schema = {
        Name: Joi.string().min(1).required(),
        Password: Joi.string().min(6).required(),
        Mobile: Joi.number().required(),
        Email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        Id: Joi.number().required()
    }
    
    doSubmit=()=>{
        let {oldData,data} =this.state
        let r = Object.keys(data)
                for (var i = 0; i < r.length; i++)
                        oldData[r[i]]=data[r[i]]
        const {id}=this.props.match.params
        axios.put("http://localhost:5000/api/customers/"+id,oldData).then(()=>
        this.props.history.replace("/"))
        
    }

    async componentDidMount(){
        const {id}=this.props.match.params
        await axios.get("http://localhost:5000/api/customers/"+id)
        .then(res => 
        {
            if(res.data.length)
            {
                let newData={}
                let r = Object.keys(this.state.data)
                for (var i = 0; i < r.length; i++)
                        newData[r[i]]=res.data[0][r[i]]
            this.setState({data:newData,oldData:res.data[0],allow:"YES"})
            }
            else
            this.setState({err:"YES"})
        }
        )
    }

    render() {
        const { data, errors, err, allow } = this.state
        if(err)
        {
            return <h1>Customer Not Found</h1>
        }
        else if (allow) {
            return (
            <form onSubmit={this.handleSubmit}>
                <InputForm
                    Errors={errors.Name}
                    OnChange={this.handleChange}
                    Value={data.Name}
                    Type="text"
                    Label="Name"
                    Id="Name" />
                <InputForm
                    Errors={errors.Id}
                    OnChange={this.handleChange}
                    Value={data.Id}
                    Type="text"
                    Label="ID"
                    Id="Id" />
                <InputForm
                    Errors={errors.Email}
                    OnChange={this.handleChange}
                    Value={data.Email}
                    Type="email"
                    Label="Email"
                    Id="Email" />
                <InputForm
                    Errors={errors.Password}
                    OnChange={this.handleChange}
                    Value={data.Password}
                    Type="password"
                    Label="Password"
                    Id="Password" />
                <InputForm
                    Errors={errors.Mobile}
                    OnChange={this.handleChange}
                    Value={data.Mobile}
                    Type="number"
                    Label="Mobile"
                    Id="Mobile" />
                <button  type="submit" className="btn btn-primary" disabled={this.validateForm()}>Submit</button>
            </form>
        );
    }
    else
            return (<h1>Loading...</h1>)
    }
}

export default CustomerUpdate;