import styled from "styled-components"
interface LinkProps {
  fontSize?: string
  fontWeight?:string
  color?:string
}

export const LinkStyled = styled.a<LinkProps>`
    color: ${(props)=> props.color ?? "#A7ABB4"};
    text-decoration: none;
    font-size: ${(props) => props.fontSize ?? "0.7rem"};
    font-weight: 500;
    margin-right: 10px;

    &:hover{
      color: #fff;
    }
  `;