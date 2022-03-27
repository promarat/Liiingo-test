import * as React from "react";
import ICharacterData from '../types/character.type';
import { CharacterContext } from "../context/character.context";
import CharacterDataService from "../services/character.service";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Character } from "./character.component";
import { FilterInput } from "./filterInput.component";

interface Props { }

export const CharactersList: React.FC<Props> = () => {
  const {allCharacters, setAllCharacters, characters, setCharacters} = React.useContext(CharacterContext);
  const [filterName, setFilterName] = React.useState<string>("");
  const [filterStatus, setFilterStatus] = React.useState<string>("");
  const [filterGender, setFilterGender] = React.useState<string>("");

  const retrieveCharacters = () => {
    CharacterDataService.getAll()
      .then((response: any) => {
        setAllCharacters(response.data.results);
        setCharacters(response.data.results);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  const filterCharaters = () => {
    const filterResult = allCharacters.filter(character => 
        character.name?.indexOf(filterName) !== -1 && 
        character.status?.indexOf(filterStatus) !== -1 && character.gender?.indexOf(filterGender) !== -1
      );
    setCharacters(filterResult);
  }

  React.useEffect(() => {
    retrieveCharacters();
  }, []);

  React.useEffect(() => {
    filterCharaters();
  }, [filterName, filterStatus, filterGender]);

  return (
    <div>
      <div>
        <Form>
          <Row>
            <Col>
              <FilterInput
                filterType={"Name"}
                onChange={(value) => setFilterName(value)}
              />
            </Col>
            <Col>
              <FilterInput
                filterType={"Status"}
                onChange={(value) => setFilterStatus(value)}
              />
            </Col>
            <Col>
              <FilterInput
                filterType={"Gender"}
                onChange={(value) => setFilterGender(value)}
              />
            </Col>
          </Row>
        </Form>
      </div>
      <h4>Characters List</h4>
      <Container>
        <Row>
          {characters &&
            characters.map((character: ICharacterData, index: number) => (
              <Col key={index} md={6} lg={4}>
                <Character data={character} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
