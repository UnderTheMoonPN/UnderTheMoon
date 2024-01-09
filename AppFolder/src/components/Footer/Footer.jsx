import style from './Footer.module.scss'

export const Footer = () =>{
    return(
        <section>
            <footer>
                <form>
                    <h5>subscribe to newsletter</h5>
                    <input type="text" placeholder='Full name'/>
                    <input type="email" placeholder='Email'/>
                    <button>SIGN UP</button>
                </form>
                <div className={style.sectContainer}>
                    <div className={style.Links}>
                        <h6>QUICK LINKS</h6>
                        <br />
                        <p>Hjem</p>
                        <p>Om os</p>
                        <p>Prisliste</p>
                        <p>Booking</p>
                        <p>Newsletter</p>
                        <p>Kontakt</p>
                        <br />
                        <h6>FOLLOW US</h6>
                        <div className={style.circles}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className={style.Find}></div>
                </div>
            </footer>
        </section>
    )
}