import styles from '../styles/home.module.css'
import Stat from "./Stat"
import Grid from "@mui/material/Grid"

const Stats = () => {
    const STATS = [
        {
            number: "2006",
            subtitle: "Year Established",
            left: 20,
            top: 40,
            radius: 11.8,
            color: "pink"
        },
        {
            number: "2009",
            subtitle: "Attending RoboCup Since",
            left: 20,
            top: 15,
            radius: 12,
            color: "green"
        },
        {
            number: 12,
            subtitle: "RoboCups Attended",
            left: 35,
            top: 95,
            radius: 10,
            color: "green"
        },
        {
            number: "2",
            subtitle: "1st Place Finishes",
            left: 25,
            top: 80,
            radius: 10,
            color: "pink"
        }
    ]

    return (
        <div
            className={styles.stats}
        >
            <Stat
                number={""}
                subtitle={""}
                left={41}
                top={63}
                radius={8}
                color="blue"
            />
            <Grid container spacing={2}>
                {STATS.map((ele) => {
                    return (
                         <Grid
                            item
                            xs={6}
                            style={
                                {
                                    position: "relative",
                                    height: "20vh"
                                }
                            }
                         >
                            <Stat
                                number={ele.number}
                                subtitle={ele.subtitle}
                                left={ele.left}
                                top={ele.top}
                                radius={ele.radius}
                                color={ele.color}
                            />
                         </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default Stats