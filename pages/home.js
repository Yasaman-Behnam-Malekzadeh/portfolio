import { StyledCardWithCols } from '../src/styles/card/CardWithCols.styles';
import Navbar from '../src/components/main/navbar'

function Home() {
    return (
        <>
            <Navbar/>
            <StyledCardWithCols height="100%">
            <div>
                <div className='FS40'>
                    Hi,
                    <br/>
                    I'm Yasaman
                </div>
                <div className='FS30'>
                    Front-end engineer
                </div>
            </div>
            <img src="https://i.ibb.co/p4NHDD0/IMG-0587-removebg.png" alt="first-page" height={'738px'} width={'۶00px'}/>
            <div>
                <div className='FS30'>Based on Berlin</div>
                If you are looking for a Front-end engineer
                <br/>
                who has a keen eye for any bug
                <br/>
                and a huge enthusisem for translating UI concept
                <br/>
                into visually intresting
                <br/>
                <div className='FS20'>I'm here. </div>
            </div>
            </StyledCardWithCols>
        </>
    );
}


export default Home;