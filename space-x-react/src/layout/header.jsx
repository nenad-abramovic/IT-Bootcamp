import React from 'react';
import { getCompanyInfo } from '../utilities/space-x-service';

export const Header = (props) => {
    let {
        name,
        founder,
        founded,
        ceo,
        summary 
    } = props.info;
    return (
        <header>
            <h1>{name}</h1>
            <label>{founded}</label>
            <label>{founder}</label>
            <label>{ceo}</label>
            <label>{summary}</label>
        </header>
    );
}