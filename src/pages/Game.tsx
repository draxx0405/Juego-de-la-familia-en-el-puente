import { VStack, Box } from "@chakra-ui/react";
import GameBar from "../Components/GameBar/GameBar";
import Fondo from "./../../public/assets/Puente/Fondo.png";
import { useEffect, useState } from "react";

import Puente from "./../../public/assets/Puente/Puente.png";

// Assets Hombre
import Hombre_R from "./../../public/assets/Hombre/Parado_R.png";
import Hombre_L from "./../../public/assets/Hombre/Parado_L.png";
import Hombre_C1_R from "./../../public/assets/Hombre/Caminando_1_R.png";
import Hombre_C2_R from "./../../public/assets/Hombre/Caminando_2_R.png";
import Hombre_C1_L from "./../../public/assets/Hombre/Caminando_1_L.png";
import Hombre_C2_L from "./../../public/assets/Hombre/Caminando_2_L.png";

// Assets Adolecente
import Adolecente_R from "./../../public/assets/Adolecente/Parado_R.png";
import Adolecente_L from "./../../public/assets/Adolecente/Parado_L.png";
import Adolecente_C1_R from "./../../public/assets/Adolecente/Caminando_1_R.png";
import Adolecente_C2_R from "./../../public/assets/Adolecente/Caminando_2_R.png";
import Adolecente_C1_L from "./../../public/assets/Adolecente/Caminando_1_L.png";
import Adolecente_C2_L from "./../../public/assets/Adolecente/Caminando_2_L.png";

// Assets Mujer
import Mujer_R from "./../../public/assets/Mujer/Parado_R.png";
import Mujer_L from "./../../public/assets/Mujer/Parado_L.png";
import Mujer_C1_R from "./../../public/assets/Mujer/Caminando_1_R.png";
import Mujer_C2_R from "./../../public/assets/Mujer/Caminando_2_R.png";
import Mujer_C1_L from "./../../public/assets/Mujer/Caminando_1_L.png";
import Mujer_C2_L from "./../../public/assets/Mujer/Caminando_2_L.png";

// Assets Niña
import Niña_R from "./../../public/assets/Niña/Parado_R.png";
import Niña_L from "./../../public/assets/Niña/Parado_L.png";
import Niña_C1_R from "./../../public/assets/Niña/Caminando_1_R.png";
import Niña_C2_R from "./../../public/assets/Niña/Caminando_2_R.png";
import Niña_C1_L from "./../../public/assets/Niña/Caminando_1_L.png";
import Niña_C2_L from "./../../public/assets/Niña/Caminando_2_L.png";

// Assets Viejito
import Viejito_R from "./../../public/assets/Viejito/Parado_R.png";
import Viejito_L from "./../../public/assets/Viejito/Parado_L.png";
import Viejito_C1_R from "./../../public/assets/Viejito/Caminando_1_R.png";
import Viejito_C2_R from "./../../public/assets/Viejito/Caminando_2_R.png";
import Viejito_C1_L from "./../../public/assets/Viejito/Caminando_1_L.png";
import Viejito_C2_L from "./../../public/assets/Viejito/Caminando_2_L.png";

//Assets Lampara
import Vela_1 from "./../../public/assets/Velas/Vela 1.png"
import Vela_2 from "./../../public/assets/Velas/Vela 2.png"


// Caras
import Cara_Hombre from "./../../public/assets/Hombre/Cara.png";
import Cara_Adolecente from "./../../public/assets/Adolecente/Cara.png";
import Cara_Mujer from "./../../public/assets/Mujer/Cara.png";
import Cara_Niña from "./../../public/assets/Niña/Cara.png";
import Cara_Viejito from "./../../public/assets/Viejito/Cara.png";


import ModalMessage from "../Components/Modal/ModalMessage";

