//import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'

 import Header from './component/header';
import Footer from './component/footer';
import StudentProfile from './component/profile';

 import './App.css';

function App() {
    return (
        <>
            
            <Header />
            <StudentProfile />
            <Footer />
        </>
    );
}

export default App;
