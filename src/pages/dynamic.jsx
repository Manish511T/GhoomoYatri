import { useParams } from 'react-router-dom';
import tourData from '../data/tourData';

import Navbar from '../components/navbar'
import Hero from '../components/tourDetails/hero'
import Overview from '../components/tourDetails/overview'
import FamousPlaces from '../components/tourDetails/famousPlaces'
import MapSection from '../components/tourDetails/mapSection'
import CallToAction from '../components/callToAction'
import Footer from '../components/footer'
function TourDetails() {
  const { id } = useParams();
  const tour = tourData.find(t => t.id === id);

  if (!tour) return <div className='text-black'>Tour not found!</div>;

  return (
    <>
    <Navbar />
    <div className='tour-details-container flex flex-col    text-black'>
        <Hero title={tour.title} subtitle={tour.subtitle} bgImage={tour.bgImage}  />
        <Overview description={tour.overview}  />
        <div className="flex flex-col md:flex-row gap-4 py-4 px-20">
            <FamousPlaces places={tour.famousPlaces}/>
            <MapSection url={tour.mapEmbedUrl}/>
        </div>
    </div>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default TourDetails