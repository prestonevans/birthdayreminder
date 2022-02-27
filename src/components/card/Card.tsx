import './Card.css'
import { birthdays as data } from '../../data/birthdays'
import { useState } from 'react'

export default function Card() {
    const [ birthdays, setBirthdays] = useState(data)

    function clearBirthdayHandler() {
        setBirthdays([])
    }

    return (
        <article>
            <h1>{birthdays.length} birthdays today</h1>
            {birthdays.map(person => {
                return (
                    <div key={person.id} className="row">
                        <img src={person.image} alt="Profile Pic" />
                        <div className="person-info">
                            <h2>{person.name}</h2>
                            <span>{person.age} years</span>
                        </div>
                    </div>
                )
            })}
            <button onClick={clearBirthdayHandler}>clear all</button>
        </article>
    )
}