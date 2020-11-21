import React from 'react';
import Button from '@material-ui/core/Button';

import './MainPage.scss';

const MainPage = () => (
  <div className="main-page">
    <div className="main-page__content">
      <div className="main-page__top">
        <div className="main-page__title">
          Модель
          <br />
          Солнечной системы
        </div>
      </div>
      <div className="main-page__bottom">
        <div className="main-page__subtitle">
          Приветствую вас на проекте Солнечной системы. Данный проект был разработан в рамках
          курсовой работы по компьютерной графике. На сайте вы найдете краткое, но интересное
          описание всех 9 планет нашей Солнечной системы.
        </div>
        <div className="main-page__button">
          <Button variant="outlined">Начать исследовать</Button>
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
