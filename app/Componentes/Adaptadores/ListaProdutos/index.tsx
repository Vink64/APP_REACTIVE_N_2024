import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import ItemProduto from "../ItemProduto";
import estilo from "@/app/Estilos/Default";
import Produto from "@/app/Modelos/Produto";

interface PropListaProduto{
    produtos: Produto[];
    aoAtualizar?:Function
}

const ListaProdutos:React.FC<PropListaProduto> = ({produtos, aoAtualizar})=>{
    return (
    <FlatList
        data={produtos}
        keyExtractor={(p)=>p.id.toString()}
        renderItem={
            ({item})=>{
                return <ItemProduto
                produto={item}
                aoExcluir={()=>aoAtualizar?.call(null)}>
                </ItemProduto>
            }
        }
    />
    )
}

export default ListaProdutos