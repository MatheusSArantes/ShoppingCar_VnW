import React, { Component } from "react";
import styled from "styled-components";
import "./index.css";

const Title = styled.h1`
  padding-left: 40%;
`;
const BoxCars = styled.div`
  border: solid 1px;
  border-radius: 4%;
  width: 200px;
  height: 95px;
  margin: 7px;
`;
const ContainerCars = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  height: 350px;
`;
const TitleCars = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(190, 190, 190, 0.5);
  border-bottom: solid 1px;
`;
const ListCars = styled.li`
  text-decoration: none;
  list-style: none;
`;
const ButtonCars = styled.button`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  color: white;
  background-color: black;
`;
const Ul = styled.ul`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContainerList = styled.div`
  width: 40%;
`;
const BoxList = styled.div`
  border: solid 2px black;
  overflow-y: scroll;
  height: 600px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GlobalContainer = styled.section`
  display: flex;
`;
const BoxCarsList = styled.div`
  border: solid 1px rgba(1, 191, 255, 0.5);
  border-radius: 2%;
  width: 90%;
  margin: 7px;
`;
const TittleBoxList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(1, 191, 255, 0.5);
`;
const ButtonCarList = styled.button`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  color: rgba(1, 191, 255, 0.5);
  background-color: white;
  height: 33%;
`;
const ContentBoxList = styled.div`
  display: flex;
  justify-content: space-around;
`;
const NameBoxList = styled.p`
  color: hsl(0deg 0% 100%);
`;

class App extends Component {
  state = {
    modelos: [
      {
        nome: "Jetta",
        montadora: "Volkswagen",
        preço: 144,
        tipo: "Sedan",
        id: 1
      },
      {
        nome: "Polo",
        montadora: "Volkswagen",
        preço: 70,
        tipo: "Hatch",
        id: 2
      },
      {
        nome: "T-Cross",
        montadora: "Volkswagen",
        preço: 123,
        tipo: "SUV",
        id: 3
      },
      {
        nome: "Tiguan R-line",
        montadora: "Volkswagen",
        preço: 146,
        tipo: "SUV",
        id: 4
      },
      {
        nome: "Civic",
        montadora: "Honda",
        preço: 115,
        tipo: "Sedan",
        id: 5
      },
      {
        nome: "Corolla",
        montadora: "Toyota",
        preço: 110,
        tipo: "Sedan",
        id: 6
      },
      {
        nome: "Corolla Cross",
        montadora: "Toyota",
        preço: 184,
        tipo: "SUV",
        id: 7
      },
      {
        nome: "Compass",
        montadora: "Jeep",
        preço: 132,
        tipo: "SUV",
        id: 8
      },
      {
        nome: "Golf GTI",
        montadora: "Volkswagen",
        preço: 138,
        tipo: "Hatch",
        id: 9
      }
    ],
    carrosList: []
  };

  add = (event, id) => {
    event.preventDefault();
    this.setState({
      carrosList: this.state.carrosList.concat(
        this.state.modelos.filter((item) => {
          return item.id == id;
        })
      )
    });
  };

  remove = (event, id) => {
    event.preventDefault();
    this.setState({
      carrosList: this.state.carrosList.filter((item) => {
        return item.id != id;
      })
    });
  };

  render() {
    return (
      <div>
        <Title>Loja de Carros!</Title>
        <GlobalContainer>
          <ContainerCars>
            {this.state.modelos.map((item, index) => (
              <BoxCars key={index}>
                <TitleCars>
                  <p>{item.nome}</p>
                  <ButtonCars
                    onClick={(event) => {
                      this.add(event, item.id);
                    }}
                    NameBoxList
                  >
                    +
                  </ButtonCars>
                </TitleCars>
                <Ul>
                  <ListCars>Montadora: {item.montadora}</ListCars>
                  <ListCars>Preço: {item.preço}.000</ListCars>
                  <ListCars>Tipo: {item.tipo}</ListCars>
                </Ul>
              </BoxCars>
            ))}
          </ContainerCars>
          <ContainerList>
            <BoxList>
              {this.state.carrosList.map((item, listening) => (
                <BoxCarsList Key={listening}>
                  <TittleBoxList>
                    <NameBoxList>{item.nome}</NameBoxList>
                    <ButtonCarList
                      onClick={(event) => {
                        this.remove(event, item.id);
                      }}
                    >
                      -
                    </ButtonCarList>
                  </TittleBoxList>
                  <ContentBoxList>
                    <p>Tipo: {item.tipo}</p>
                    <p>Preço: {item.preço}.000</p>
                  </ContentBoxList>
                </BoxCarsList>
              ))}
            </BoxList>
            <h2>
              Total: R${this.state.carrosList.reduce((a, b) => a + b.preço, 0)}
              .000
            </h2>
          </ContainerList>
        </GlobalContainer>
      </div>
    );
  }
}
export default App;
