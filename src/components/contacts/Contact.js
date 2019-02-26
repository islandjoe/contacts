import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Consumer} from  '../../context'

class Contact extends Component {

  state = {
    showContactInfo: false
  }

  onShowClick =()=> {
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }

  onDeleteClick =(id, dispatch)=> {
    dispatch({ type: 'DELETE_CONTACT', payload: id })
  }

  render() {
    const { contact } = this.props

    return (
      <Consumer>
      {(value)=> {
          return (
            <div className='card card-body mb-3'>
              <h4>{ contact.name }{' '}
                <i className="fa fa-sort-down"
                    onClick={ this.onShowClick }
                      style={ {cursor: 'pointer'} } />
                <i className="fa fa-times"
                    style={ {cursor: 'pointer', float: 'right', color: 'red'} }
                      onClick={ this.onDeleteClick.bind(this, contact.id, value.dispatch) }  />
              </h4>
              { this.state.showContactInfo ? (
                  <ul className='list-group'>
                    <li className='list-group-item'>Email: { contact.email }</li>
                    <li className='list-group-item'>Phone: { contact.phone }</li>
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