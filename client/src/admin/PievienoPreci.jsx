import React, { useState, useEffect } from 'react'
import { Button } from '@material-tailwind/react'
import { Card, Form, InputGroup } from 'react-bootstrap';
import NavbarAdmin from './NavbarAdmin'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { productsR, deleteR, searchR } from '../utils/APIRoutes'


const PievienoPreci = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const prece = async () => {
      const result = await fetch(`${productsR}`)
      const jsonResult = await result.json()

      setData(jsonResult)
    }

    prece()
  }, [])

  const [produkti, setProdukti] = useState([])
  const deletePrece = id => {
    axios.delete(`${deleteR}${id}`)
      .then(res => alert(res.data))
    setProdukti(produkti.filter(elem => elem._id !== id))
  }

  const [searchRes, setSearchRes] = useState([])
  const [key, setKey] = useState('')
  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          setSearchRes([])
          return
        }
        const res = await axios.get(`${searchR}`, { params: { key: key, limit: 5 } })
        setSearchRes(res.data.data)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    search()
  }, [key])

  return (
    <>
      <NavbarAdmin />

      <div className='lg:flex'>
        <div className=' relative'>
          <div className='shadow-xl bg-gray-300 flex flex-col p-3 rounded-xl w-[400px] mr-3' >
            <InputGroup className="max-w-xl font-semibold mb-3">
              <Form.Control
                placeholder="Meklēt" type='search' onChange={(e) => setKey(e.target.value)} value={key}
              />
            </InputGroup>
            {searchRes && searchRes.length > 0 && (
              <div>
                {searchRes.map(produkti => (
                  <div className="md:flex" key={produkti._id}>
                    <div className="md:flex-shrink-0">
                      <img className="rounded-lg md:w-28 max-h-28" src={`../../public/uploads/${produkti.Attels}`} />
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <div className="uppercase tracking-wide text-sm font-bold">
                        {produkti.Nosaukums}
                      </div>
                      <p className="mt-2 text-gray-600">
                        {produkti.Apraksts}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className='grid xl:grid-cols-4 lg:grid-cols-3 mb-5 gap-8 w-auto'>

          {data.map(produkti =>
            <Card className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
              <Card.Img variant="top" src={`../../public/uploads/${produkti.Attels}`} className='p-3 w-[2000px] h-[400px]' />
              <Card.Body>
                <Link to={{
                  pathname: `${productsR}${produkti._id}`
                }}>
                  <Card.Title className=' text-center'>{produkti.Nosaukums}</Card.Title>
                </Link>
                <Card.Text className='border-b-[1px] border-gray-500 pb-3'>
                  Apraksts: {produkti.Apraksts}
                </Card.Text>
                <Card.Text className='border-b-[1px] border-gray-500 pb-3'>
                  Krāsa: {produkti.Krasa}
                </Card.Text>
                <Card.Text className='border-b-2 border-gray-500 pb-3'>
                  Cena: {produkti.Cena}€
                </Card.Text>
                <div className='d-grid flex'>
                  <a className='rounded-full bg-blue-700 text-white text-center font-medium my-2' href={`EditPreces/update/${produkti._id}`}>
                    <Button variant="dark" className='py-1 my-2'>Labot</Button>
                  </a>
                  <Button onClick={() => deletePrece(produkti._id)} className='rounded-full bg-red-700 text-white  py-2 font-medium my-2'>Izdzēst</Button>
                </div>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </>
  )
}

export default PievienoPreci