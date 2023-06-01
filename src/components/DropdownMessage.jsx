import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';

import UserOne from '../images/user/user-01.png'
import UserTwo from '../images/user/user-02.png'
import UserThree from '../images/user/user-03.png'
import UserFour from '../images/user/user-04.png'

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const trigger = useRef(null)
  const dropdown = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <></>
  )
}

export default DropdownMessage;
