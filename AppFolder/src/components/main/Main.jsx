import style from './Main.module.scss'
import wrapperimgone from '../../assets/images/Frame-img-1.png'
import wrapperimgtwo from '../../assets/images/Frame-img-2.png'



export const Main = () => {
    return (
        <>
        <h2 className={style.newStyle}>UNDER THE MOON - NEW STYLE</h2>
        <p className={style.newStyleP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque earum laborum quibusdam eos. Consectetur laudantium beatae quas fugiat! Nemo veniam cum numquam temporibus quae beatae omnis pariatur ratione asperiores incidunt?</p>
        <button className={style.readMore}>Læs Mere</button>
        <div className={style.imgWrapper}>
            <div className={style.imgOne}>
                <h4 className={style.imgText}>One 2 One</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi iste earum repellat necessitatibus, repudiandae laborum minus similique officia nesciunt voluptate saepe atque doloremque impedit delectus at ducimus, exercitationem obcaecati.</p>
            </div>
            <div className={style.imgTwo}>
                <h4 className={style.imgText}>Loyalty Free</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, iure? Nam eos dignissimos unde ipsa ea expedita veniam assumenda perferendis? Vero voluptatem iusto at totam dolore laudantium minus reprehenderit aut.</p>
            </div>
        </div>
        </>
        )

}