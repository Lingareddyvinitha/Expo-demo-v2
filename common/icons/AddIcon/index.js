import React from 'react'


const AddIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props.width}
    height={props.height}
    viewBox='0 0 159 159'
    className={props.className}
  >
    <path
      fill='#343740'
      d='M79.5 0C35.664 0 0 35.664 0 79.5S35.664 159 79.5 159 159 123.336 159 79.5 123.335 0 79.5 0zm39.75 89.437H89.437v29.813H69.563V89.437H39.75V69.563h29.813V39.75h19.874v29.813h29.813v19.874z'
    ></path>
  </svg>
)

AddIcon.defaultProps = {
  width: 159,
  height: 159
}
export default AddIcon
