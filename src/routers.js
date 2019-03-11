import React from 'react';
import About from './components/Main/About/About';
import PostList from './components/Main/Blog/PostList';
import Detail from './components/Main/Blog/Detail';
import Contact from './components/Main/Contact/Contact';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <About />
    },
    {
        path : '/blog',
        exact : false,
        main : () => <PostList />
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact />
    },
    {
        path : '/post-detail',
        exact : false,
        main : () => <Detail />
    }
]

export default routes;
