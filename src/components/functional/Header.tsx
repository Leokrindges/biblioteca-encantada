import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { HeaderStyled } from "../styled/HeaderStyled";
import { Row } from "../styled/Row";
import { LinkStyled } from "../styled/LinkStyled";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderStyled>
      <Container heigth="100%">
        <Row alignItens="center" height="100%">
          <Column widht="57%">
            <LinkStyled fontSize="1.3rem" color="#fff" as={Link} to="/">
              Encanta Leitura
            </LinkStyled>
          </Column>
          <Column>
            <LinkStyled as={Link} to="/quem-somos">
              Quem Somos
            </LinkStyled>
            <LinkStyled as={Link} to="/livros">
              Livros
            </LinkStyled>
            <LinkStyled as={Link} to="/cadastrar">
              Cadastrar
            </LinkStyled>
          </Column>
        </Row>
      </Container>
    </HeaderStyled>
  );
}
