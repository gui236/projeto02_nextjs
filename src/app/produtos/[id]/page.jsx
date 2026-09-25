"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./produto.css";

export default function Produto() {
    const [produtos, setProdutos] = useState([]);
    const [produto, setProduto] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
            setProdutos(data.products);
            });
    }, []);

    useEffect(() => {
        const produtoEncontrado = produtos.find(p => p.id == params.id);
        setProduto(produtoEncontrado);
    }, [produtos, params.id])
    
    return (
     <main>
        <div className="container-produto">
            <a href={`../produtos`}>Voltar ao catálogo</a>

            <div className="produto">
                <div className="direita"></div>

                <div className="esquerda">
                    <img src={produto.images}/>

                    <h1>{produto.title}</h1>
                </div>
            </div>
        </div>
     </main>   
    )
}

