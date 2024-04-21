import { Fragment, useEffect, useState } from "react";
import { ButtonFormularioStyled } from "../styled/ButtonFormularioStyled";
import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { InputStyled } from "../styled/InputStyled";
import { MainStyled } from "../styled/MainStyled";
import { Row } from "../styled/Row";
import { TextArearStyled } from "../styled/TextAreaStyled";
import { TitleStyled } from "../styled/TitleStyled";
import { v4 as generateUUID } from "uuid";

export interface Livros {
  id: string;
  titulo: string;
  autor: string;
  anoPublicacao: number;
  dataCadastro: number;
  genero: string;
  descricao: string;
}
export function MainCadastrar() {
  const [livros, setLivros] = useState<Livros[]>([]);
  

  useEffect(() => {
    const storageData = localStorage.getItem("books");

    if (storageData) {
      setLivros(JSON.parse(storageData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(livros));
  }, [livros]);


  function validarDados({
    titulo,
    autor,
    anoPublicacao,
    dataCadastro,
    genero,
    descricao,
  }: Livros) {
    if (
      !titulo ||
      !autor ||
      !anoPublicacao ||
      !dataCadastro ||
      !genero ||
      !descricao
    ) {
      alert("Por favor preeencha todos os campos.");

      return false;
    }
    const dataAtual = new Date();

    if (dataAtual.getFullYear() >= anoPublicacao) {
      return true;
    } else {
      alert("Ano de publicação não pode ser maior que o atual!");
      return false;
    }
  }

  function bookRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newBook: Livros = {
      id: generateUUID(),
      titulo: event.currentTarget["titulo"].value,
      autor: event.currentTarget["autor"].value,
      anoPublicacao: event.currentTarget["anoPublicacao"].value,
      dataCadastro: event.currentTarget["dataCadastro"].value,
      genero: event.currentTarget["genero"].value,
      descricao: event.currentTarget["descricao"].value,
    };

    if (validarDados(newBook)) {
      alert("Livro cadastrado");
      setLivros((currentValue) => [newBook, ...currentValue]);
      // event.currentTarget.reset();
    } else {
      alert("Não foi possivel cadastrar!");
    }
  }

  return (
    <Fragment>
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
              <form onSubmit={bookRegister}>
                <TitleStyled
                  fontSize="1rem"
                  fontWeight="600"
                  texteAlign="center"
                >
                  Cadastrar
                </TitleStyled>
                <InputStyled
                  placeholder="Título"
                  type="text"
                  name="titulo"
                />
                <InputStyled
                  placeholder="Autor"
                  type="text"
                  name="autor"
                />

                <InputStyled
                  placeholder="Ano de publicação"
                  type="number"
                  name="anoPublicacao"
                />
                <InputStyled
                  placeholder="Data de cadastro"
                  type="text"
                  name="dataCadastro"
                />
                <span>Gênero:</span>
                <select name="genero" id="genero">
                  <option value="S">Selecione...</option>
                  <option value="Romance">Romance</option>
                  <option value="Ação">Ação</option>
                  <option value="Aventura">Aventura</option>
                </select>

                <TextArearStyled
                  placeholder="Descrição"
                  name="descricao"
                  heigth="35px"
                />
                <ButtonFormularioStyled type="submit">
                  Cadastrar
                </ButtonFormularioStyled>
              </form>
            </Column>
          </Row>
        </Container>
      </MainStyled>
    </Fragment>
  );
}
