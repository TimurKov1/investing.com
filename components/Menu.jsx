import Link from 'next/link'
import styles from '../styles/Menu.module.scss'

export default function Menu(links) {

    return(
        <div className="">
            <nav className={styles.menu__nav}>
                {links ?
                    links.links.map(link => (
                        <Link href={link.href} key={link.label}>
                            <a>{link.label}</a>
                        </Link>
                    ))
                    : ""
                }
            </nav>
        </div>
    )
}