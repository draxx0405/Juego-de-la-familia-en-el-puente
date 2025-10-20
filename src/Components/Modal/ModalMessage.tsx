import { Center, Text, Button } from "@chakra-ui/react";
import React from "react";
interface ModalMessageProps {
    isOpen: boolean;           // Si se muestra o no
    message: string;           // Mensaje principal ("¡Ganaste!" o "¡Perdiste!")
    buttonText?: string;       // Texto del botón
    onButtonClick: () => void; // Acción al presionar el botón
}

const ModalMessage:React.FC<ModalMessageProps>=({
    isOpen,
    message,
    buttonText = "Reiniciar",
    onButtonClick
}) => {
    if (!isOpen) return null;

    return (
        <Center
            position="absolute"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            bg="rgba(0,0,0,0.7)"
            zIndex={50}
            flexDirection="column"
        >
            <Text fontSize="3xl" color="white" mb={4} textAlign="center"  whiteSpace="pre-line" >
                {message}
            </Text>
            <Button colorScheme="teal" onClick={onButtonClick}>
                {buttonText}
            </Button>
        </Center>
    );
};

export default ModalMessage;
