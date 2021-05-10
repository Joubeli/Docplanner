import react from 'react'
import "./Information.css"

const Information = () => {

    let info = [
        {
            image: 'https://www.docplanner.com/img/flag.png',
            title: 'Leader in 12 countries',
            content: 'Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile'
        }
        , {
            image: 'https://www.docplanner.com/img/visits.png',
            title: '4.8 million appointments',
            content: 'booked last month'
        },
        {
            image: 'https://www.docplanner.com/img/patients.png',
            title: '61.9 mln unique patients',
            content: 'visit our websites each month'

        },
        {
            image: "https://www.docplanner.com/img/doctors.png",
            title: '92.5k active doctors',
            content: 'trust our solutions'
        },

    ];

    return (
        <>
            <div className="boxcontent">
                <div className='left'>
                    <h3>The world's biggest healthcare platform</h3>
                    <p>We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries.
                </p>
                </div>

                <div className='container'> 
                    {info.map((el) => (
                        <div className='grid-content'>
                            <img className='im1'src={el.image} />
                            <h4>{el.title}</h4>
                            <p>{el.content}</p>
                        </div>

                    ))}
                </div>
            </div>
        </>

    );
}

export default Information