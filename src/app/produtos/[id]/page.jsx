"use client";

import 'bootstrap-icons/font/bootstrap-icons.css';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./produto.css";

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
            setProduto(data);
            });
    }, []);
    
    return (
     <main>
        {produto != null &&
        <>
            <div className="container-produto">
                <a href={`../produtos`}>Voltar ao catálogo</a>

                <div className="produto">
                    <div className="esquerda">
                        <img src={produto.images}/>
                    </div>

                    <div className="direita">
                        <h1>{produto.title}</h1>

                        <span className="codigo">Código(SKU): {produto.sku}</span>

                        <h2>R$ {produto.price}&nbsp; <span className='desconto'>({produto.discountPercentage}% de Desconto)</span></h2>

                        <hr/>

                        <p>{produto.description}</p>

                        <div className="info">
                            <h3>Qtd. Estoque: {produto.stock}</h3>
                            <h3>Avaliações: {produto.rating}&nbsp;<i className="bi bi-star-fill"></i></h3>
                        </div>

                        <h4>Política de Devolução: <strong>{produto.returnPolicy}</strong></h4>
                    </div>
                </div>
            </div>
        </>}
        
     </main>   
    )
}

