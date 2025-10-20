import { VStack, Heading, Box } from '@chakra-ui/react';
import React, { useState } from "react";
import hombre from './../../../public/assets/Hombre/Cara.png';

interface PeopleButtonProps {
  name?: string;
  url?: string;
  isSelected?: boolean;
  borderColor: string;
  time?: number;
  onClick: (name: string, isSelected: boolean) => void;
}

const PeopleButton: React.FC<PeopleButtonProps> = ({
  name = 'Juan',
  url = hombre,
  isSelected = false,
  borderColor = 'black',
  time = 6,
  onClick,
}) => {
  const [opacity, setOpacity] = useState(1);

  return (
    <VStack justify="center" align="center">
      <Heading size="md">{time}</Heading>
      <Box
        onClick={() => onClick(name, !isSelected)} 
        width="40px"
        height="40px"
        transform="rotate(45deg)"
        border="2px solid"
        borderColor={borderColor}
        backgroundColor={isSelected ? 'green' : "white"}
        opacity={opacity}
        onMouseEnter={() => setOpacity(.8)}
        onMouseLeave={() => setOpacity(1)}
        transition="all 0.2s ease-in-out"
      >
        <img
          src={url}
          width="40px"
          height="40px"
          style={{ transform: "rotate(-45deg)" }}
        />
      </Box>
      <Heading size="md">{name}</Heading>
    </VStack>
  );
};

export default PeopleButton;
