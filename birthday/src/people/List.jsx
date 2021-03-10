import React from 'react'

function List({people}) {
    return (
        <div>
            {people.map((person)=>{
                const { id, name, age, image}=person;
                return(
                    <article className='person'>
                        <img src={image} alt={id} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                )
            })}
            
        </div>
    )
}

export default List
