/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import acessories from '~/assets/img/Desktop-Accessories.jpg';
import model3 from '~/assets/img/Desktop-Model3.jpg';
import modelS from '~/assets/img/Desktop-ModelS.jpg';
import modelX from '~/assets/img/Desktop-ModelX.jpg';
import modelY from '~/assets/img/Desktop-ModelY.jpg';
import roadster from '~/assets/img/Desktop-Roadster.jpg';
import cybertruck from '~/assets/img/Desktop-CyberTruck.jpg';
import solarpanels from '~/assets/img/Desktop-SolarPanels.jpg';
import solarroof from '~/assets/img/Desktop-SolarRoof.jpg';

import acessoriesMobile from '~/assets/img/Mobile-Accessories.jpg';
import model3Mobile from '~/assets/img/Mobile-Model3.jpg';
import modelSMobile from '~/assets/img/Mobile-ModelS.jpg';
import modelXMobile from '~/assets/img/Mobile-ModelX.jpg';
import modelYMobile from '~/assets/img/Mobile-ModelY.jpg';
import roadsterMobile from '~/assets/img/Mobile-Roadster.jpg';
import cyberTruckMobile from '~/assets/img/Mobile-CyberTruck.jpg';
import solarpanelsMobile from '~/assets/img/Mobile-SolarPanels.jpg';
import solarroofMobile from '~/assets/img/Mobile-SolarRoof.jpg';

const TouchlessDelivery = () => (
  <p>
    Order Online for{' '}
    <a href="https://www.tesla.com/support/delivery-options" target="_blank" rel="noopener noreferrer">
      Touchless Delivery
    </a>
  </p>
);

const TextSubTitle = ({ text }: { text: string }) => <p>{text}</p>;
// const ImgForTitle = ({ image }: { image: string }) => <p>{image}</p>;

const models = [
    {
    id: 'models',
    title: 'Model S',
    Description: <TouchlessDelivery />,
    text1: 'Custom Order',
    text2: 'Existing Inventory',
    link1: 'https://www.tesla.com/models/design',
    link2: 'https://www.tesla.com/inventory/new/ms',
    background: modelS,
    backgroundMobile: modelSMobile,
  },
   {
    id: 'model3',
    title: 'Model 3',
    Description: <TouchlessDelivery />,
    text1: 'Custom Order',
    text2: 'Existing Inventory',
    link1: 'https://www.tesla.com/model3/design',
    link2: 'https://www.tesla.com/inventory/new/m3',
    background: model3,
    backgroundMobile: model3Mobile,
  }, 
    {
    id: 'modelx',
    title: 'Model X',
    Description: <TouchlessDelivery />,
    text1: 'Custom Order',
    text2: 'Existing Inventory',
    link1: 'https://www.tesla.com/modelx/design',
    link2: 'https://www.tesla.com/inventory/new/mx',
    background: modelX,
    backgroundMobile: modelXMobile,
  },
    
  {
    id: 'modely',
    title: 'Model Y',
    Description: <TouchlessDelivery />,
    text1: 'Custom Order',
    text2: 'Learn More',
    link1: 'https://www.tesla.com/modely/design',
    link2: 'https://www.tesla.com/modely',
    background: modelY,
    backgroundMobile: modelYMobile,
  },

  {
    id: 'roadster',
    title: 'Roadster',
    Description: <TextSubTitle text="​The quickest car in the world, with record-setting acceleration, range and performance." />,
    text1: 'Reserve Now',
    text2: '',
    link1: 'https://www.tesla.com/teslaroadster/reserve',
    link2: '',
    background: roadster,
    backgroundMobile: roadsterMobile,
  },

  {
    id: 'cybertruck',
    title: 'CyberTruck',
    Description: <TextSubTitle text="​The quickest car in the world, with record-setting acceleration, range and performance." />,
    text1: 'Know More',
    text2: 'Order Now',
    link1: '',
    link2: 'https://www.tesla.com/en_ca/cybertruck/design',
    background: cybertruck,
    backgroundMobile: cyberTruckMobile,
  },

  {
    id: 'solarpanels',
    title: 'Solar Panels',
    Description: <TextSubTitle text="Lowest Cost Solar Panels In America" />,
    text1: 'Order Now',
    text2: 'Learn More',
    link1: 'https://www.tesla.com/energy/design',
    link2: 'https://www.tesla.com/solarpanels',
    background: solarpanels,
    backgroundMobile: solarpanelsMobile,
  },
  {
    id: 'solarroof',
    title: 'Solar Roofs',
    Description: <TextSubTitle text="Produce Clean Energy From Your Roof" />,
    text1: 'Order Now',
    text2: 'Learn More',
    link1: 'https://www.tesla.com/solarroof/design',
    link2: 'https://www.tesla.com/solarroof',
    background: solarroof,
    backgroundMobile: solarroofMobile,
  },
  {
    id: 'acessories',
    title: 'Accessories',
    Description: <TextSubTitle text="" />,
    text1: 'Shop Now',
    text2: '',
    link1: 'https://www.tesla.com/shop',
    link2: '',
    background: acessories,
    backgroundMobile: acessoriesMobile,
  },
];

export default models;
