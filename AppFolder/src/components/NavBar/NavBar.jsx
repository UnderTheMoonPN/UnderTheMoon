import styles from './NavBar.module.scss';

export const Navbar = props => {
    return (
      <nav>
        <ul className={styles.navigation}>
        {props.data && props.data.map((item, itemIndex) => {
            return <li key={itemIndex}>{item}</li>
        }
       
        )}
      </ul>
      </nav>
    )
  }