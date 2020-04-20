import React from "react"
import { Link } from 'gatsby';

import BorderButton from '../Buttons/BorderButton';
import LinkButton from '../Buttons/LinkButton';
import BannerButton from '../Buttons/BannerButton';

import './index.css';

const Header = () => {
    return(
        <nav className="navbar">
            <div className="menu">

                <Link className="logo" to="/">
                    <img src="/Logo.svg" alt="Dev. Daniel Silva"/>
                </Link>
                
                <ul className="links">
                    <li>
                        <LinkButton text="Sobre mim" />
                    </li>
                    <li>
                        <BorderButton text="Contrate-me" />
                    </li>
                    <li>
                        <BannerButton text="Blog" link="/blog" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;