import { VStack } from "@chakra-ui/react";
import type React from "react";
import ButtonP from '../Button/Button';
import { useNavigate } from "react-router-dom";



const Menu=()=>{
    const navigate = useNavigate()
    return(
    <VStack width={'auto'}>
        <ButtonP text="Jugar"    onClick={()=>navigate('/Game')}    />
        <ButtonP text="Opciones" onClick={()=>navigate('/Options')} />
    </VStack>
    );
}


export default Menu;