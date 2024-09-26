import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

function Note({onClick, note, cardBg}) {

    const [cardcolor, setCardColor] = useState();

    useEffect(() => {
        !cardcolor && setCardColor(cardBg)
    }, [cardcolor]);

    return (
        <div className={`card ${cardcolor}`}>
            <div className="card-header">
                <div className='edit-icon'>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>


                <div className="delete-icon">
                    <FontAwesomeIcon onClick={() => onClick(note.id)} icon={faTrash} />
                </div>
            </div>

            <div className="card-body">
                <textarea className='textarea'></textarea>
            </div>
        </div>
    )
}

export default Note