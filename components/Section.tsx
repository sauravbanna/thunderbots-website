import Typography from "@mui/material/Typography"
import styles from "../styles/home.module.css"

interface ISectionProps {
    name: string,
    className?: any
    children: any
}

const Section = ({name, className, children} : ISectionProps) => {
    return(
        <div className={className ? className : styles.section}>
            &nbsp;
            <Typography
                variant="h4"
                align="center"
                sx={{marginBottom: "10vh"}}
            >
                {name}
            </Typography>
            &nbsp;
            {children}
        </div>
    );
}

export default Section