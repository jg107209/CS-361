import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md'


function Game({ game, onEdit, onDelete }) {

    const editGames = async () => {
        alert("You're about to edit this game's information.  (Function N/A For Now)");
    }

    return (
        <tr>
            <td>{game.gameName}</td>
            <td>{game.gamePlatform}</td>
            <td>< MdEdit onClick={editGames}/></td>
            <td>< MdDeleteForever /></td>
        </tr>
    );
}

export default Game;