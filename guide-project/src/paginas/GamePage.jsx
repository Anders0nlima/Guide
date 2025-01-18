import React from 'react'
import mapaBelem from "../components/imagem/belemMedia.png"

function GamePage(){
    return(
        <div className="gamification-container">
        <h1>Mapa Turístico da Cidade</h1>
        <p>Clique nos pontos turísticos para ganhar pontos!</p>
        <div className="map-container">
          <img 
            src={mapaBelem} 
            alt="Mapa da cidade" 
            className="city-map" 
          />
          <div 
            className="map-icon" 
            style={{ top: '30%', left: '40%' }} 
            onClick={() => handleIconClick('Museu Histórico')}
          >
            🏛️
          </div>
          <div 
            className="map-icon" 
            style={{ top: '50%', left: '20%' }} 
            onClick={() => handleIconClick('Praça Central')}
          >
            🌳
          </div>
          <div 
            className="map-icon" 
            style={{ top: '70%', left: '60%' }} 
            onClick={() => handleIconClick('Teatro Municipal')}
          >
            🎭
          </div>
        </div>
      </div>
    )
}

export default GamePage

