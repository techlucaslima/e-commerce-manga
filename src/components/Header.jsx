import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate('/');
    };

    return (
        <header>
            <div className="header-section">

            </div>
            <div id="logo-container" className="header-section" onClick={goToDashboard}>
                <div>
                    <h1>Berna Mangás</h1>
                </div>
                <div id="header-icon-container" className="center-element">
                    <img src="https://static.thenounproject.com/png/6810009-200.png" alt="" />
                </div>
            </div>
            <div id="manga-create-container" className="header-section">
                <button>
                    <Link to="/manga">Publique seu mangá</Link>
                </button>
            </div>
        </header>
    );
}

export default Header;