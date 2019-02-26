import React, {Component} from 'react'
import {Consumer} from  '../../context'
import uuid from 'uuid'

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
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                      className='form-control form-control-lg'
                        placeholder='Enter name...'
                          name='name'
                            value={ this.state.name }
                              onChange={ this.onChange }  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                      className='form-control form-control-lg'
                        placeholder='Enter email...'
                          name='email'
                            value={ this.state.email }
                              onChange={ this.onChange }  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                      className='form-control form-control-lg'
                        placeholder='Enter phone...'
                          name='phone'
                            value={ this.state.phone }
                              onChange={ this.onChange } />
                </div>
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