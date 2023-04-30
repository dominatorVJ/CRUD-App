import { Component } from 'react';
import Joi from "joi-browser"

class FormFunctions extends Component {
    constructor() {
        super();
        this.state = { 
            data:{},
            errors:{}
         }
    }

    validateForm(){
        let options = {abortEarly:false}
        const res = Joi.validate(this.state.data, this.Schema,options)
        if(!res.error)
            return null
        const errors={}
        for(let item of res.error.details)
        {
            errors[item.path[0]]=item.message
        }
        return errors
    }
    
    validateProperty(name,value){
        let obj={[name]:value}
        let schema = {[name]:this.Schema[name]}
        const {error} = Joi.validate(obj,schema)
        if(!error) return null
        return error.details[0].message    
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const errors=this.validateForm()
        this.setState({errors:errors||{}})
        if(errors) return;
        
        this.doSubmit();
    }
    handleChange = (e) => {
        let { name, value } = e.currentTarget
        const errors={...this.state.errors}
        const errorMessage = this.validateProperty(name,value)
        if(errorMessage) errors[name]=errorMessage
        else delete errors[name]

        const data = { ...this.state.data }
        data[name] = value
        this.setState({ data,errors })
    }
    
}
export default FormFunctions;