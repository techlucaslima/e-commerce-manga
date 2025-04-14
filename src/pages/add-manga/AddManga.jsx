import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddManga() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        titulo: '',
        imagem: '',
        sinopse: '',
        autor: '',
        tipo: '',
    });

    const addMangaToDb = (mangaData) => {
        fetch('https://e-commerce-manga.onrender.com/set-manga', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mangaData)
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMangaToDb(formData);
        navigate('/');
    };

    return (
        <main>
            <section>
                <div id="add-manga-main">
                    <div id="form-container">
                        <form id="create-manga-form" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="titulo">Título</label><br />
                                <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleChange} autoComplete="off"/><br />
                            </div>
                            <div>
                                <label htmlFor="imagem">Imagem</label><br />
                                <input type="text" id="imagem" name="imagem" value={formData.imagem} onChange={handleChange} autoComplete="off"/><br />
                            </div>
                            <div>
                                <label htmlFor="sinopse">Sinopse</label><br />
                                <input type="text" id="sinopse" name="sinopse" value={formData.sinopse} onChange={handleChange} autoComplete="off"/>
                            </div>
                            <div>   
                                <label htmlFor="autor">Autor</label><br />
                                <input type="text" id="autor" name="autor" value={formData.autor} onChange={handleChange} autoComplete="off"/><br />
                            </div>
                            <div>
                                <label htmlFor="tipo">Tipo</label><br />
                                <input type="text" id="tipo" name="tipo" value={formData.tipo} onChange={handleChange} autoComplete="off"/><br />
                            </div>
                            <div className="center-element">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
        </main>
    );
}

export default AddManga;