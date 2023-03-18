import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';


export const navlinks = [
  {
    name: 'home',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'criar campanha',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'pagamentos',
    imgUrl: payment,
    link: '/',
    disabled: true,
  },
  {
    name: 'perfil',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },

  
];
