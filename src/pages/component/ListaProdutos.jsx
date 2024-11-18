
 export default function ListaProdutos({produtos}){
    return (
        <>
        
          <h1>
            Lista Produtos
          </h1>
  
          <ul className={styles.ListaProdutos}>

            {produtos.map(produto => (
              <li key={produto.id}>
                <h2>{produto.title}</h2>
                <p>{produto.description}</p>
                <p>Preço: ${produto.price}</p>
                <img src={produto.image} alt={produto.title} width={100} />
              </li>
            ))}
          </ul>
        </>
      )
    }