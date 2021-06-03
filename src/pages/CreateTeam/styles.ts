import styled, { css } from 'styled-components'

import footballField from '../../assets/fieldMark.png'

interface FormationProps {
    formation: string;
}

interface TeamTypeProps {
    teamType: 'Real' | 'Fantasy'
    optionName: 'Real' | 'Fantasy'
}

export const Content = styled.div`
    max-width: 1080px;
    margin: 2rem auto;
    border-radius: 20px;
    background: #fff;
    
    filter: drop-shadow(0px 0px 10px rgba(153, 135, 135, 0.25));
    

    header {
        padding: .8rem 1.2rem;
        span {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-bottom: 1px solid #E9E3E9;

        color: var(--pink);
        font-size: 30px;
        font-weight: bold;
        }
    }

    h2 {
        color: rgba(57, 57, 57, 0.50);
        text-transform: uppercase;
        text-align: center;

        padding: 2rem;
    }
`

export const TeamInformation = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    
    div {
        display: flex;
        flex-direction: column;
        width: 45%;

        h4 {
            margin: 20px 0 10px 0;
            font-weight: 600;
        }

        section#teamType {
            display: flex;
        }
    }
`

export const Label = styled.label<TeamTypeProps>`
    margin-right: 20px;
    display: flex;
    align-items: center;
    color: lightgrey;
    ${props => props.teamType === 'Real' && props.optionName === 'Real' && 'color: #B41356'};
    ${props => props.teamType === 'Fantasy' && props.optionName === 'Fantasy' && 'color: #B41356'};
    
    input {
        margin-right: 5px;    
    }
`

export const ConfigureSquad = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem;

    div.block-formation {
        display: flex;
        flex-direction: column;
        width: 40%;

        label {
            font-weight: 600;
            margin-left: .8rem;

            select {
                height: 40px;
                width: 100%;
                border-radius: 8px;
                border: 1px solid lightgrey;
            }
        }

        main {
            margin: 20px 0;
            height: 620px;
            width: 550px;
            position: relative;
            background: url(${footballField}) no-repeat center center;

            section {
                position: absolute;

                height: 70px;
                width: 70px;
                border-radius: 50%;
                border: 1px dashed #fff;
                padding: 5px;

                h1 {
                    font-size: 1rem;
                }

                > div {
                    background-color: #CE9BBE;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
            
        }

        > button {
            margin: .5rem;
            width: 530px;
            height: 4rem;
            background: linear-gradient(100.37deg, #EF2C7D 10.92%, #FD5936 146.24%);
            border: 0;
            border-radius: 1rem;
            font-size: 1.5rem;
            color: #fff;
            font-weight: bold;
            margin-bottom: 30px;
        }
    }

    div.block-search {
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 100%;
        /* background: red; */

        .form-search {
            width: 100%;
        }
    }
`

export const Section1 = styled.section<FormationProps>`
    ${props => {
        const position = props.formation.split(' - ')
        if(position[0] === '3') {
            return css`
            bottom: 60px;
            left: 20px;
            `
        }
        else if(position[0] === '4' || position[0] === '5') {
            return css`
            bottom: 60px;
            left: 20px;
            `
        }
    }}
`

export const Section2 = styled.section<FormationProps>`
    ${props => {
        const position = props.formation.split(' - ')
        if(position[0] === '3') {
            return css`
            bottom: 120px;
            left: 230px;
            ` 
        } 
        else if(position[0] === '4' || position[0] === '5') {
            return css`
            bottom: 100px;
            left: 150px;
            `
        }  
    }}

    
`

export const Section3 = styled.section<FormationProps>`
    ${props => {
        const position = props.formation.split(' - ')
        if(position[0] === '3') {
            return css`
            bottom: 60px;
            right: 20px;
            `
        }
        else if(position[0] === '4' || position[0] === '5') {
            return css`
            bottom: 100px;
            right: 150px;
            `
        }
            
    }}

    
`

export const Section4 = styled.section<FormationProps>`
    ${props => {
        const position = props.formation.split(' - ')
        if(position[1] === '2' && position.length === 4) {
            return css`
            bottom: 240px;
            left: 60px;
            `
        } 
        else if(position[1] === '4' && position.length === 3) {
            return css`
            bottom: 280px;
            left: 40px;
            `
        }
        else if(position[1] === '5' && position.length === 3) {
            return css`
            top: 280px;
            left: 30px;
            `
        }
        else if(position[0] === '4' && position[1] === '3') {
            return css`
            bottom: 60px;
            right: 20px;
            `
        }
    }}

    
`

export const Section5 = styled.section<FormationProps>`
    ${props => {
        const position = props.formation.split(' - ')
        if(position[1] === '2' && position.length === 4) {
            return css`
            bottom: 240px;
            right: 60px;
            `
        }
        else if(position[1] === '4' && position.length === 3) {
            return css`
            bottom: 320px;
            left: 160px;
            `
        } 
        else if(position[1] === '5' && position.length === 3) {
            return css`
            bottom: 280px;
            left: 130px;
            `
        }
        else if(position[1] === '3' && position[0] === '4') {
            return css`
            bottom: 280px;
            left: 80px;
            `
        } 
        
    }} 
`

