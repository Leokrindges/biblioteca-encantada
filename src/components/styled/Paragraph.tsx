import styled from "styled-components";

interface ParagraphProps{
    fontSize?: string;
}

export const ParagraphStyled = styled.p<ParagraphProps>`
    font-size: ${(props)=> props.fontSize ?? "0.8rem"};
`;