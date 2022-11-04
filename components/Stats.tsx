import styles from '../styles/home.module.css'
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import styled from 'styled-components'
import useScrollOffset from '../hooks/useScrollOffset'
import {useRef} from 'react'

const Stats = () => {
    const svgRef = useRef();
    const offset = useScrollOffset(svgRef, 1.5);

    const STATS = [
        {
            number: "2006",
            subtitle: "Year Established",
            left: 21,
            top: 29,
            radius: 18,
            color: "pink"
        },
        {
            number: "2009",
            subtitle: "Attending RoboCup Since",
            left: 78,
            top: 23,
            radius: 20,
            color: "green"
        },
        {
            number: 12,
            subtitle: "RoboCups Attended",
            left: 73,
            top: 74,
            radius: 17,
            color: "green"
        },
        {
            number: "2",
            subtitle: "1st Place Finishes",
            left: 28,
            top: 73,
            radius: 15,
            color: "pink"
        }
    ]

    const StyledSvg = styled.svg`
        ${props =>
            `
                width: ${30 * (offset / 100)}vw;
                height: ${30 * (offset / 100)}vw;
                opacity: ${offset}%;
                transform: rotate(${((100 - offset) / 100) * 30}deg);
            `
        }
    `

    return (
        <div
            className={styles.stats}
            ref={svgRef}
        >
            <StyledSvg offset={offset}>
                <circle cx="50%" cy="50%" r="10%" fill="blue" />
                {STATS.map((ele) => {
                    return (
                        <g>
                            <circle cx={`${ele.left}%`} cy={`${ele.top}%`} r={`${ele.radius}%`} fill={ele.color} />
                            <foreignObject  x={`${ele.left - ele.radius}%`} y={`${ele.top - ele.radius}%`} width={`${ele.radius * 2}%`} height={`${ele.radius * 2}%`}>
                                <div>
                                    <Typography variant="h2" align="center">
                                        {ele.number}
                                    </Typography>
                                    <Typography variant="h5" align="center">
                                        {ele.subtitle}
                                    </Typography>
                                </div>
                            </foreignObject >
                        </g>
                    );
                })}
            </StyledSvg>
        </div>
    );
}

export default Stats