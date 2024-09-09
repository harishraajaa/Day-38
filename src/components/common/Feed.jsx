import React from 'react'
import { Card } from 'react-bootstrap'

function Feed({data}) {
    const {name,description,image,ingredients,author} = data
  return <div className='recipe-children'>
    <Card style={{ width: '30rem',height:'30rem'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
            <b>Ingredients: </b>{ingredients.join(",")}
        </Card.Text>
        <Card.Text>
            <b>Author: {author}</b>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
}

export default Feed