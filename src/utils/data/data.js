import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import WebIcon from '@mui/icons-material/Web';
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

export const sidebar = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <TuneIcon size='small' />,
    data: [
      {
        id: 1,
        itemValue: 'Default',
      },
      {
        id: 2,
        itemValue: 'Analytics',
      },
      {
        id: 3,
        itemValue: 'SaaS',
      },
    ],
  },
  {
    id: 2,
    title: 'Pages',
    icon: <WebIcon size='small' />,
    data: [
      {
        id: 4,
        itemValue: 'Profile',
      },
      {
        id: 5,
        itemValue: 'Settings',
      },
      {
        id: 6,
        itemValue: 'Pricing',
      },
      {
        id: 7,
        itemValue: 'Chat',
      },
      {
        id: 8,
        itemValue: 'Blank Page',
      },
    ],
  },
];

export const chatsidebar = [
  {
    avatar: 'https://mira.bootlab.io/static/img/avatars/avatar-1.jpg',
    name: 'Lucy Lavender',
    content: 'Sent a photo',
    iOnline: true,
  },
  {
    avatar: 'https://mira.bootlab.io/static/img/avatars/avatar-2.jpg',
    name: 'Remy Sharp',
    content: 'Coffee ?',
    iOnline: true,
  },
  {
    avatar: 'https://mira.bootlab.io/static/img/avatars/avatar-3.jpg',
    name: 'Cassandra Mixon',
    content: 'Hello! 👋',
    iOnline: false,
  },
];

export const chatcontent = [
  {
    avatar: 'https://mira.bootlab.io/static/img/avatars/avatar-2.jpg',
    name: 'Remy Sharp',
    content:
      'Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.',
    time: '20 minutes ago',
    id: 1,
  },
  {
    avatar: 'https://mira.bootlab.io/static/img/avatars/avatar-1.jpg',
    name: 'You',
    content:
      'Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.',
    time: '12 minutes ago',
    id: 2,

  },
  {
    avatar: 'https://mira.bootlab.io/static/img/avatars/avatar-2.jpg',
    name: 'Remy Sharp',
    content: 'Cum ea graeci tractatos. 😄',
    time: '8 minutes ago',
    id: 1,

  },
  {
    avatar: 'https://mira.bootlab.io/static/img/avatars/avatar-1.jpg',
    name: 'You',
    content:
      'Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci. 👍',
    time: '5 minutes ago',
    id: 2,
  },
  {
    avatar: 'https://mira.bootlab.io/static/img/avatars/avatar-2.jpg',
    name: 'Remy Sharp',
    content:
      'Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.',
    time: '3 minutes ago',
    id: 1,
  },
];
