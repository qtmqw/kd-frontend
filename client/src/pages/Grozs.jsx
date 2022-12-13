import React from 'react'
import { Container } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert';

const Groz = () => {
  return (
    <Container fluid className='max-w-[2000px]'>
      <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold pt-[90px] text-center my-5 '>Grozs</h1>
      <div className='py-[200px]'>
        <div className='w-full mb-4 bg-gray-300 p-10 rounded-lg'>
          <h1 className='font-bold mx-auto md:text-4xl sm:text-3xl text-3xl py-2 mb-5'>Pieslēgties</h1>
          <form>
            <Alert variant='primary'>
              Grozā nav ievietos neviena prece!
            </Alert>
          </form>
          <button className='bg-black text-white w-auto rounded-md font-medium my-2 px-10 py-3'><a href="#">Pirkt</a></button>
        </div>
      </div>
    </Container>
  )
}

export default Groz