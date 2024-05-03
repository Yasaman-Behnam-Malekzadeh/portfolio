import Navbar from '../src/components/main/navbar'

function Home() {
    return (
        <>
            <Navbar/>
            <div className='d-flex justify-content-around align-items-center'>
            <div>
                <div className='fs-1'>
                    Hi,
                    <br/>
                    I'm Yasaman
                </div>
                <h2 className='fs-3'>
                    Front-end engineer
                </h2>
            </div>
            <img src="https://i.ibb.co/p4NHDD0/IMG-0587-removebg.png" alt="first-page" height={'738px'} width={'600px'}/>
            <div>
                <div className='fs-3'>Based on Berlin</div>
                If you are looking for a Front-end engineer
                <br/>
                who has a keen eye for any bug
                <br/>
                and a huge enthusisem for translating UI concept
                <br/>
                into visually intresting
                <br/>
                <div className='fs-4'>I'm here. </div>
            </div>
            </div>
        </>
    );
}


export default Home;