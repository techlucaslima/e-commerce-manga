function Manga({ titulo, img, sinopse, autor, tipo }) {
    return (
        <div id="manga">
            <div id="title-writer-container">
                <h2>{titulo}</h2>
                <h4>{autor}</h4>
            </div>
            <div id="manga-image-container" className="center-element">
                <img src={img} alt="manga-img" />
            </div>
            <div id="sinopse-container">
                <p>{sinopse}</p>
            </div>
            <div id="manga-type-img">
                {tipo === 'Mangá' ? (
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"></img>
                ) : (
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png"></img>
                )}
            </div>
        </div>
    );
}

export default Manga;