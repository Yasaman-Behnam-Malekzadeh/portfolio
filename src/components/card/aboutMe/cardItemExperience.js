
function cardItem({
    compony_name,
    position,
    start_date,
    end_date,
    description,
    linkedin_address,
    website_address,
    logo_address,
    skills
}) {
    return (
        <div className='card m-5'>
            <div className='row m-2'>
                    <div className="card-body position-relative " >
                        <img style={{borderRadius:'50%',left: "0px" ,top:'-32px'}} className="round position-absolute" src={logo_address} alt={`${compony_name}-logo`} height={'50px'} width={'50px'}/>
                       <div className="card-title m-0 fs-3">{compony_name} - {position}</div>
                       <div className="card-text"> {start_date} - {end_date}</div>
                       <div className="card-text">{description}</div>
                       <div className="d-flex justify-content-between">
                            <div>
                                <strong>Skills:</strong> {skills}
                            </div>
                            <div>
                                <a href={website_address} target="_blank" className="btn btn-primary btn-sm">website</a>
                                <a href={linkedin_address} target="_blank" className="ms-2 btn btn-primary btn-sm">LinkedIn</a>
                            </div>
                       </div>
                    </div>
            </div>
        </div>
    )
}


export default cardItem;