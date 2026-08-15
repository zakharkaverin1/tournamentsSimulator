import Button from "../Button/Button.tsx";
import styles from "./Navbar.module.scss";
import * as React from "react";


interface NavbarProps {
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = (props: NavbarProps) => {
    const {onChange} = props;
    return (
        <nav className={styles.navbar}>
            <Button children={"Tournaments"} onClick={() => onChange("tournament")}/>
            <Button children={"Teams"} onClick={() => onChange("team")}/>
            <Button children={"Players"} onClick={() => onChange("player")}/>
            <Button children={"Venues"} onClick={() => onChange("venue")}/>
        </nav>

    );
}

export default Navbar;