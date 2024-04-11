import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { MainStyled } from "../styled/MainStyled";
import { Row } from "../styled/Row";
import Image from "../../assets/imagem home.png";
import { ParagraphStyled } from "../styled/Paragraph";
import { ImageStyled } from "../styled/ImageStyled";

export function MainHome() {
  return (
    <MainStyled>
      <Container heigth="100%">
        <Row height="100%">
          <Column
            displayFlex="flex"
            flexDirection="column"
            height="100%"
            widht="350px"
            justifyContent="center"
          >
            <h1>Biblioteca Encanta leitura</h1>
            <ParagraphStyled>Entre páginas encantadas, descubra um mundo de magia e conhecimento.</ParagraphStyled>
          </Column>
          <Column
            displayFlex="flex"
            alignItens="center"
            height="100%"
            widht="350px"
          >
            <ImageStyled borderRadius="50px" src={Image} alt="" />
          </Column>
        </Row>
      </Container>
    </MainStyled>
  );
}
