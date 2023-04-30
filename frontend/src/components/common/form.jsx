import React from 'react';

const FormUnit = (props) => {
    const {Id,Label,Type,Placeholder,Value,OnChange,ReadOnly,Errors} = props
    return (  
        <div className="form-group">
              <label htmlFor={Id}>{Label}</label>
              <input type={Type} value={Value} onChange={OnChange}  readOnly={ReadOnly} className="form-control" name={Id} id={Id} placeholder={Placeholder}/>
        {Errors && <div className="alert alert-danger">{Errors}</div>}
        </div>

    );
}
 
export default FormUnit;