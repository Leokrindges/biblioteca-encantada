import { ButtonCardPlanosStyled } from "../styled/ButtonCardPlanosStyled";
import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { ContainerCardStyled } from "../styled/ContainerCard";
import { LinhaStyled } from "../styled/LinhaStyled";
import { MainStyled } from "../styled/MainStyled";
import { Row } from "../styled/Row";
import { TitleStyled } from "../styled/TitleStyled";
import { Card } from "./Card";

export function MainPlanos() {
  return (
    <MainStyled>
      <Container heigth="100%">
        <Row height="100%" justifyContent="center">
          <Column
            displayFlex="flex"
            alignItens="center"
            justifyContent="center"
            widht="150px"
            marginRight="35px"
          >
            <Card borderColor="#122a57" borderSize="2px" borderLinha="solid">
              <ContainerCardStyled>
                <TitleStyled fontSize="1.1rem" fontWeight="570">
                  Plano 1
                </TitleStyled>
                <LinhaStyled />
                <ul>
                  <li>Suporte 24h</li>
                  <li>Serviços de quarto</li>
                  <li>Guia turístico</li>
                </ul>
                <ButtonCardPlanosStyled>Saiba mais!</ButtonCardPlanosStyled>
              </ContainerCardStyled>
            </Card>
          </Column>
          <Column
            displayFlex="flex"
            alignItens="center"
            justifyContent="center"
            widht="150px"
            marginRight="35px"
          >
            <Card borderColor="#122a57" borderSize="2px" borderLinha="solid">
              <ContainerCardStyled>
                <TitleStyled fontSize="1.1rem" fontWeight="570">
                  Plano 2
                </TitleStyled>
                <LinhaStyled />
                <ul>
                  <li>Suporte 24h</li>
                  <li>Serviços de quarto</li>
                  <li>Guia turístico</li>
                  <li>Roteiro de trilhas</li>
                  <li>Serviço personalizado</li>
                </ul>
                <ButtonCardPlanosStyled>Saiba mais!</ButtonCardPlanosStyled>
              </ContainerCardStyled>
            </Card>
          </Column>
          <Column
            displayFlex="flex"
            alignItens="center"
            justifyContent="center"
            widht="150px"
            marginRight="35px"
          >
            <Card borderColor="#122a57" borderSize="2px" borderLinha="solid">
              <ContainerCardStyled>
                <TitleStyled fontSize="1.1rem" fontWeight="570">
                  Plano 3
                </TitleStyled>
                <LinhaStyled />
                <ul>
                  <li>Suporte 24h</li>
                  <li>Serviços de quarto</li>
                  <li>Guia turístico</li>
                  <li>Roteiro de trilhas</li>
                  <li>Serviço personalizado</li>
                </ul>
                <ButtonCardPlanosStyled>Saiba mais!</ButtonCardPlanosStyled>
              </ContainerCardStyled>
            </Card>
          </Column>
        </Row>
      </Container>
    </MainStyled>
  );
}
