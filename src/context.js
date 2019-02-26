import React, {Component} from 'react'

const Context = React.createContext()
const reducer =(state, action)=> {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact=> contact.id !== action.payload)
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      { id: 1,
        name: 'Aguirre England',
        email: 'kristy.sanders@zilphur.biz',
        phone: '(840) 451-2465'
      },
      { id: 2,
        name: 'Marcie Hester',
        email: 'wall.gamble@elpro.tv',
        phone: '(906) 535-2571'
      },
      { id: 3,
        name: 'Traci Willis',
        email: 'baker.arnold@halap.biz',
        phone: '(856) 595-3822'
      },
    ],
    dispatch: (action)=> this.setState(state=> reducer(state, action))
  }

  render() {
    return (
      <Context.Provider value={ this.state }>
        { this.props.children }
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer