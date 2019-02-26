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