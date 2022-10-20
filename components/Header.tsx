import Image from 'next/image'
import styles from '../styles/home.module.css'
import Typography from "@mui/material/Typography"


const Header = () => {
    return (
        <div
            className={styles.header}
        >
            <Image
                src={"/IMG_5780_edited.jpg"}
                layout="fill"
                objectFit="cover"
            />
            <div
                className={styles.logo}
            >
                <Image
                    src={"/tbots_logo_no_gradient.png"}
                    layout="fill"
                    objectFit="scale-down"
                />
                <Typography
                    variant="h3"
                    align="center"
                >
                    {"Home of UBC's Autonomous Soccer Playing Robots"}
                </Typography>
            </div>
        </div>
    );
}

export default Header