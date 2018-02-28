import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import CreditList from './creditList';

class BillingCycleForm extends Component{
    render(){
        const {handleSubmit, readOnly} = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={labelAndInput} 
                        label="Nome" cols="12 4" placeholder="Informe o Nome"/>
                    <Field name="month" component={labelAndInput} 
                        label="Mês" cols="12 4" placeholder="Informe o Mês"/>
                    <Field name="year" component={labelAndInput} 
                        label="Ano" cols="12 4" placeholder="Informe o Ano"/>
                    <CreditList cols="12 6" readOnly={readOnly} />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)