interface PeopleProps {
    name: string;
    url_Face: string;
    standFrames: { Left: string; Right: string }; // frame de stand por lado
    walkFrames: { Left: string[]; Right: string[] }; // frames caminando por lado
    isSelected: boolean;
    side: "Left" | "Right";
    time?: number;
    initialPosition: number;
    finalPosition: number;
    currentPosition: number;
}

interface VelaProps {
    initialPosition: number;
    finalPosition: number;
    currentPosition: number;
    side: "Left" | "Right";
    frames: { f1: string, f2: string };

}
const Game = () => {
    const [time, setTime] = useState(30);
    const [isCrossing, setIsCrossing] = useState(false);
    const [space, setSpace] = useState("0px");
    const [frameIndex, setFrameIndex] = useState(0);
    const [hasWon, setHasWon] = useState(false);
    const [hasLost, setHasLost] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [vela, setVela] = useState<VelaProps>({
        initialPosition: 200,
        currentPosition: 200,
        finalPosition: 1200 - 200,
        side: "Right",
        frames: { f1: `url(${Vela_1})`, f2: `url(${Vela_1})` }
    });
    const [peoples, setPeople] = useState<PeopleProps[]>([
        {
            name: "Luna",
            url_Face: Cara_Niña,
            standFrames: { Left: `url(${Niña_L})`, Right: `url(${Niña_R})` },
            walkFrames: {
                Left: [`url(${Niña_C1_L})`, `url(${Niña_C2_L})`],
                Right: [`url(${Niña_C1_R})`, `url(${Niña_C2_R})`],
            },
            isSelected: false,
            side: "Right",
            time: 1,
            initialPosition: 160,
            currentPosition: 160,
            finalPosition: 1200 - 160,
        },
        {
            name: "Sabriana",
            url_Face: Cara_Adolecente,
            standFrames: { Left: `url(${Adolecente_L})`, Right: `url(${Adolecente_R})` },
            walkFrames: {
                Left: [`url(${Adolecente_C1_L})`, `url(${Adolecente_C2_L})`],
                Right: [`url(${Adolecente_C1_R})`, `url(${Adolecente_C2_R})`],
            },
            isSelected: false,
            side: "Right",
            time: 3,
            initialPosition: 105,
            currentPosition: 105,
            finalPosition: 1200 - 105,
        },
        {
            name: "Jonh",
            url_Face: Cara_Hombre,
            standFrames: { Left: `url(${Hombre_L})`, Right: `url(${Hombre_R})` },
            walkFrames: {
                Left: [`url(${Hombre_C1_L})`, `url(${Hombre_C2_L})`],
                Right: [`url(${Hombre_C1_R})`, `url(${Hombre_C2_R})`],
            },
            isSelected: false,
            side: "Right",
            time: 6,
            initialPosition: 50,
            currentPosition: 50,
            finalPosition: 1200 - 50,
        },
        {
            name: "Natalia",
            url_Face: Cara_Mujer,
            standFrames: { Left: `url(${Mujer_L})`, Right: `url(${Mujer_R})` },
            walkFrames: {
                Left: [`url(${Mujer_C1_L})`, `url(${Mujer_C2_L})`],
                Right: [`url(${Mujer_C1_R})`, `url(${Mujer_C2_R})`],
            },
            isSelected: false,
            side: "Right",
            time: 8,
            initialPosition: -5,
            currentPosition: -5,
            finalPosition: 1200 + 5,
        },
        {
            name: "Don Edu",
            url_Face: Cara_Viejito,
            standFrames: { Left: `url(${Viejito_L})`, Right: `url(${Viejito_R})` },
            walkFrames: {
                Left: [`url(${Viejito_C1_L})`, `url(${Viejito_C2_L})`],
                Right: [`url(${Viejito_C1_R})`, `url(${Viejito_C2_R})`],
            },
            isSelected: false,
            side: "Right",
            time: 12,
            initialPosition: -60,
            currentPosition: -60,
            finalPosition: 1200 + 60,
        },
    ]);

    // Vibración del puente
    useEffect(() => {
        const interval = setInterval(() => {
            setSpace(isCrossing ? `${Math.floor(Math.random() * 6)}px` : "0px");
        }, 100);
        return () => clearInterval(interval);
    }, [isCrossing]);
    // Animación de caminar
    useEffect(() => {
        if (!isCrossing) return;
        const frameInterval = setInterval(() => {
            setFrameIndex(prev => (prev + 1) % 2);
        }, 200);
        return () => clearInterval(frameInterval);
    }, [isCrossing]);

    useEffect(() => {
        if (!isCrossing) return;

        const timer = setInterval(() => {
            setTime(prev => {
                const nextTime = Math.max(prev - 1, 0);

                if (nextTime === 0) {
                    setHasLost(true);
                    setIsCrossing(false);
                }

                return nextTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isCrossing]);

    const handleInstrucciones = () => {
        setIsOpen(!isOpen);
    }
    const handleModalClick = () => {
        setPeople(prev =>
            prev.map(p => ({
                ...p,
                side: "Right",
                isSelected: false,
                currentPosition: p.initialPosition
            }))
        );
        setVela(prev => ({
            ...prev,
            side: "Right",
            currentPosition: prev.initialPosition
        }));
        setTime(30);
    }
    const handleModlaClickWon = () => {
        setHasWon(false);

        handleModalClick();
    }
    const handleModlaClickLost = () => {
        setHasLost(false);
        handleModalClick();
    }

    const handleButtonClick = (name: string, isSelected: boolean) => {
        setPeople(prev => {
            // Contar cuántos ya están seleccionados en el mismo lado que la vela
            const selectedCount = prev.filter(p => p.isSelected && p.side === vela.side).length;

            return prev.map(p => {
                if (p.name !== name) return p;

                // Si intentan seleccionar y ya hay 2, no se puede
                if (isSelected && selectedCount >= 2 && !p.isSelected) {
                    return p; // no cambia nada
                }

                // Solo permitir seleccionar si está en el mismo lado que la vela
                return { ...p, isSelected: isSelected && p.side === vela.side };
            });
        });
    };


    const handleAvanzar = () => {
        const selected = peoples.filter(p => p.isSelected);
        if (selected.length === 0) return;

        setIsCrossing(true);

        const intervalTime = 30;
        const separation = 50;

        const slowest = selected.reduce((prev, curr) =>
            (curr.time ?? 0) > (prev.time ?? 0) ? curr : prev
        );
        if (!slowest) return;

        let elapsed = 0;
        const offsets: { [key: string]: number } = {};
        selected.forEach((p, idx) => offsets[p.name] = idx * separation);

        const interval = setInterval(() => {
            elapsed += intervalTime;

            setPeople(prev =>
                prev.map(p => {
                    if (!p.isSelected) return p;

                    const slowTime = slowest.time ?? 1;
                    const pTime = p.time ?? 1;
                    const delay = (slowTime - pTime) * 120;
                    if (elapsed < delay) return p;

                    const startPos = p.side === "Right" ? p.initialPosition : p.finalPosition;
                    const endPos = p.side === "Right" ? p.finalPosition : p.initialPosition;

                    let newPos = startPos + (endPos - startPos) * ((elapsed - delay) / (slowTime * 1000));
                    newPos += p.side === "Right" ? offsets[p.name] : -offsets[p.name];

                    return { ...p, currentPosition: newPos };
                })
            );

            // Mover la vela sincronizada
            setVela(prev => {
                const start = prev.side === "Right" ? prev.initialPosition : prev.finalPosition;
                const end = prev.side === "Right" ? prev.finalPosition : prev.initialPosition;
                const progress = Math.min(elapsed / ((slowest.time ?? 1) * 1000), 1);
                return { ...prev, currentPosition: start + (end - start) * progress };
            });

            if (elapsed >= (slowest.time ?? 1) * 1000) {
                clearInterval(interval);

                // Cambiar lado de personajes y fijar posición final
                setPeople(prev => {
                    const updated = prev.map(p =>
                        p.isSelected
                            ? {
                                ...p,
                                side: p.side === "Right" ? "Left" : "Right",
                                isSelected: false,
                                currentPosition: p.side === "Right" ? p.finalPosition : p.initialPosition,
                            }
                            : p
                    );

                    // Verificamos con el estado actualizado
                    const allLeft = updated.every(p => p.side === "Left");
                    if (allLeft) {
                        setHasWon(true);
                        console.log("¡Ganaste!");
                    }

                    return updated;
                });

                // Cambiar lado de la vela y fijar posición
                setVela(prev => ({
                    ...prev,
                    side: prev.side === "Right" ? "Left" : "Right",
                    currentPosition: prev.side === "Right" ? prev.finalPosition : prev.initialPosition
                }));

                setIsCrossing(false);
            }

        }, intervalTime);
    };


    return (
        <VStack width="100vw" height="100vh" backgroundColor="black">
            <GameBar
                time={time}
                Persons={peoples}
                onAvanzar={handleAvanzar}
                onClick={handleButtonClick}
                handleInstrucciones={handleInstrucciones}
            />

            <Box
                backgroundImage={`url(${Fondo})`}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
                width={"100vw"}
                height={"90vh"}
                position={"relative"}
                overflow="hidden"
            >
                <Box
                    backgroundImage={`url(${Puente})`}
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    width={"110vw"}
                    height={"650px"}
                    position={"absolute"}
                    left={"-35px"}
                    bottom={space}
                />
                <Box
                    backgroundImage={vela.frames.f1}
                    backgroundRepeat="no-repeat"
                    backgroundSize="contain"  // mejor que cover para mantener proporciones
                    backgroundPosition="center"
                    width="200px"              // tamaño adecuado
                    height="150px"
                    position="absolute"
                    right={`${vela.currentPosition}px`} // ¡ojo con las unidades!
                    bottom="70px"                     // misma base que personajes
                    zIndex={10}                       // encima del puente
                />

                {peoples.map((p, idx) => (
                    <Box
                        key={idx}
                        backgroundImage={
                            p.isSelected && isCrossing
                                ? p.walkFrames[p.side][frameIndex] // Solo los seleccionados animan
                                : p.standFrames[p.side]            // Los demás siempre en standFrame
                        }
                        backgroundRepeat="no-repeat"
                        backgroundSize="contain"
                        backgroundPosition="center"
                        width={200}
                        height={150}
                        position="absolute"
                        right={`${p.currentPosition}px`}
                        bottom="70px"
                        transition="all 0.1s linear"
                    />
                ))}

            </Box>

            {isOpen && (
                <ModalMessage
                    isOpen={true}
                    message={`Por favor, ayuden a esta familia a cruzar al otro lado del puente.\n\nTengan en cuenta que: Es de noche. Hay una lámpara.\n\nUn máximo de 2 personas pueden cruzar a la vez y deben llevar la lámpara consigo.\n\nCada persona camina a una velocidad diferente: 1 s, 3 s, 6 s, 8 s, 12 s.\n\nUna pareja debe caminar junta al ritmo de la persona más lenta.\n\n¡La lámpara solo dura 30 segundos!`}
                    buttonText="Aceptar"
                    onButtonClick={() => setIsOpen(false)}
                />

            )}
            {hasLost && (
                <ModalMessage isOpen={hasLost} message="Has perdido intenta de nuevo JAJAJAJ" onButtonClick={handleModlaClickLost} />
            )}
            {hasWon && (
                <ModalMessage isOpen={hasWon} message="Felicidades Ganaste" onButtonClick={handleModlaClickWon} />
            )}

        </VStack>
    );
};

export default Game;
