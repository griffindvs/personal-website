import styles from '../styles/social.module.scss';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Social() {
    return (
        <div className="my-6 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <h6 className={styles.social}>
                <a href="https://github.com/griffindvs">GITHUB</a>
                <span> / </span>
                <a href="https://linkedin.com/in/griffindvs">LINKEDIN</a>
                <span> / </span>
                <a href="https://instagram.com/griffindvs">INSTAGRAM</a>
                <span> / </span>
                <a href="https://keybase.io/gcd">KEYBASE</a>
            </h6>
        </div>
    )
}
