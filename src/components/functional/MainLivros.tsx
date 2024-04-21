import { Fragment, useEffect, useState } from "react";
import { ButtonCardCadastrarStyled } from "../styled/ButtonCardCadastrarStyled";
import { Column } from "../styled/Column";
import { Container } from "../styled/Container";
import { ContainerCardStyled } from "../styled/ContainerCard";
import { LinhaStyled } from "../styled/LinhaStyled";
import { MainStyled } from "../styled/MainStyled";
import { Row } from "../styled/Row";
import { TitleStyled } from "../styled/TitleStyled";
import { Card } from "./Card";
import { Livros } from "./MainCadastrar";
import { Modal } from "./Modal";
import { InputStyled } from "../styled/InputStyled";

export function MainLivros() {
  const [dadosLivros, setDadosLivros] = useState<Livros[]>([]);
  const [deletarLivro, setDeletarLivro] = useState<boolean>(false);
  const [modalAtualizar, setModalAtualizar] = useState<boolean>(false);
  const [idExcluir, setIdExcluir] = useState<string>("");
  const [livroSelecionado, setLivroSelecionado] = useState<Livros>({
    id: "",
    titulo: "",
    autor: "",
    anoPublicacao: 0,
    dataCadastro: 0,
    genero: "",
    descricao: "",
  });

  useEffect(() => {
    const books = localStorage.getItem("books");

    if (books) {
      // Converte a string JSON de volta para um array de objetos JavaScript
      setDadosLivros(JSON.parse(books));
    }
  }, []);

  function fecharModal(mode: "delete" | "update") {
    if (mode === "delete") {
      setDeletarLivro(false);
    } else {
      setModalAtualizar(false);
    }
  }

  function abrirModal(mode: "delete" | "update") {
    if (mode === "delete") {
      setDeletarLivro(true);
    } else {
      setModalAtualizar(true);
    }
  }

  function inputEntrada(ev: React.ChangeEvent<HTMLInputElement>) {
    setLivroSelecionado({
      ...livroSelecionado,
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  }

  function confirmarAtualizacao() {
    // preciso saber qual a posição do array será atualizada
    console.log(livroSelecionado);
    
    const indexFound = dadosLivros.findIndex((b) => {
      
      b.id === livroSelecionado.id});
    
    if (indexFound !== -1) {
      // Essa intrução é capaz de copiar apenas os valores do array "contacts" para dentro de "copy"
      // const copy = contacts; ❌ não recomendado
      const copy = [...dadosLivros]; // ✅ recomendado

      // realizar a substituição do valor que está no indice
      copy[indexFound] = livroSelecionado;

      setDadosLivros(copy);
    }

    fecharModal("update");
  }

  function removerDado() {
    setDadosLivros((currentValue) => {
      const novaLista = currentValue.filter(
        (livro) => livro.id !== idExcluir
      );
      return novaLista;
    });
    fecharModal("delete");
  }

  return (
    <Fragment>
      <MainStyled>
        <Container heigth="100%">
          <Row height="100%" justifyContent="center">
            {dadosLivros.map((book) => (
              <Column
                displayFlex="flex"
                alignItens="center"
                justifyContent="center"
                widht="150px"
                marginRight="35px"
                key={book.id}
              >
                <Card
                  borderColor="#122a57"
                  borderSize="2px"
                  borderLinha="solid"
                >
                  <ContainerCardStyled>
                    <TitleStyled fontSize="1.1rem" fontWeight="570">
                      {book.titulo}
                    </TitleStyled>
                    <LinhaStyled />
                    <ul>
                      <li>{book.autor}</li>
                      <li>{book.anoPublicacao}</li>
                      <li>{book.dataCadastro}</li>
                      <li>{book.genero}</li>
                      <li>{book.descricao}</li>
                    </ul>
                    <ButtonCardCadastrarStyled
                      onClick={() => {
                        abrirModal("delete");
                        setIdExcluir(book.id);
                      }}
                    >
                      Excluir
                    </ButtonCardCadastrarStyled>
                    <ButtonCardCadastrarStyled
                      onClick={() => {
                        abrirModal("update");
                      }}
                    >
                      Atualizar
                    </ButtonCardCadastrarStyled>
                  </ContainerCardStyled>
                </Card>
              </Column>
            ))}
          </Row>
        </Container>
      </MainStyled>

      <Modal
        titulo="Deseja excluir o livro?"
        textoBotao="Excluir"
        aberto={deletarLivro}
        acaoFechar={() => fecharModal("delete")}
        setAberto={setDeletarLivro}
        acaoConfirmar={removerDado}
        setDados={setDadosLivros}
        idExcluir={idExcluir}
      ></Modal>

      <Modal
        titulo="Atualizar Livro"
        textoBotao="Atualizar"
        acaoFechar={() => fecharModal("update")}
        aberto={modalAtualizar}
        acaoConfirmar={confirmarAtualizacao}
        setAberto={setModalAtualizar}
        setDados={setDadosLivros}
      >
        <InputStyled
          type="text"
          name="titulo"
          placeholder="Título"
          value={livroSelecionado.titulo}
          onChange={inputEntrada}
        />
        <InputStyled
          type="text"
          name="autor"
          placeholder="Autor"
          value={livroSelecionado.autor}
          onChange={inputEntrada}
        />
        <InputStyled
          type="date"
          name="anoPublicacao"
          placeholder="Ano de Publicação"
          value={livroSelecionado.anoPublicacao}
          onChange={inputEntrada}
        />
        <span>Gênero:</span>
        <select name="genero" id="genero">
          <option value="S">Selecione...</option>
          <option value="RO">Romance</option>
          <option value="AC">Ação</option>
          <option value="AV">Aventura</option>
        </select>
        <InputStyled
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={livroSelecionado.descricao}
          onChange={inputEntrada}
        />
      </Modal>
    </Fragment>
  );
}
