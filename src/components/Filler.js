/// this is a filler component for error

import React from "react"
import styled from "styled-components"
import { IoWarningOutline } from "react-icons/io5"


const Filler = () => {
  return (
    <div>
      <FillerDiv>
        <WarningIcon />&nbsp;&nbsp;<WarningIcon />
      </FillerDiv>
    </div>
  )
}

const FillerDiv = styled.div`
  margin-top: 20px;
  color: transparent;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const WarningIcon = styled(IoWarningOutline)`
  font-size: 1.4rem;
  color: transparent;
`

export default Filler
