import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
export const footer = [
  {
    title: 'Support',
  },
  {
    title: 'Help Center',
  },
  {
    title: 'Privacy',
  },
  {
    title: 'Terms of Service',
  },
];

export const message = [
  {
    avatar: 'https://mira.bootlab.io/static/img/avatars/avatar-1.jpg',
    name: 'Lucy Lavender',
    content: 'Nam pretium turpis et arcu. Duis arcu tortor.',
  },
  {
    avatar: 'https://mira.bootlab.io/static/img/avatars/avatar-2.jpg',
    name: 'Remy Sharp',
    content: 'Curabitur ligula sapien euismod vitae.',
  },
  {
    avatar: 'https://mira.bootlab.io/static/img/avatars/avatar-3.jpg',
    name: 'Cassandra Mixon',
    content: 'Pellentesque auctor neque nec urna.',
  },
];

export const noti = [
  {
    avatar: <DnsOutlinedIcon color='white' fontSize='small' />,
    name: 'Update complete',
    content: 'Restart server to complete update.',
  },
  {
    avatar: <PersonAddAltOutlinedIcon color='white' fontSize='small' />,
    name: 'New connection',
    content: 'Anna accepted your request.',
  },
  {
    avatar: <NotificationsOutlinedIcon color='white' fontSize='small' />,
    name: 'Lorem ipsum',
    content: 'Aliquam ex eros, imperdiet vulputate hendrerit et.',
  },
  {
    avatar: <HomeOutlinedIcon color='white' fontSize='small' />,
    name: 'New login',
    content: 'Login from 192.186.1.1.',
  },
];
