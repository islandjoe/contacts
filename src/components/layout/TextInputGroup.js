import React from 'react'
import PropTypes from 'prop-types'

const TextInputGroup =(props)=> {
  return (
    <div className="form-group">
      <label htmlFor={ props.name }>{ props.label }</label>
      <input
        type={ props.type }
          className='form-control form-control-lg'
            placeholder={ props.placeholder }
              name={ props.name }
                value={ props.value }
                  onChange={ props.onChange }  />
    </div>
  )
}

TextInputGroup.propTypes = {
  name:        PropTypes.string.isRequired,
  value:       PropTypes.string.isRequired,
  label:       PropTypes.string.isRequired,
  type:        PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange:    PropTypes.func.isRequired
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup