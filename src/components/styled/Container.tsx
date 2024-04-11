import styled from "styled-components";

interface ContainerProps{
    heigth?: string
}

export const Container = styled.div<ContainerProps>`
height: ${(props)=> props.heigth};

    @media(min-width: 650px){
        max-width: 650px;
        margin: 0 auto;
    }
`;