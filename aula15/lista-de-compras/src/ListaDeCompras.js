import React from 'react';
import Item from './Item'

function ListaDeCompras(){
    return(
        <>
        <h1> Lista de Compras </h1>
            <Item nome="Arroz"/>
            <Item nome="Feijão"/>
            <Item nome="Leite"/>
            <Item nome="Ovo"/>
            <Item nome="bolacha"/>
        </>
    )
}

export default ListaDeCompras;