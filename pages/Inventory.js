import React, {useState, useEffect} from 'react';
import GameList from '../components/Game/GameList';
import { Navigate } from 'react-router-dom';

function Inventory( {setGameToEdit} ) {

    return (
        <div className='Content'>

            <h1> Welcome to your game inventory!</h1>
            <h3>Fill in the boxes and click "add" to add a game.</h3> 
            <h3>Click the pencil icon to edit or the trash can to delete.</h3> 

            <br></br>
            <GameList></GameList>

        </div>
    );
}

export default Inventory;