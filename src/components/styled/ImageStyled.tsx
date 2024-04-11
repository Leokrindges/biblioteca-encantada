import styled from "styled-components";
interface ImageStyledProps{
    borderRadius?: string
    
}
export const ImageStyled = styled.img<ImageStyledProps>`
border-radius: ${(props)=> props.borderRadius ?? '0px'};
width: 90%;
`;