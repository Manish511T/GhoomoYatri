import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import internationalDestinations from '../data/internationalData';
import domesticDestinations from '../data/domesticData';
import Hero from '../components/tourDetails/hero'
import Overview from '../components/tourDetails/overview';
import FamousPlaces from '../components/tourDetails/famousPlaces'
import MapSection from '../components/tourDetails/mapSection'
import CallToAction from '../components/callToAction'
import Footer from '../components/footer'


const DestinationDetails = () => {
  const { id } = useParams();
  const allDestinations = [...internationalDestinations, ...domesticDestinations];
  const destination = allDestinations.find(d => d.id.toString() === id);


  if (!destination) return <div className='text-black text-center mt-20'>Destination not found.</div>;

  return (
    <>
      <Navbar />

      <Hero title={destination.title} subtitle={destination.subtitle} bgImage={destination.image} />

      <Overview description={destination.overview} intro={destination.intro} />

      <div className=" flex flex-col  md:flex-row gap-4 py-4 px-20 text-black">
        <FamousPlaces places={destination.famousPlaces} />
        <MapSection url={destination.mapEmbedUrl} />
      </div>

      <CallToAction />
      <Footer />
    </>
  );
};

export default DestinationDetails;
