import styled from 'styled-components'
import ImageFieldFootbalHome from '../../assets/FieldFootballHome.png';

export const Content = styled.div`
    /* margin: 50px 0; */
    padding: 3rem;
    width: 100vw;
    height: 92vh;
    display: flex;

    justify-content: space-between;
`
export const MyTeams = styled.div`
    width: 47%;
    background-color: #FFF;
    border-radius: 20px;
    padding: 10px 20px;
    overflow-y: scroll;
    filter: drop-shadow(0px 0px 10px rgba(153, 135, 135, 0.25));

    ::-webkit-scrollbar {
        width: 0;
    }

    header {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;

        border-bottom: 1px solid #E9E3E9;

        h1 {
            color: var(--pink);
            font-size: 1.6rem;
            font-weight: bold;
        }

        button {
            background: linear-gradient(136.85deg, #ED2786 10.32%, #FF5F2D 87.9%);
            border: 0;
            height: 34px;
            width: 34px;
            border-radius: 8px;

            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px 2px var(--pink);

        }
    }
`

export const Actions = styled.section`
    margin: 20px 0;
    height: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    
    button {
        border: 0;
        height: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;

        :first-child {
            width: 30%;
            margin-right: 10px;
            padding-right: 10px;
            border-right: 1px solid #E9E3E9;
        }

        & + button  {
            width: 70%;
        }

        p {
            font-size: 1rem;
        }
    }
`

export const TeamSection = styled.section`
    margin: 10px 0;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 0 20px;
    font-weight: 400;

    
    :hover {
        background-color: #F7F3F7;
        color: var(--pink);

        div {
            & + div {
                button {
                    visibility: visible;
                }
            }
        }
    }

    div {
        :first-child {
            width: 30%;
        }

        & + div {
            display: flex;
            width: 70%;
            justify-content: space-between;
            align-items: center;

            button {
                margin-right: 10px;
                border: 0;
                background-color: inherit;
                visibility: hidden;
            }
        }
    }
`

export const Statistics = styled.div`
    width: 47%;
    display: flex;
    flex-direction: column;
`

export const Top5 = styled.div`
    background-color: #FFF;
    border-radius: 20px;
    padding: 10px 40px;
    flex: 1;
    filter: drop-shadow(0px 0px 10px rgba(153, 135, 135, 0.25));

    header {
        height: 60px;
        display: flex;
        align-items: center;

        color: var(--pink);
        font-size: 1.6rem;
        font-weight: bold;

        border-bottom: 1px solid #E9E3E9;
    }
    

    main {
        display: flex;
        justify-content: space-between;

        div {
            width: 47%;

            h3 {
                margin: 10px 0;
                font-size: 1rem;
            }

            div {
                background-color: #F7F3F7;
                padding: 5px 5px;
                width: 100%;
                border-radius: 10px;
                font-size: 0.95rem;

                section {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 10px 10px 30px;

                    background-color: #FFF;
                    border-radius: 10px;

                    & + section {
                        margin-top: 5px;
                    }

                    strong {
                        font-weight: 600;
                    }

                    :hover {
                        border: 1px solid #a11861;
                    }
                }
            }
        }
    }
`

export const PickedPlayer = styled.div`
    /* position: relative; */
    flex: 1;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 0 1rem;
    margin-top: 2rem;

    background-image: url(${ImageFieldFootbalHome});
    background-size: 100%;
    background-position: center center;


    display: flex;
    justify-content: space-around;
    align-items: center;

    h1 {
        font-weight: normal;
        color: var(--white);
        text-align: center;
        /* margin-bottom: 1rem; */
        font-size: 1.2rem;
    }

    main {
        display: flex;
        align-items: center;
        gap: 1rem;


        section#most {
            width: 100px;
            height: 100px;

            background-color: #491949;
            color: #fff;
            font-size: 1rem;

            border-radius: 50%;
            border: 3px dashed #ED2785;
            box-shadow:
                inset 0 0 0 2px #BD4638;

            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: .7rem;

                h1 {
                    font-size: 1rem !important;
                    color: #fff !important;
                }
        }

        section#less {
            width: 100px;
            height: 100px;

            background-color: #491949;
            color: #fff;
            font-size: 1rem;

            border-radius: 50%;
            border: 3px solid #BD4638;

            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: .7rem;

            h1 {
                font-size: 1rem !important;
                color: #fff !important;
            }
        }

        span {
            color: #fff;
        }
    }

    /* margin-top: 30px;
    background: linear-gradient(180deg, #C00E4E 0%, #8A206F 100%);
    border-radius: 20px;
    
    display: flex;

    h1 {
        color: #fff;
        margin-bottom: 20px;
    }

    div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        :first-child {
            border-right: 1px solid #E9E3E9;
        }
    }

    main {
        display: flex;
        align-items: flex-start;

        span {
            color: #fff;
            border-bottom: 2px solid #fff;
            padding-bottom: 10px;
        }

        > section {
            height: 200px;
            width: 200px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            border: 4px dashed #B11357;
            padding: 10px;
    }
    } */
`

// export const Center = styled.section`
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: auto;

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     background: inherit;
//     width: 100px;
//     height: 100px;

//     border: 1px solid #E9E3E9;
//     border-radius: 50%;
// `