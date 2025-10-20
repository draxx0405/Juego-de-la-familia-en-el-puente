import { Box, HStack, Heading, VStack } from '@chakra-ui/react';
import React from "react";
import PeopleButton from "./PeopleButton";
import ButtonP from '../Button/Button';
import AudioPlayer from './../AudioPlayer/AudioPlayer';

interface PeopleProps {
  name: string;
  url_Face: string;
  isSelected: boolean;
  time?: number;
}

interface GameBarProps {
    time?: number,
    Persons: PeopleProps[],
    onAvanzar?: () => void;
    onClick: (name: string, isSelected: boolean) => void;
    handleInstrucciones:()=>void;
}

const GameBar: React.FC<GameBarProps> = ({
    time = 30,
    Persons,
    onAvanzar,
    onClick,
    handleInstrucciones
}) => {
    const selectedCount = Persons.filter(p => p.isSelected).length;
    const backgroundButton = selectedCount >= 1 ? 'green' : 'gray';

    return (
        <HStack
            justifyContent={'center'}
            alignItems={'center'}
            width={'95vw'}
            height={'100px'}
            backgroundColor={'red'}
            borderRadius={'30px'}
            marginTop={'10px'}
            spacing={'40px'}
        >
      <AudioPlayer src="./../../../public/audio/InGame.mpeg"  initialVolume={0.7} isPlayings={true} />

            <ButtonP text='Avanzar' backgroundColor={backgroundButton} onClick={onAvanzar} />

            <Box width={'1px'} height={'85px'} borderWidth={'.5px'} borderColor={'black'} />
            <VStack spacing={'3px'}>
                <Heading color={'white'} size={'md'}>Tiempo</Heading>
                <Heading color={'white'} size={'md'}>{time} sec</Heading>
            </VStack>
            <Box width={'1px'} height={'85px'} borderWidth={'.5px'} borderColor={'black'} />
            {Persons.map((P, index) => (
                <PeopleButton
                    key={index}
                    url={P.url_Face}
                    name={P.name}
                    isSelected={P.isSelected}
                    borderColor="black"
                    time={P.time}
                    onClick={() => onClick(P.name, !P.isSelected)}
                />
            ))}
            <ButtonP text='Instrucciones' fontSize={15} backgroundColor='red' fontColor='black' onClick={handleInstrucciones} />
        </HStack>
    )
}


export default GameBar;