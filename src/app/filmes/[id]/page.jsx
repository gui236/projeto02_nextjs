"use client";

import { useState, useEffect } from "react";
import dados from "@/filmes.json"
import { useParams } from "next/navigation";
import "./filme.css"

export default function Filme() {
    const [filme, setFilme] = useState(null);
    const params = useParams();

    useEffect(() => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmeEncontrado);
    }, [])

    return (
        <main>
            {filme != null &&
                <>
                    <h1></h1>
                    <div className="wrapper-desc">

                        <div className="container-esq">
                            <img src={filme.imagem} alt="" />
                        </div>

                        <div className="container-dir">
                            <h1>Descrição do Filme: {filme.titulo}</h1>
                            <strong>Ano de Lançamento: {filme.ano}</strong>

                            <hr/>

                            <p>{filme.sinopse}</p>
                            <h2>Direção: {filme.diretores}</h2>
                        </div>
                    </div>
                </>}
        </main>
    )
}