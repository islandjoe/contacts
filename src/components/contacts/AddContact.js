import React, {Component} from 'react'
import {Consumer} from  '../../context'
import uuid from 'uuid'
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {

  state = {
    name: '',
    email: '',
    phone: ''
  }

  onChange =(event)=> this.setState({
    [event.target.name]: event.target.value
   })

   onSubmit =(dispatch, event)=> {
     event.preventDefault()
     const newContact = {
       id:    uuid(),
       name:  this.state.name,
       email: this.state.email,
       phone: this.state.phone
     }

     dispatch({
       type: 'ADD_CONTACT',
       payload: newContact
     })

     // Clear input form
     this.setState({
       name: '',
       email: '',
       phone: ''
      })
   }

  render() {

    return (
      <Consumer>
      {(value)=> {
        return (
          <div className='card mb-3'>
            <div className='card-header'>Add Contact</div>
            <div className="card-body">
              <form onSubmit={ this.onSubmit.bind(this, value.dispatch) }>
                <TextInputGroup
                  label="Name"
                    name="name"
                      placeholder="Enter name..."
                        value={ this.state.name }
                          onChange={ this.onChange } />
                <TextInputGroup
                  label="Email"
                    name="email"
                      placeholder="Enter email..."
                        type="email"
                          value={ this.state.email }
                            onChange={ this.onChange } />
                <TextInputGroup
                  label="Phone"
                    name="phone"
                      type="text"
                        placeholder="Enter phone..."
                          value={ this.state.phone }
                            onChange={ this.onChange } />
                <input
                  type="submit"
                    value='Add Contact'
                      className='btn btn-light btn-block'/>
              </form>
            </div>
          </div>
        )
      }}
    </Consumer>
    )
  }

}

export default AddContact