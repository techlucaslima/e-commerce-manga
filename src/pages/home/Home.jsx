import { useEffect, useState } from "react";
import Manga from "../../components/Manga.jsx";
import { useLocation } from "react-router-dom"; 

function Home() {
    const [mangas, setMangas] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation(); 

    const consultarDb = async () => {
        try {
            const res = await fetch("http://localhost:5000/get-manga");
            const data = await res.json();
            setMangas(data);
            console.log("Dados recebidos:", data);
        } catch (error) {
            console.error("Erro ao buscar mangás:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        consultarDb();
    }, [location.pathname]);

    return (
        <div id="main">
            <main>
                <div id="manga-area">
                    {loading ? (
                        <p>Carregando mangás...</p>
                    ) : (
                        mangas.map((manga, index) => (
                            <Manga
                                key={index}
                                titulo={manga.titulo}
                                img={manga.imagem}
                                sinopse={manga.siopse.slice(0, 39) + '...'} 
                                autor={manga.autor}
                                tipo={manga.tipo}
                            />
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}

export default Home;
