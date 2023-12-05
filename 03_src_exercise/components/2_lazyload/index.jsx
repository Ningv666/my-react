import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './index.css';

// import About from './About';
// import Home from './Home';
import Loading from './Loading'
const About = lazy(() =>
    import('./About')
)
const Home = lazy(() =>
    import('./Home')
)

class Index extends Component {
    render() {
        return (
            <div className='lazyload-page'>
                <div>
                    <NavLink className="link" to="/about" >About</NavLink>
                    <NavLink className="link" to="/home" >Home</NavLink>
                </div>
                <div>
                    {/* 注册路由 */}
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path="/about" element={<About />} />
                            <Route path="/" element={<About />} />
                            <Route path="/home" element={<Home />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

export default Index;
