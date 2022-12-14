import styles from '../styles/footer.module.scss';

export default function Footer() {
    let date = new Date().getFullYear()

    return (
        <div className="my-6 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <br></br>
            <div className={styles.line}></div>
            <br></br>
            <h6 className={styles.copy}>&copy; {date} Griffin Davis. All Rights Reserved.</h6>
        </div>
    )
}
