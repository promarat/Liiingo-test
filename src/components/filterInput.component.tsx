import * as React from "react";
import { ChangeEvent } from "react";
import { Form } from 'react-bootstrap';

interface Props {
    filterType: string;
    onChange: (_value:string) => void;
}

export const FilterInput: React.FC<Props> = (props) => {

    const filterCharacterByType = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    }

    return (
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Filter By {props.filterType}</Form.Label>
            <Form.Control type="text" placeholder={"Filter By" + props.filterType} onChange={filterCharacterByType} />
        </Form.Group>
    );
}
