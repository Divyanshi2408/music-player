import React from 'react'
import { Navbar } from './common/Navbar';
import { RoutesComponent } from './routes/routes';
import { WeeklyTopSongsPage } from './pages/WeeklyTopSongsPage';
import { HomePage } from './pages';
import { NewRelease } from './pages/NewRelease';

import ArtistGallery from "./pages/ArtistGallery";
import TrendingSongs from './pages/TrendingSongs';
import Footer from './common/Footer';

const App = () => {
const artistMbids = [
  "b95ce3ff-3d05-4e87-9e01-c97b66af13d4",
  "95e1ead9-4d31-4808-a7ac-32c3614c116b", 
  "cc197bad-dc9c-440d-a5b5-d52ba2e14234",
  "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
  "cc2c9c3c-b7bc-4b8b-84d8-4fbd8779e493", 
  "5b11f4ce-a62d-471e-81fc-a69a8278c7da", 
  "83d91898-7763-47d7-b03b-b92132375c47",
  "06fb1c8b-566e-4cb2-985b-b467c90781d4", 
  "f90e8b26-9e52-4669-a5c9-e28529c47894", 
  "53b106e7-0cc6-42cc-ac95-ed8d30a3a98e", 
  "f27ec8db-af05-4f36-916e-3d57f91ecf5e"  
];

 return(
 <>
 <Navbar/>
 <HomePage/>
 <WeeklyTopSongsPage/>
 <NewRelease/>
 <TrendingSongs/>
<ArtistGallery artistMbids={artistMbids} />
<Footer/>
 <RoutesComponent/>
 </>
 )
}
export default App;