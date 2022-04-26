import React from 'react';
import Game from './Game';
import {MdDeleteForever, MdEdit} from 'react-icons/md'

function GameList({ }) {

    const editGames = async () => {
        alert("You're about to edit this game's information.  (Function N/A For Now)");
    }

    const deleteGames = async () => {
        alert("You're about to delete this game from the inventory.  (Function N/A For Now)");
    }

    return (
        <>
            <table id="games">
                <thead>
                    <tr>
                        <th>Game Name</th>
                        <th>Game Platform</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Horizon: Forbidden West</td>
                        <td>PS5</td>
                        <td><MdEdit onClick={editGames}/></td>
                        <td><MdDeleteForever onClick={deleteGames}/></td>
                    </tr>
                    <tr>
                        <td>Gran Turismo 7</td>
                        <td>PS5</td>
                        <td><MdEdit onClick={editGames}/></td>
                        <td><MdDeleteForever onClick={deleteGames}/></td>
                    </tr> 
                    <tr>
                        <td>Forza Horizon 5</td>
                        <td>Xbox Series X</td>
                        <td><MdEdit onClick={editGames}/></td>
                        <td><MdDeleteForever onClick={deleteGames}/></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default GameList;