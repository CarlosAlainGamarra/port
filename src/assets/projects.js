import port from './images/port.jpg'
import shop from './images/shop.jpg'
import movies from './images/movies.jpg'
import blog from './images/blog.jpg'
import felika from './images/felika.jpg'



const projects = [
    {
        title: 'Blog',
        image: blog,
        description: 'This is a blog application for an independent publishing house. It is composed of various reusable and scalable components.',
        techs: ['React', 'Css', 'Router-Dom', 'carousel', 'cart', 'sweetAlert2'],
        url: '',
        git: 'https://github.com/CarlosAlainGamarra/editorial',
    },
    {
        title: 'Felika',
        image: felika,
        description: 'This is the website for a novel. It features a news section, a post board, authentication login and user access through an API.',
        techs: ['React', 'Css', 'CRUD', 'Router-Dom', 'Authentication', 'Formik', 'Yup', 'sweetAlert2'],
        url: 'https://cgprojectsfelika.web.app/',
        git: 'https://github.com/CarlosAlainGamarra/felika',
    },
    {
        title: 'Movies',
        image: movies,
        description: 'This is a movies application. It receives the catalog from an API and distributes the information to different components. It has infinite scrolling to continuously fetch information from the API',
        techs: ['React', 'Css', 'Router-Dom', 'API request', 'Infinite Scroll'],
        url: 'https://cgprojectsmovies.web.app/',
        git: 'https://github.com/CarlosAlainGamarra/appmoviesapp',
    },
    {
        title: 'Portfolio',
        image: port,
        description: 'This portfolio was made with React. It is based on reusable components. All visual elements have been created using pure CSS.',
        techs: ['React', 'Css', 'HTML'],
        url: '',
        git: 'https://github.com/CarlosAlainGamarra/port',
    },
    {
        title: 'Shop',
        image: shop,
        description: 'This is an application for a small e-commerce store. It has a shopping cart and uses Redux Toolkit to store information in the state and make it accessible throughout the site',
        techs: ['React', 'Bootstrap', 'Redux', 'API request', 'Cart', 'Favorites'],
        url: '',
        git: 'https://github.com/CarlosAlainGamarra/login-redux',
    },

]

export default projects