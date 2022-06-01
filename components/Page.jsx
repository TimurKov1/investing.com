import Head from 'next/head'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import styles from '../styles/Page.module.scss'
import Menu from "./Menu";
import {useState} from "react";
import Link from 'next/link'

const Page = ({title, children}) => {
    const links = [
        {href: '/', label: 'Обзор'},
        {href: '/indices', label: 'Индексы'},
        {href: '/indices-futures', label: 'Индексные фьючерсы'},
        {href: '/invest', label: 'Форекс'},
        {href: '/commodities', label: 'Сырьевые товары'},
        {href: '/crypto', label: 'Криптовалюты'},
        {href: '/stock', label: 'Акции'},
        {href: '/bond', label: 'Облигации'},
        {href: '/etfs', label: 'ETF'},
        {href: '/funds', label: 'Фонды'},
    ]
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="content">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.hamburgerMain}>
                <div className={`${styles.hamburger} ${isOpen ? styles.isActive : ""} hamburgerAnim`}
                     onClick={() => setIsOpen(!isOpen)}>
                    <div className={`${styles.line} ${isOpen ? styles.line1 : ""}`}/>
                    <div className={`${styles.line} ${isOpen ? styles.line2 : ""}`}/>
                    <div className={`${styles.line} ${isOpen ? styles.line3 : ""}`}/>
                </div>
            </div>
            <Nav isOpen={isOpen}/>
            <div className={isOpen ? styles.responsiveMenu : styles.responsiveMenuBack}>
                <div className={styles.resAuth}>
                    <div className={styles.userAvatar}>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                             width="44.000000pt" height="44.000000pt" viewBox="0 0 44.000000 44.000000"
                             preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,44.000000) scale(0.100000,-0.100000)"
                               fill="#000000" stroke="none">
                                <path d="M149 425 c-81 -26 -150 -121 -149 -205 1 -31 22 -91 44 -125 l17 -25
                                    42 21 c23 12 45 27 49 33 8 12 0 55 -14 73 -5 6 -11 41 -13 78 -5 61 -3 68 22
                                    91 37 34 104 34 138 -1 21 -20 25 -33 25 -88 0 -41 -6 -77 -19 -102 -17 -35
                                    -17 -40 -2 -56 23 -27 78 -44 96 -29 27 23 48 97 43 155 -11 134 -147 222
                                    -279 180z"/>
                            </g>
                        </svg>
                    </div>
                    <div className={styles.authLinks}>
                        <Link href={"/login"}>
                            <a>Вход</a>
                        </Link>
                        <Link href={"/login"}>
                            <a>Регистратция</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.resMenuLinks}>
                    {links ? links.map(link => (
                        <Link href={link.href} key={link.label}>
                            <a onClick={() => setIsOpen(!isOpen)}>{link.label}</a>
                        </Link>
                    )) : ""}
                </div>
            </div>
            <div onClick={() => setIsOpen(false)}>
                <Menu links={links}/>
                <main className={'container' + ' ' + styles.main}>
                    {children}
                </main>
                <Footer/>
            </div>
        </div>
    )
}

export default Page
