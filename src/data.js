import tourImg1 from '../src/images/tour-1.jpeg';
import tourImg2 from '../src/images/tour-2.jpeg';
import tourImg3 from '../src/images/tour-3.jpeg';
import tourImg4 from '../src/images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.instagram.com', icon: 'fab fa-instagram' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
];

export const toursData = [
  {
    id: 1,
    image: tourImg1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tourImg2,
    date: 'october 1th, 2020',
    title: 'Explore Hong Kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'china',
    duration: 7,
    cost: 2500,
  },
  {
    id: 3,
    image: tourImg3,
    date: 'august 26th, 2020',
    title: 'Best of Java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'china',
    duration: 5,
    cost: 1800,
  },
  {
    id: 4,
    image: tourImg4,
    date: 'august 26th, 2020',
    title: 'Discover Indonesia',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'china',
    duration: 5,
    cost: 1700,
  },
];
