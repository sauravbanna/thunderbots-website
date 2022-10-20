import styles from "../styles/home.module.css"
import Typography from "@mui/material/Typography"

const About = () => {
    return (
        <div className={styles.about}>
            <Typography
                variant="h4"
            >
                {"About Us"}
            </Typography>
            &nbsp;
            <Typography variant="h5">
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at mi vitae libero lobortis rutrum. Quisque dictum faucibus justo eu lobortis. Sed non ante viverra, porta urna ac, molestie ipsum. Aenean eu nisl cursus lorem pharetra sollicitudin. Proin sed mi vestibulum, ullamcorper nibh nec, scelerisque leo. Sed tincidunt justo libero, vitae pretium erat finibus quis. Nunc sodales dapibus quam tempus ornare. Sed scelerisque a neque in sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}
            </Typography>
        </div>
    );
}

export default About