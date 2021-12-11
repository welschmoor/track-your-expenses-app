

import React from "react"
import styled from "styled-components"
import { IoWarningOutline } from "react-icons/io5"


const Error = ({ errormsg }) => {
  return (
    <div>
      <ErrorDiv>
        <WarningIcon />&nbsp;{errormsg}&nbsp;<WarningIcon />
      </ErrorDiv>
    </div>
  )
}

const ErrorDiv = styled.div`
  margin-top: 20px;
  color: orange;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const WarningIcon = styled(IoWarningOutline)`
  font-size: 1.4rem;
`

export default Error
