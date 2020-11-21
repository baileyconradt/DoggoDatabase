import react, { useEffect, useState } from 'react'
import { Card, Image, Modal } from 'react-bootstrap'

function getCorg() {
    fetch('https://dog.ceo/api/breed/pembroke/images/random')
    .then(res => res.json())
    .then(res => {
        console.log(res.message)
        return res.message;
    })
}



export default function DogCard(props) {
    
    const [dogLink, updateLink] = useState('')
    const [show, setShow] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breed/pembroke/images/random')
    .then(res => res.json())
    .then(res => {
        //console.log(res.message)
        updateLink(res.message)
    })
    }, [])

    return <div className='m-3 shadow dogCardParent'>
        <Image variant='top' className='dogCard'  src={dogLink} onClick={() => {setShow(true)}}>
        </Image>
        <p className='dogCardName'>Flufferbottom</p>

    <Modal show={show} onHide={() => setShow(false)}>
        <div>
            <Image src={dogLink} width='100%' />
        </div>
        <div className='m-3'>
            <h3>Luna</h3>
            <small className='text-muted'><p>Pembroke Welsh Corgi owned by Bailey C.</p></small>
            <p>Look at this cute pupper go. She loves to zoom around the yard when Bailey takes her outside. She also loves long walks along the Fox River.</p>
        </div>
    </Modal>

    </div>
}