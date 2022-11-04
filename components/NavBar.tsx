import styles from '../styles/home.module.css'
import NavBarElement, {INavBarElementProps} from "./NavBarElement"
import Image from 'next/image'

const NavBar = () => {
    const NAVBAR : Array<INavBarElementProps> = [
        {
            name: "About"
        },
        {
            name: "Subteams"
        },
        {
            name: "Sponsors"
        },
        {
            name: "Recruitment"
        },
        {
            name: "Contact"
        },
    ]

    return (
        <div className={styles.navBar}>
            <div className={styles.navBarLogo}>
                <Image
                    src={"/tbots_logo_no_gradient.png"}
                    layout="fill"
                    objectFit="scale-down"
                />
            </div>
            <div className={styles.navBarElements}>
            {NAVBAR.map((ele : INavBarElementProps) => {
                return (
                    <NavBarElement name={ele.name} />
                );
            })}
            </div>
        </div>
    );
}

export default NavBar