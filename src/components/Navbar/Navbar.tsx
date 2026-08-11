import Button from "../Button/Button.tsx";
import styles from "./Navbar.module.scss";


const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <Button children={"Tournaments"}/>
            <Button children={"Teams"}/>
            <Button children={"Players"}/>
            <Button children={"Venues"}/>
        </nav>
    );
}

export default Navbar;