import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './MainPage.module.scss'
import { Header } from '../../Header/Header';

const MainPage = () => {

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.textcontent}>
          <div className={s.text1}>НАГРАДЫ САМАРСКОЙ ОБЛАСТИ</div>
          <div className={s.text2}>Наша область гордится своими успешными и надежными работниками, которые способствуют развитию экономики и социальной сферы. Именно поэтому здесь мы приводим перечень наград, которые, при соблюдении определенных требований, может получить каждый.</div>
          <NavLink className={s.navlink} to="/allawards">Ознакомиться со списком наград</NavLink>
        </div>
        <img src="https://alrf63.ru/images/2022/05/27/g.jpg"/>
      </div>
    </div>
  );
}


export default MainPage;


{/* </div>
                <div className="e15_321">
                    <NavLink to="/allawards">
                        <div className="e5_201"><span className="e5_200">Ознакомиться со списком наград</span></div></NavLink>
                    <span className="e5_202">
                        НАГРАДЫ САМАРСКОЙ ОБЛАСТИ
                    </span><span className="e5_203">Наша область гордится своими успешными и надежными работниками, которые способствуют развитию экономики и социальной сферы. Именно поэтому здесь мы приводим перечень наград, которые, при соблюдении определенных требований, может получить каждый.</span>
                </div>

                <div className="e15_414"></div>
            </div> */}