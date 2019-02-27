import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Consumer} from  '../../context'
import axios from 'axios'
import {Link} from 'react-router-dom'
import About from '../pages/About'

class Contact extends Component {

  state = {
    showContactInfo: false
  }


  onShowClick =()=> {
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }

  onDeleteClick = async (id, dispatch)=> {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

    dispatch({ type: 'DELETE_CONTACT', payload: id })
  }

  render() {
    const { contact } = this.props

    return (
      <Consumer>
      {(value)=> {
          return (
            <div className='card bg-light card-body mb-3'>
              <h4 className="card-title">{ contact.name }{' '}
                <i className="fa fa-angle-down"
                    onClick={ this.onShowClick }
                      style={ {cursor: 'pointer'} } />
                <i className="fas fa-minus"
                    style={ {cursor: 'pointer', float: 'right'} }
                      onClick={ this.onDeleteClick.bind(this, contact.id, value.dispatch) }  />
                <Link to={ `contact/edit/${contact.id}` }>
                  <i className="fas fa-user-edit"
                  style={ {
                    cursor: 'pointer',
                    float: 'right',
                    color: 'black',
                    marginRight: '1rem'
                  } }  />
                </Link>
              </h4>
              { this.state.showContactInfo ? (
                  <ul className='list-group'>
                    <li className='list-group-item'><i className="fas fa-envelope-open"/> { contact.email }</li>
                    <li className='list-group-item'><i className="fas fa-phone"/> { contact.phone }</li>
                  </ul>
              ) : null }
            </div>
          )
        }
      }
      </Consumer>


    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact