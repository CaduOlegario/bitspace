import React, { useEffect, useRef, InputHTMLAttributes} from 'react'
import { useField } from '@unform/core'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    visibleName: string
}

const Input: React.FC<InputProps> = ({ name, visibleName,...rest}) => {
    const inputRef = useRef(null)
    
    const { fieldName, error, registerField} = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]) 

    
    return (
        <Container 
            isErrored={!!error}
        >
            <span>{visibleName}</span>
            <input 
                {...rest}
                ref={inputRef}
                type="text"
            />
        </Container>
    )
}

export default Input