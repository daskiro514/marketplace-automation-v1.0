import React from 'react'
import TileItem from './TileItem'

const Tiles = ({ tiles }) => {

  return (
    <div className='row'>
      {tiles.map((tile, index) => 
        <TileItem key={index} title={tile.title} content={tile.content} />
      )}
    </div>
  )
}

export default Tiles