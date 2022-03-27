import * as React from "react";
import ICharacterData from '../types/character.type';
import { Card, Button } from 'react-bootstrap';
import { FaRegHeart, FaHeart } from 'react-icons/fa'

interface Props {
    data: ICharacterData;
}

export const Character: React.FC<Props> = (props) => {

    const [favor, setFavor] = React.useState<Boolean>(false);
    const [characterId] = React.useState<string>(props.data.id);
    
    const checkFavor = () => {
        let storageString = localStorage.getItem("favorites_");
        let favorList = JSON.parse(storageString === null ? "[]" : storageString);
        if (favorList?.indexOf(characterId) === -1){
            setFavor(false);
        } else {
            setFavor(true);
        }
    }

    const toggleFavor = () => {
        let storageString = localStorage.getItem("favorites_");
        let favorList = JSON.parse(storageString === null ? "[]" : storageString);
        if (favorList?.indexOf(characterId) === -1){
            favorList.push(characterId);
            setFavor(true);
        } else {
            favorList.splice(favorList?.indexOf(characterId), 1);
            setFavor(false);
        }
        localStorage.setItem("favorites_", JSON.stringify(favorList));
    }

    React.useEffect(() => {
        checkFavor();
    }, []);

    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={props.data.image} />
            <Card.Body>
                <Card.Title>
                    <a href={"/character/" + characterId}>{props.data.name}</a>
                </Card.Title>
                <Card.Text>
                    Status: {props.data.status}
                </Card.Text>
                <Card.Text>
                    Species: {props.data.species}
                </Card.Text>
                <Card.Text>
                    Gender: {props.data.gender}
                </Card.Text>
                <Button variant="outline-primary" onClick={toggleFavor}>
                    {favor ? <FaHeart/> : <FaRegHeart />}
                </Button>
            </Card.Body>
        </Card>
    );
}
