import * as React from "react";
import ICharacterData from '../types/character.type';
import CharacterDataService from "../services/character.service";
import { RouteComponentProps } from 'react-router';
import { Card } from 'react-bootstrap';

interface MatchParams {
    name: string;
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
}

export const CharacterView: React.FC<Props> = (props) => {

    const id = props.match.params.id;
    const [character, setCharacter] = React.useState<ICharacterData | null>(null);

    const retrieveCharacter = () => {
        CharacterDataService.get(id)
            .then((response: any) => {
                setCharacter(response.data)
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    React.useEffect(() => {
        retrieveCharacter();
    }, []);

    return (
        <div>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={character?.image} />
                <Card.Body>
                    <Card.Title>{character?.name}</Card.Title>
                    <Card.Text>Status: {character?.status}</Card.Text>
                    <Card.Text>Species: {character?.species}</Card.Text>
                    <Card.Text>Gender: {character?.gender}</Card.Text>
                    <Card.Text>Type: {character?.type}</Card.Text>
                    <Card.Text>Url: {character?.url}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
