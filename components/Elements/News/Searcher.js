import React from 'react';
import Router from 'next/router';

export default function Searcher({ clue, hideIcon }){
    
    const redirect = (event) => {
        if(event.keyCode !== 13)
            return true;


        const value = encodeURI(event.target.value);
        const query = '?page=0&search=' + value;
        Router.push('/news/search' + query);
    }

    return (
        <>
            { !hideIcon && <i className="icofont-search-2"></i> }
            <input
                type="text"
                name="search"
                className="form-control"
                id="search"
                placeholder="Buscar"
                defaultValue={decodeURI(clue || '')}
                onKeyDown = { event => redirect(event) }
            />
        </>
    )
}