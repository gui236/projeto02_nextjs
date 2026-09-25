import "./cardProduto.css";

export default function CardProduto({produto}) {
    return (
        <div className="wrapper-produto">
            <div className="topo">
                <img src={produto.images}/>
            </div>

            <div className="base">
                <h1>{produto.title}</h1>

                <p>R$ {produto.price}</p>

                <a href={`/produtos/${produto.id}`}>Comprar</a>
            </div>
        </div>
    )
}