import headerimg from '../../assets/images/Headerimg.jpg'
import style from './Header.module.scss'

export const Header = () => {
  return (
    <>    
    <div className={style.headerWrapper}>
    <h1>Under the Moon</h1>
    <img className={style.hImg} src={headerimg} alt=""/>
    <div className={style.frame}>
        <h2>HAIRSTYLIST OG FRISØR</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque minima blanditiis error accusantium deserunt ea expedita vel incidunt repudiandae deleniti ipsam ut nostrum tempora temporibus esse doloribus, in at ab.</p>
    </div>
    </div>
    </>
  )
}