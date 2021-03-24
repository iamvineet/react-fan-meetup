import React from 'react'
import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';


import FavoritesContext from '../store/favorites-context';

export default function FavoritesPage() {

    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>No Favorites yet. Add some.</p>
    }
    else{
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}
