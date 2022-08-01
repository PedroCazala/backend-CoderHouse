
import React from 'react'
import Item from './Item'

const List = ({frutas})=>{
    return(
     <ul className="list">
        {frutas.map((fruta, i)=>{
            return <Item fruta={fruta} key={i}/>
        })}
       {/* <Item fruta= {frutas[0]}/>
       <Item fruta= {frutas[1]}/>
       <Item fruta= {frutas[2]}/>
       <Item fruta= {frutas[3]}/> */}
     </ul>
    )
 }

export default List