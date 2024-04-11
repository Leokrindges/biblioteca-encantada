import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { MainStyled } from "../styled/MainStyled";
import { Row } from "../styled/Row";
import { Card } from "./Card";
import ImageHospedagem from "../../assets/hotel.svg";
import ImageRoteiro from "../../assets/roteiro.svg";
import ImagePacotes from "../../assets/viagens.svg";
import { ButtonCardStyled } from "../styled/ButtonCardStyled";
import { TitleStyled } from "../styled/TitleStyled";

export function MainServicos() {
  return (
    <MainStyled>
      <Container heigth="100%">
        <Row height="100%">
          <Column
            widht="216.5px"
            displayFlex="flex"
            alignItens="center"
            justifyContent="center"
          >
            <Card>
              <img src={ImageHospedagem} alt="" />
              <TitleStyled>Hospedagem</TitleStyled>
              <ButtonCardStyled>Saiba mais!</ButtonCardStyled>
            </Card>
          </Column>
          <Column
            widht="216.5px"
            displayFlex="flex"
            alignItens="center"
            justifyContent="center"
          >
            <Card>
              <img src={ImageRoteiro} alt="" />
              <TitleStyled>Roteiros</TitleStyled>
              <ButtonCardStyled>Saiba mais!</ButtonCardStyled>
            </Card>
          </Column>
          <Column
            widht="216.5px"
            displayFlex="flex"
            alignItens="center"
            justifyContent="center"
          >
            <Card>
              <img src={ImagePacotes} alt="" />
              <TitleStyled>Pacotes</TitleStyled>
              <ButtonCardStyled>Saiba mais!</ButtonCardStyled>
            </Card>
          </Column>
        </Row>
      </Container>
    </MainStyled>
  );
}
