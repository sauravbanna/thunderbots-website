import styles from '../styles/home.module.css'
import Typography from "@mui/material/Typography"

export interface INavBarElementProps {
    name: string
}

const NavBarElement = ({name} : INavBarElementProps) => {
    return (
        <div className={styles.navBarElement}>
            <Typography variant="h6" color="white">
                {name}
            </Typography>
        </div>
    );
}

export default NavBarElement