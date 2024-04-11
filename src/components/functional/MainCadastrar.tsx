import { ButtonFormularioStyled } from "../styled/ButtonFormularioStyled";
import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { InputStyled } from "../styled/InputStyled";
import { MainStyled } from "../styled/MainStyled";
import { Row } from "../styled/Row";
import { TextArearStyled } from "../styled/TextAreaStyled";
import { TitleStyled } from "../styled/TitleStyled";
import { Formulario } from "./Formulario";

export function MainCadastrar() {
  return (
    <MainStyled>
      <Container heigth="100%">
        <Row justifyContent="center" alignItens="center" height="100%">
          <Column
            widht="280px"
            displayFlex="flex"
            flexDirection="column"
            alignItens="center"
            justifyContent="center"
          >
            <Formulario>
              <TitleStyled fontSize="1rem" fontWeight="600" texteAlign="center">
                Cadastrar
              </TitleStyled>
              <InputStyled placeholder="Título" type="text" name="titulo" />

              <InputStyled placeholder="Ano de publicação" type="text" name="ano_publicacao" />

              <InputStyled placeholder=" Data de cadastro" type="text" name="data_cadastro" />

              <InputStyled placeholder="Gênero" type="text" name="Gênero" />

              <TextArearStyled placeholder="Descrição" name="descrciao" heigth="35px" />
              <ButtonFormularioStyled>Cadastrar</ButtonFormularioStyled>
            </Formulario>
          </Column>
        </Row>
      </Container>
    </MainStyled>
  );
}
