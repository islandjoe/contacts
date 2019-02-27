import React, {Component} from 'react'
import {Consumer} from  '../../context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'


class EditContact extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    errors: {

    }
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
        .then(resp=> {
          const contact = resp.data

          this.setState({
            name:   contact.name,
            email:  contact.email,
            phone:  contact.phone
           })
        })
  }

  onChange =(event)=> this.setState({
    [event.target.name]: event.target.value
   })

  onSubmit = async (dispatch, event)=> {
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

    const updateContact = {
      name:   this.state.name,
      email:  this.state.email,
      phone:  this.state.phone
    }

    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`, updateContact)

    dispatch({ type: 'UPDATE_CONTACT', payload: response.data })

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
          <div className='card bg-light mb-3'>
            <div className='card-header'><h4 className="card-title">Edit Contact</h4></div>
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
                    value='Update'
                      className='btn btn-primary btn-lg btn-block'/>
              </form>
            </div>
          </div>
        )
      }}
    </Consumer>
    )
  }

}

export default EditContact