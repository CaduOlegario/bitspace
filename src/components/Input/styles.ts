import styled from 'styled-components'

interface InputProps {
    isErrored: boolean
}

export const Container = styled.div<InputProps>`
    width: 100% !important;
    
    span {
        margin: 20px 0 10px 0;
        font-weight: 600;
        color: ${props => props.isErrored && '#f00'};
    }
    
    input {
        height: 30px;
        border-radius: 4px;
        border: 1px solid lightgrey;
        border-color: ${props => props.isErrored && '#f00'};
        padding: 1rem;

        ::placeholder {
            color: lightgrey;
        }
    }
`