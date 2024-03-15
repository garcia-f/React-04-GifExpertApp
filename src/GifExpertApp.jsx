import { useState } from 'react'
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = () => {
    setCategories([ 'Valorant', ...categories ]);   // el ... es el operador espread
  }

  return (
    <>
    {/* titutlo */}
    <h1>GifExpertApp</h1>

    {/* input */}
    <AddCategory setCategories={ setCategories } />


    {/* listado de items */}
   
    <ol>
      { 
        categories.map( category => {
          return <li key={ category }>{category}</li>
        }) 
      }
      {/* <li>ABC</li> */}
    </ol>
      {/* gif item */}

    </>
  )
}
