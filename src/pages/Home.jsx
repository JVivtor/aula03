import { useEffect, useState } from "react";
import Teste from "./ListaProdutos"
export default function App() {
  
  const [Lista, setLista] = useState([]);

  useEffect(() => { 

    const receberListaProdutos = async () => {
        
    try{
        const resposta = await fetch('https://fakestoreapi.com/products');
        const dados = await resposta.json();
        setLista(dados);
    }
    catch (error){
        alert("A conexão com API está errada!");
    }
}
    
    receberListaProdutos();
  }, []);

  const orderAZ = ()=>{
    const listaAux = [...lista].sort((a, b)=> a.title.localCompare(b.title));
    setlista(listaAux);
  }
   return (
    <>
     <h1>Lista de Produtos</h1>
     <listaProdutos lista={lista}/>
    </>
   )

  return (
    <Teste produtos={Lista}/>
  );
}