import Produto from "@/app/Modelos/Produto";
import Style from "@/app/Estilos/Default";
import axios from "axios";
import React from "react";

import { Text, View, Image, Button, Alert } from "react-native";

interface PropProd{
    produto:Produto,
    aoExcluir?:Function

}

const ItemProduto:React.FC<PropProd> = ( {produto, aoExcluir})=> {
    
    console.log(produto)
    
    
    function Excluir(id: number) {
        let api = 'https://api-docker-2t8m.onrender.com/api/produtos';
        axios.delete(`${api}/${id}`) 
        .then((resp)=>{
            aoExcluir?.call(null);

            // 2 alertas. O 1º funcionará no Android, o 2º funcionará na web
            
            Alert.alert('Produto excluido com sucesso');
            alert('Produto excluido com sucesso');
        })
    }

    return (
        <View style={Style.card} >
            <Text style={Style.cardText} >{produto.nome}</Text>
            <Text style={Style.cardText} >{produto.preco}</Text>
            <Image source={{uri:produto.foto} } 
             style={Style.imagem}   />
            <Button title="Excluir" 
            onPress={()=>{Excluir(produto.id)}}/>  
            
        </View>
    )

}

export default ItemProduto;