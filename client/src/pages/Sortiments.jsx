import React, { useState, useEffect } from 'react'
import { Container, Form, InputGroup, Card } from 'react-bootstrap';
import { Button } from '@material-tailwind/react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { productsR, searchR } from '../utils/APIRoutes'

const Sort = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const prece = async () => {
      const result = await fetch(`${productsR}`)
      const jsonResult = await result.json()

      setData(jsonResult)
    }

    prece()
  }, [])

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

      <Container fluid>

        <div className='shadow-xl bg-gray-300 flex flex-col p-3 my-5 rounded-xl'>
          <h1 className='text-center font-bold text-2xl mb-4'>Kategorijas</h1>
          <div className='flex flex-row gap-4 justify-center'>

            <DropdownButton title="Dzimums" className='bg-black text-white rounded-lg '>
              <Dropdown.Item>Sieviešu</Dropdown.Item>
              <Dropdown.Item>Vīriešu</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title="Krāsa" className='bg-black text-white rounded-lg'>
              <Dropdown.Item className='font-semibold'>Balta</Dropdown.Item>
              <Dropdown.Item className='font-semibold'>Melna</Dropdown.Item>
              <Dropdown.Item className='text-blue-600 font-semibold'>Zila</Dropdown.Item>
              <Dropdown.Item className='text-green-600 font-semibold'>Zaļa</Dropdown.Item>
              <Dropdown.Item className='text-yellow-600 font-semibold'>Dzeltena</Dropdown.Item>
              <Dropdown.Item className='text-orange-600 font-semibold'>Oranža</Dropdown.Item>
              <Dropdown.Item className='text-gray-600 font-semibold'>Pelēka</Dropdown.Item>
              <Dropdown.Item className='text-violet-600 font-semibold'>Violēta</Dropdown.Item>
              <Dropdown.Item className='text-fuchsia-600 font-semibold'>Roza</Dropdown.Item>
              <Dropdown.Item className='text-red-600 font-semibold'>Sarkana</Dropdown.Item>
              <Dropdown.Item className='text-blue-600 font-semibold'>Brūna</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title="Papildus" className='bg-black text-white rounded-lg'>
              <Dropdown.Item>Apavi</Dropdown.Item>
              <Dropdown.Item>Aksesuāri</Dropdown.Item>
              <Dropdown.Item>Veļa</Dropdown.Item>
            </DropdownButton>

          </div>
        </div>

        <div className='lg:flex'>
          <div className=' relative'>
            <div className='shadow-xl bg-gray-300 flex flex-col p-3 rounded-xl w-[400px] mr-3' >
              <h1 className='text-center font-bold text-2xl mb-4'>Kategorijas</h1>
              <div className='flex gap-3'>
                <Form.Check type="checkbox" /><span>Vīriešu</span>
                <Form.Check type="checkbox" /><span>Vīriešu</span>
                <Form.Check type="checkbox" /><span>Vīriešu</span>
                <Form.Check type="checkbox" /><span>Vīriešu</span>
              </div>
            </div>
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

          <div className='grid xl:grid-cols-4 lg:grid-cols-3 mb-5 gap-8 max-w-auto'>
            {data.map(produkti =>
              <Card value='apavi' className='bg-gray-300 lg:mb-0 md:mb-3 xl:w-auto lg:w-auto md:w-[500px] mx-auto'>
                <Card.Img variant="top" src={`../../public/uploads/${produkti.Attels}`} className='p-3 w-[2000px] h-[400px]' />
                <Card.Body>
                  <Card.Title className=' text-center'>{produkti.Nosaukums}</Card.Title>
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
                    <a className='rounded-full bg-black text-white text-center font-medium my-2' href={`/Produkts/${produkti._id}`}>
                      <Button variant="dark" className='py-2 my-2'>Apskatīt</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            )}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Sort