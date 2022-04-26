import React, {useState, useEffect} from 'react';
import GameList from '../components/Game/GameList';

function AdminPage( ) {

return (
    <div className='Content'>

        <h1>Hello Admin!</h1>
        <h3>You can edit, delete, or add games to any existing tables on the site!</h3> 

        <br></br>
        <h3>Complete Game Inventory</h3>
        <GameList></GameList>
        <br></br>
        <h3>Complete Wishlist</h3>
        <GameList></GameList>

    </div>
);
}

export default AdminPage;