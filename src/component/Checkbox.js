import React from 'react'; 
import styled from 'styled-components';


const StyledLabel = styled.label`
    display: flex; 
    align-items: center; 
    user-select: none;  
    background-image: url('../image/starOff.png')

    &:checked {
        background-image: url('../image/starOn.png')
        background-repeat: no-repeat;
        background-color:limegreen; 
`

const StyledInput = styled.input`
 apperance : none;
  `


function Checkbox(){
    return (
        <StyledLabel>
            <StyledInput type="checkbox"/>
        </StyledLabel>
    )
}

export default Checkbox; 