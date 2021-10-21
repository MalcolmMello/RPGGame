import styled from "styled-components";


export const Container = styled.div<{size: number, left: number, top: number, sidePos: number}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${props => props.sidePos}px;

    .user {
        display: flex;
        padding: 2px;
        min-width:65px;
        margin-top: -30px;
        margin-left: -15px;
        background-color: #FFF;
        color: black;
        border-radius: 10px;
        text-align: center;
        border: 1px solid black;
    }
`