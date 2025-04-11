import Home from './pages/home/Home.jsx';
import AddManga from './pages/add-manga/AddManga.jsx';
import Header from './components/Header.jsx'
import PageFooter from './components/PageFooter.jsx';
import './styles.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/manga" element={<AddManga />} />
                </Routes>
            </Router>

            <PageFooter />
        </div>
    );
}

export default App;
