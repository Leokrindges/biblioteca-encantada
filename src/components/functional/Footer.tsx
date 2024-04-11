import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { FooterStyled } from "../styled/FooterStyled";
import { Row } from "../styled/Row";

export function Footer() {
  return (
    <FooterStyled>
      <Container heigth="100%">
        <Row alignItens="center" height="100%">
          <Column widht="88%">
            <span>©2024 Full Stack Growdev</span>
          </Column>
          <Column>
            <span>17ª Edição</span>
          </Column>
        </Row>
      </Container>
    </FooterStyled>
  );
}
