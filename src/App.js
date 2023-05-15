import { Header } from './Components/Header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage/MainPage';
import AllAwards from './Components/Pages/AllAwards/AllAwards';
import AwardsCard from './Components/Pages/AwardsCard/AwardsCard';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

const App = () => {
  const location = useLocation();
  let awardsData = [
    { id: 1, nameAward: "Почётный гражданин Самарской области", imgAward: "https://www.gc-semya.ru/upload/image/dscn8609.jpg", description: "Эта награда выдается за...", conrec: "Условия получения: 1" },
    { id: 2, nameAward: "За заслуги перед Самарской областью", imgAward: "https://tvsamara.ru/media/news/1403-07122020.jpg", description: "Эта награда выдается за...", conrec: "Условия получения: 2" },
    { id: 3, nameAward: "Заслуженный артист Самарской области", imgAward: "https://www.niasam.ru/85974_i_gallerybig.jpg", description: "Эта награда выдается за...", conrec: "Условия получения: 3" },
    { id: 4, nameAward: "Почетный знак Трудовой Славы", imgAward: "https://ort-tv.ru/wp-content/uploads/2020/07/горд-трудовой-доблести-768x1152.jpg", description: "Эта награда выдается за...", conrec: "Условия получения: 4" },
    { id: 5, nameAward: "Знак отличия Князя Григория Засекина", imgAward: "https://r4.mt.ru/r15/photo6442/20983681289-0/png/bp.jpeg", description: "Эта награда выдается за...", conrec: "Условия получения: 5" },
    { id: 6, nameAward: "Почётный гражданин Самарской области", imgAward: "https://www.gc-semya.ru/upload/image/dscn8609.jpg", description: "Эта награда выдается за...", conrec: "Условия получения: 6" },
    { id: 7, nameAward: "Почётный гражданин Самарской области", imgAward: "https://www.gc-semya.ru/upload/image/dscn8609.jpg", description: "Эта награда выдается за...", conrec: "Условия получения: 7" }
  ]
  return (
    <>
      <Header />
      <div className="container">
        <TransitionGroup>
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
          >
            <Routes location={location}>
              <Route path="/" element={<MainPage />} />
              <Route path="/allawards" element={<AllAwards data={awardsData} />} />
              <Route path="/award/:id" element={<AwardsCard data={awardsData} />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default App;