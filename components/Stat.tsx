import Typography from "@mui/material/Typography"
import styles from '../styles/home.module.css'
import styled from 'styled-components';

interface IStatProps {
    number: string,
    subtitle: string,
    radius: number,
    left: number,
    top: number,
    color: string
}

const Stat = ({number, subtitle, left, top, radius, color} : IStatProps) => {
    const StatDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${color};
        border-radius: 50%;
        padding: 0.5em;
        box-sizing: border-box;
        min-height: ${2*radius}vh;
        min-width: ${2*radius}vh;
        max-height: ${2*radius}vh;
        max-width: ${2*radius}vh;
        position: absolute;
        top: ${top}%;
        left: ${left}%;
    `

    return (
        <StatDiv>
            <Typography variant="h2">
                {number}
            </Typography>
            <Typography
                variant="h5"
                align="center"
            >
                {subtitle}
            </Typography>
        </StatDiv>
    );
}

export default Stat