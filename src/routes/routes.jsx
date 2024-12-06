import { WeeklyTopSongsPage,AboutPage, ContactPage, HomePage,
   } from "../pages";
    import { Routes, Route } from "react-router-dom";
    export const RoutesComponent = () => {
     return(
     <Routes>
     <Route path="home" element={<HomePage/>}/>
     <Route path="about" element={<AboutPage/>}/>
     <Route path="weekly" element={<WeeklyTopSongsPage/>}/>
     <Route path="contact" element={<ContactPage/>}/>

     {/* <Route path="*" element={<ErrorPage/>}/> */}
     </Routes>
     )
    }