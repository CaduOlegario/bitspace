import React, { useCallback, InputHTMLAttributes } from 'react'
import { FiX } from 'react-icons/fi'

import { Container, TagDiv } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    tags: string[]
    setTags: Function
}

const Input: React.FC<InputProps> = ({ name, tags, setTags, ...rest }) => {

    const handlePress = useCallback((event) => {
        if (event.key === 'Enter' && event.target.value !== "") {
            event.preventDefault()
            const newTag = event.target.value
            setTags((state: string[]) => [...state, newTag])
            event.target.value = ""
        }
    }, [setTags])

    const removeTags = useCallback((index) => {
        setTags((state: string[]) => [...state.filter(st => state.indexOf(st) !== index)])
    }, [setTags])

    return (
        <Container>
            <span>{name}</span>
            <TagDiv>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <p>{tag}</p>
                            <i
                                onClick={() => removeTags(index)}
                            >
                                <FiX size={14} />
                            </i>
                        </li>
                    ))}
                </ul>
                <input
                    {...rest}
                    type="text"
                    onKeyDown={event => handlePress(event)}
                />
            </TagDiv>
        </Container>
    )
}

export default Input