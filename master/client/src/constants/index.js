import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';


export const navlinks = [
  {
    name: 'home',
    imgUrl: dashboard,
    link: '/',
    disabled: false,
    text: 'Home'
  },
  {
    name: 'criar campanha',
    imgUrl: createCampaign,
    link: '/create-campaign',
    disabled: false,
    text: 'Criar'
  },
  {
    name: 'pagamentos',
    imgUrl: payment,
    link: '/cash',
    disabled: true,
    disabled: false,
    text: 'Cash'
  },
  {
    name: 'perfil',
    imgUrl: profile,
    link: '/profile',
    disabled: false,
    text: 'Perfil'
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
    text: 'Logout'
  },

  
];


