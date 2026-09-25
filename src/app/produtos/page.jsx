"use client";

import "./produtos.css";
import { useState, useEffect } from "react";
import CardProdutos from "@/components/CardProduto"

export default function Produtos() {
    const [listaProdutos, setListaProdutos] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
            setListaProdutos(data.products);
            setMsgErro("");
            });
    }, [])

    return (
        <main>
            <h1><span className="barra"></span>Catálogo de Produtos</h1>

            {listaProdutos.length > 0 &&
                <div className="container-produtos">
                    {listaProdutos.map(p => {
                        return <CardProdutos key={p.id} produto={p} />
                    })}
                </div>
            }
        </main>
    )
}