import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Switch = props => {
  const { onChange, cheked = false } = props
  const [isChecked, setChecked] = useState(cheked)

  const onHandle = element => {
    setChecked(element.target.checked)
    onChange && onChange(element)
  }
  return <Input onChange={onHandle} type='checkbox' name='checkbox' checked={isChecked} />
}

Switch.propTypes = {
  onChange: PropTypes.func,
  cheked: PropTypes.bool
}

const Input = styled.input`
  -webkit-appearance: none;
  position: relative;
  width: 44px;
  min-width: 44px;
  height: 22px;
  background-size: cover;

  ${({ theme }) => theme.backgroundToggle}

  border-radius: 50px;
  outline: none;
  transition: all 0.9s;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    height: 16px;
    width: 16px;
    background-color: navy;
    border-radius: 50px;
    transition: all 0.9s;
    background-color: ${({ theme }) => theme.circleToggle};
  }

  &:checked {
    transition: all 0.9s;
  }

  &:checked:before {
    transform: translate(130%);
    transition: all 0.9s;
    left: 4px;
  }
`
export default Switch
