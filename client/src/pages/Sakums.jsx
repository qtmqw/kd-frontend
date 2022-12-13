import React from 'react'
import Drebes1 from '../assets/drebes1.jpg';
import Drebes2 from '../assets/drebes2.jpeg'
import Drebes3 from '../assets/drebes3.jpeg'
import Drebes4 from '../assets/drebes4.jpeg'
import Drebes5 from '../assets/drebes5.jpeg'
import { Button, Card, Carousel, Container } from 'react-bootstrap';


const Saak = () => {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item >
          <img
            className="d-block w-full 2xl:h-[1000px] xl:h-[700px] lg:h-[400px] md:h-[300px] sm:h-[180px]"
            src={Drebes4}
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-full 2xl:h-[1000px] xl:h-[700px] lg:h-[400px] md:h-[300px] sm:h-[180px]"
            src={Drebes3}
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-full 2xl:h-[1000px] xl:h-[700px] lg:h-[400px] md:h-[300px] sm:h-[180px]"
            src={Drebes5}
          />
        </Carousel.Item>
      </Carousel>

      <div className='xl:max-w-[1800px] mx-auto xl:flex pt-20'>
          <img className='w-auto h-full mx-auto object-none' src={Drebes1} />
        <div className='w-full flex flex-col justify-center text-sm ml-5 '>
          <h1 className=' lg:text-3xl sm:text-3xl text-3xl font-bold py-2'>SIA Abika vairumtirdzniecības noliktava piedāvā sieviešu, vīriešu apģērbu un veļu!</h1>
          <p className=' text-xl'>
            Mūsu klienti ir dažādi tirdzniecības uzņēmumi, sākot no individuāliem komersantiem līdz veikalu tīkliem. Iepirkties SIA Abika ir izdevīgi, jo:
            <p className=' text-xl'><p className='font-bold'>1. Jūs ietaupāt laiku.</p>Salīdzinot ar iepirkšanos ārvalstīs, kur gan ceļā gan iepērkoties jāpatērē ilgs laiks, SIA Abika papildināt preču krājumus var stundas vai dažu desmitu minūšu laikā.</p>
            <p className=' text-xl'><p className='font-bold'>3. Prece atbilst LR likumdošanas prasībām.</p>SIA Abika apģērbiem ir piestiprinātas uzlīmes latviešu valodā ar preces nosaukumu, ražotājvalsti un citu nepieciešamo informāciju.</p>
            <p className=' text-xl'><p className='font-bold'>4. Jūs ietaupāt transporta izdevumus.</p>Latvijas klientiem ceļš līdz Rīgai ir īsāks nekā līdz citu valstu galvaspilsētām un lielpilsētām.</p>
          </p>
        </div>
      </div>

      <Container fluid className='2xl:w-auto xl:w-auto mx-auto py-[5rem]'>
        <div className='lg:flex gap-8 mb-5 xl:max-w-[1400px]  mx-auto'>

          <Card className='hover:scale-105 duration-300 bg-gray-300 lg:mb-0 md:mb-[50px] 2xl:w-[600px] xl:w-[400px] md:w-[550px] mx-auto'>
            <Card.Img variant="top" src={Drebes2} className='p-3' />
            <Card.Body>
              <Card.Title className=' text-center border-b-2 border-gray-500 pb-3'>Sieviešu apģērbi</Card.Title>
              <div className='d-grid'>
                <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
              </div>
            </Card.Body>
          </Card>

          <Card className='hover:scale-105 duration-300 bg-gray-300 lg:mb-0 md:mb-[50px] 2xl:w-[600px] xl:w-[400px] md:w-[550px] mx-auto'>
            <Card.Img variant="top" src={Drebes2} className='p-3' />
            <Card.Body>
              <Card.Title className=' text-center border-b-2 border-gray-500 pb-3'>Vīriešu apģērbi</Card.Title>
              <div className='d-grid'>
                <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
              </div>
            </Card.Body>
          </Card>

          <Card className='hover:scale-105 duration-300 bg-gray-300 2xl:w-[600px] xl:w-[400px] md:w-[550px] mx-auto'>
            <Card.Img variant="top" src={Drebes2} className='p-3' />
            <Card.Body>
              <Card.Title className=' text-center border-b-2 border-gray-500 pb-3'>Veļa</Card.Title>
              <div className='d-grid'>
                <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
              </div>
            </Card.Body>
          </Card>

        </div>

        <div className='lg:flex gap-8 2xl:max-w-[1300px] xl:max-w-[900px] lg:max-w-[650px] mx-auto'>

          <Card className='hover:scale-105 duration-300 bg-gray-300 lg:mb-0 md:mb-[50px] 2xl:w-[600px] xl:w-[400px] lg:w-[300px] md:w-[550px] mx-auto'>
            <Card.Img variant="top" src={Drebes2} className='p-3' />
            <Card.Body>
              <Card.Title className=' text-center border-b-2 border-gray-500 pb-3'>Apavi</Card.Title>
              <div className='d-grid'>
                <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
              </div>
            </Card.Body>
          </Card>

          <Card className='hover:scale-105 duration-300 bg-gray-300 2xl:w-[600px] xl:w-[400px] lg:w-[300px] md:w-[550px] mx-auto'>
            <Card.Img variant="top" src={Drebes2} className='p-3' />
            <Card.Body>
              <Card.Title className=' text-center border-b-2 border-gray-500 pb-3'>Aksesuāri</Card.Title>
              <div className='d-grid'>
                <Button variant="dark" size="lg" className='rounded-full bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
              </div>
            </Card.Body>
          </Card>

        </div>
      </Container>
    </Container>


  )
}

export default Saak