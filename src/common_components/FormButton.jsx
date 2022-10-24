import styled from "styled-components"

const FormButton = ({ className, children }) => (
    <div className={className}>
        <button>{children}</button>
    </div>
  )
  
export const StyledFormButton = styled(FormButton)`

    button{
    }
`
