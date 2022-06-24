import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.scss";

const Navigation = (props) => {
    const NavItems = [1];

    return <nav className={styles.Navigation}>
    {NavItems.map((Item) => (
        <Link to={`/blog`} className={styles.Navigation__NavItem}>
            <li >{Item}</li>
        </Link>
    ))}
    </nav>
}

export default Navigation;