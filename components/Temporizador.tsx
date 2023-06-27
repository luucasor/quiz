import styles from "@/styles/Temporizador.module.css"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

interface TemporizadorProps {
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer 
                duration={props.duracao}
                size={120}
                isPlaying
                colors={['#BCE596', '#F7B801', '#ED827A']}
                colorsTime={[10, 5, 0]}
                onComplete={props.tempoEsgotado}
            >    
            {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}