import styled from "styled-components"

const InputField = ({ className, type, placeholder }) => (
    <div className={className}>
        <input type={type} placeholder={placeholder} />
    </div>
)

export const StyledInputField = styled(InputField)`
    display: flex;

    input {
        border: 1px solid gray;
        border-radius: 1px;
        padding: 10px 5px;

        :focus {
        outline: none;
        border: 1.2px solid black;
        border-radius: 1px;
    }   
}`
