import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { MainStyled } from "../styled/MainStyled";
import { ParagraphStyled } from "../styled/Paragraph";
import { Row } from "../styled/Row";
import Image from "../../assets/imagem quem somos.jpg";
import { ImageStyled } from "../styled/ImageStyled";


export function MainQuemSomos(){
    return(
        <MainStyled>
            <Container heigth="100%">
        <Row height="100%">
          <Column
            displayFlex="flex"
            alignItens="center"
            height="100%"
            widht="350px"
          >
            <ImageStyled borderRadius="99px" src={Image} alt="" />
          </Column>
          <Column
            displayFlex="flex"
            flexDirection="column"
            height="100%"
            widht="350px"
            justifyContent="center"
          >
            
            <h1>| Quem Somos</h1>
            <ParagraphStyled>Na Biblioteca Encantada, mergulhe em um mundo de maravilhas literárias e mistérios encantados. Descubra histórias mágicas e aventuras emocionantes entre suas estantes repletas de tesouros. Deixe-se envolver pelo fascínio das palavras e pela magia dos livros, onde cada página reserva uma nova surpresa.</ParagraphStyled>
          </Column>
        </Row>
      </Container>
        </MainStyled>
    )
}