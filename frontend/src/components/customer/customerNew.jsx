import React from 'react';
import InputForm from "../common/form"
import Joi from "joi-browser"
import FormFunc from "../common/formFunc"
import axios from "axios"

class CustomerForm extends FormFunc {
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
        axios.post("http://localhost:5000/api/customers/",this.state.data).then(()=>
        this.props.history.replace("/"))
        
    }

    render() {
        const { data, errors } = this.state
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
                <button disabled={this.validateForm()} type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default CustomerForm;