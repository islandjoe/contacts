import React, {Component} from 'react'
import {Consumer} from  '../../context'
import uuid from 'uuid'
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    errors: {

    }
  }

  onChange =(event)=> this.setState({
    [event.target.name]: event.target.value
   })

  onSubmit =(dispatch, event)=> {
    event.preventDefault()

    if (this.state.name === '') {
      this.setState({ errors: {name: 'Name is required.'} })
      return
    }

    if (this.state.email === '') {
      this.setState({ errors: {email: 'Email is required.'} })
      return
    }

    if (this.state.phone === '') {
      this.setState({ errors: {phone: 'Phone is required.'} })
      return
    }

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
       name:  '',
       email: '',
       phone: '',
       errors: {}
    })

    this.props.history.push('/')

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
                          onChange={ this.onChange }
                            error={ this.state.errors.name } />
                <TextInputGroup
                  label="Email"
                    name="email"
                      placeholder="Enter email..."
                        type="email"
                          value={ this.state.email }
                            onChange={ this.onChange }
                            error={ this.state.errors.email } />
                <TextInputGroup
                  label="Phone"
                    name="phone"
                      type="text"
                        placeholder="Enter phone..."
                          value={ this.state.phone }
                            onChange={ this.onChange }
                            error={ this.state.errors.phone } />
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