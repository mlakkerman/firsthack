import { Header } from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage/MainPage';
import AllAwards from './Components/Pages/AllAwards/AllAwards';
import AwardsCard from './Components/Pages/AwardsCard/AwardsCard';

function App() {
  let awardsData = [
    { id: 1, nameAward: "Почётный гражданин Самарской области", imgAward: "https://www.gc-semya.ru/upload/image/dscn8609.jpg" },
    { id: 2, nameAward: "За заслуги перед Самарской областью", imgAward: "https://tvsamara.ru/media/news/1403-07122020.jpg" },
    { id: 3, nameAward: "Заслуженный артист Самарской области", imgAward: "https://www.niasam.ru/85974_i_gallerybig.jpg" },
    { id: 4, nameAward: "Почетный знак Трудовой Славы", imgAward: "https://ort-tv.ru/wp-content/uploads/2020/07/горд-трудовой-доблести-768x1152.jpg" },
    { id: 5, nameAward: "Знак отличия Князя Григория Засекина", imgAward: "https://r4.mt.ru/r15/photo6442/20983681289-0/png/bp.jpeg" },
    { id: 6, nameAward: "Почётный гражданин Самарской области", imgAward: "https://www.gc-semya.ru/upload/image/dscn8609.jpg" },
    { id: 7, nameAward: "Почётный гражданин Самарской области", imgAward: "https://www.gc-semya.ru/upload/image/dscn8609.jpg" }   
]
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/allawards' element={<AllAwards data={awardsData}/>}/>
        <Route path='/award/:id' element={<AwardsCard data={awardsData}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;