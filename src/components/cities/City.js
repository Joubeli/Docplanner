import react from 'react'
import './city.css'

function City(){

    let card=[{
        image:'https://www.docplanner.com/images/warsaw.png',
        title:'Warsaw',
       
    },{
        image:'https://www.docplanner.com/images/barcelona.png',
        title:'Barcelona',
       
    },{
        image:'https://www.docplanner.com/images/istanbul.png',
        title:'Istanbul',
       
    },{
        image:'https://www.docplanner.com/images/rome.png',
        title:'Rome',

    },{
        image:'https://www.docplanner.com/images/bologna.png',
        title:'Bologna',
    },{
        image:'https://www.docplanner.com/images/curitiba.png',
        title:'Curitiba',
    },{
        image:'https://www.docplanner.com/images/mexico-city.png',
        title:'Mexico',
    }]
     
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