export const Section6 = styled.section<FormationProps>`
    ${props => {
        const position = props.formation.split(' - ')
        if(position[2] === '2'  && position.length === 4) {
            return css`
            top: 240px;
            left: 60px;
            `
        }  
        else if(position[2] === '3'  && position.length === 4) {
            return css`
            top: 200px;
            left: 60px;
            `
        }
        else if(position[1] === '4' && position.length === 3) {
            return css`
            bottom: 320px;
            right: 160px;
            `
        }
        else if(position[1] === '5' && position.length === 3) {
            return css`
            top: 280px;
            left: 230px;
            `
        }
        else if(position[1] === '3' && position[0] === '4') {
            return css`
            bottom: 280px;
            right: 80px;
            `
        }     
    }} 
`

export const Section7 = styled.section<FormationProps>`
    ${props => {
        const position = props.formation.split(' - ')
        if(position[2] === '2'  && position.length === 4) {
            return css`
            top: 240px;
            right: 60px;
            `
        }  
        else if(position[2] === '3'  && position.length === 4) {
            return css`
            top: 200px;
            right: 60px;
            `
        }
        else if(position[1] === '4' && position.length === 3) {
            return css`
            bottom: 280px;
            right: 40px;
            `
        }
        else if(position[1] === '5' && position.length === 3) {
            return css`
            bottom: 280px;
            right: 130px;
            `
        }
        else if(position[1] === '3' && position[0] === '4') {
            return css`
            bottom: 280px;
            left: 230px;
            `
        }       
    }}

    
`

export const Section8 = styled.section<FormationProps>`
    ${props => {
        const position = props.formation.split(' - ')
        if(position[2] === '3'  && position.length === 4) {
            return css`
            top: 240px;
            left: 230px;
            `
        }  
        else if(position[3] === '3'  && position.length === 4) {
            return css`
            top: 60px;
            left: 20px;
            `
        }
        else if(position[2] === '3'  && position.length === 3) {
            return css`
            top: 80px;
            left: 60px;
            `
        }
        else if(position[1] === '5' && position.length === 3) {
            return css`
            top: 280px;
            right: 30px;
            `
        }
        else if(position[2] === '1' && position.length === 4 && position[0] === '4') {
            return css`
            top: 220px;
            left: 230px;
            `
        } 
        else if(position[2] === '2' && position.length === 3 && position[0] === '4') {
            return css`
            top: 120px;
            right: 90px;
            `
        } 
        else if(position[2] === '1' && position.length === 3 && position[1] === '5') {
            return css`
            top: 120px;
            right: 90px;
            `
        }
        else if(props.formation === '5 - 4 - 1') {
            return css`
            bottom: 160px;
            left: 230px;
            `
        }        
    }}

    
`

export const Section9 = styled.section<FormationProps>`
    ${props => {
        const position = props.formation.split(' - ')
        if(position[3] === '3' && position.length === 4) {
            return css`
            top: 60px;
            right: 20px;
            `
        }  
        else if(position[3] === '1'  && position.length === 4) {
            return css`
            top: 100px;
            left: 230px;
            `
        }
        else if(position[2] === '3'  && position.length === 3) {
            return css`
            top: 80px;
            right: 60px;
            `
        }
        else if(position[2] === '2' && position.length === 3) {
            return css`
            top: 120px;
            left: 90px;
            `
        } 
        else if(position[0] === '4' && position[1] === '5' && position.length === 3) {
            return css`
            top: 120px;
            left: 230px;
            `
        }
        else if(props.formation === '5 - 4 - 1') {
            return css`
            top: 120px;
            left: 230px;
            `
        }       
    }}
`

export const Section10 = styled.section<FormationProps>`
    ${props => {
        const position = props.formation.split(' - ')
        if(position[3] === '3' && position.length === 4) {
            return css`
            top: 80px;
            left: 230px;
            `
        }
        else if(position[2] === '3'  && position.length === 3) {
            return css`
            top: 120px;
            left: 230px;
            `
        }      
        else if(props.formation === '3 - 2 - 3 - 1' || props.formation === '4 - 3 - 1 - 1' || props.formation === '4 - 3 - 2') {
            return css`
                visibility: hidden;
            `
        }
        else if(position[2] === '2' && position.length === 3 && position[1] !== '4') {
            return css`
            top: 120px;
            right: 90px;
            `
        }
        else if(props.formation === '4 - 2 - 3 - 1' || props.formation === '4 - 4 - 2' || props.formation === '4 - 5 - 1' || props.formation === '5 - 4 - 1') {
            return css`
            bottom: 60px;
            right: 20px;
            `
        }   
    }}

    
`

export const Section11 = styled.section<FormationProps>`
    bottom: 0;
    left: 230px;
`
export const PlayerList = styled.div`
    padding: 20px 0;
    width: 100% !important;
    border-bottom: 1px solid #E9E3E9;
    max-height: 740px;

    overflow-x: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 0;
    }

    section {
        padding: 20px 20px;
        width: 100%;
        position: relative;
        background: linear-gradient(0deg, #E6E6E6 0%, #FDFDFD 100%);
        border-radius: 1rem;
        border: 1px dashed lightgrey;

        + section {
            margin-top: 10px;
        }

        strong {
            font-weight: bold;
            margin-right: 6px;
            font-size: 12px;
        }

        p {
            color: #B41356;
            font-size: 12px;
        }

        div {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        aside {
            display: flex;
            margin: 20px 20px 0 0;

            position: absolute;
            top: 0;
            right: 0;
        }
    }
`
