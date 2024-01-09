import style from './Gallery.module.scss'

export const Gallery = props =>{
    console.log(props)
    return(
    <div className={style.follow}>    
        <h2>Follow us on instagram</h2>
        <div className={style.galleryContainer}>
            <div className={style.galleri}>
                {props.pictures && props.pictures.map((picture, index)=>{
                    return(<img 
                        key={index}
                        src={picture}
                        />)
                    
                    
                })}
            </div>
        </div>
    </div>    
    )
}