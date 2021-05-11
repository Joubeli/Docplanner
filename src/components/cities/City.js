import react from 'react'
import './city.css'

function City({card}){

    
     
    return(
        <>
       
            <div className="grid-container1">
                {card.map((count3)=>(
                    <div className='photo1'>
                         <img className="im" src={count3.image} alt="logo1"></img>
                         <br/>
                         <div className="image1">
                        <p> {count3.title}</p>
                        <button className="button" type="button"> SEE OPENINGS</button>
                     </div>

                </div>
                ))}
        

            </div>

            <div className="join">
            <h2>Sounds interesting? Join us now!</h2>
            <button class="button" type="button"> SEE ALL CURRENT OPENINGS</button>
            </div>   
        
        </>
    );
}

export default City