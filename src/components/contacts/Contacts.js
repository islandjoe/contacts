import React, {Component} from 'react'
import Contact from './Contact'
import { Consumer } from '../../context'

class Contacts extends Component {

   deleteContact =(id)=> {
     const contactsCp = this.state.contacts.filter((contact)=> contact.id !== id)

     this.setState({ contacts: contactsCp })
   }

  render() {

    return (
      <Consumer>
        {(value)=> {
          return (
          <>
          <h3 className="display-4 mb-2">
            Contact List
          </h3>
            { value.contacts.map((contact)=> (
                <Contact
                    key={ contact.id }
                    contact={ contact }
                    deleteClickHandler={ this.deleteContact.bind(this, contact.id) } />
              ))
            }
          </>
          )
        }}
      </Consumer>
    )
  }

}

export default Contacts