import React from 'react'
import Card from './Card';
import { faker } from '@faker-js/faker';
import Comment from './Comment';
const App = () => {
  return (
    <div className="ui comments" style={{
      paddingTop:"10px",
      paddingLeft:"10px"
    }}>
      <Card>
      <Comment name="Ezgi Süne" comment="Java" stars="5" avatar={faker.image.avatar()}/>
      
      </Card>
      <Card>
      <Comment name="Eser Süne" comment ="React" stars="2" avatar={faker.image.avatar()}/>
      </Card>
</div>
  )
}
export default App