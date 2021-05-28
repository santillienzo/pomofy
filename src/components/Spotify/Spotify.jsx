import React from 'react';
import './spotify.css'

import album from '../../assets/images/album.jpg'

const Spotify = (props) => {
    return (
        <div className="spoty-container" style={props.style}>

            <div className="song-container">
                <div className="song-container--image">
                    <img src={album} alt="" />
                </div>
                <div className="song-container--name">
                    <h5>99 Revolution</h5>
                    <h6>Green Day</h6>
                </div>
            </div>

            <div className="reproductor-container">
                <i className="fas fa-step-backward"></i>
                <i className="fas fa-play-circle "></i>
                <i className="fas fa-step-forward"></i>
            </div>
        </div>
    );
};

export default Spotify;