import React, {Component} from 'react'

class AddContact extends Component {

  state = {
    name: '',
    email: '',
    phone: ''
  }

  onChange =(event)=> this.setState({
    [event.target.name]: event.target.value
   })

   onSubmit =(event)=> {
     event.preventDefault()

   }

  render() {
    return (
      <div className='card mb-3'>
        <div className='card-header'>Add Contact</div>
        <div className="card-body">
          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                  className='form-control form-control-lg'
                    placeholder='Enter name...'
                      name='name'
                        value={ this.state.name }
                          onChange={ this.onChangeName }  />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                  className='form-control form-control-lg'
                    placeholder='Enter email...'
                      name='email'
                        value={ this.state.email }
                          onChange={ this.onEmailChange }  />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                  className='form-control form-control-lg'
                    placeholder='Enter phone...'
                      name='phone'
                        value={ this.state.phone }
                          onChange={ this.onPhoneChange } />
            </div>
            <input
              type="submit"
                value='Add Contact'
                className='btn btn-light btn-block'/>
          </form>
        </div>
      </div>
    )
  }

}

export default AddContact