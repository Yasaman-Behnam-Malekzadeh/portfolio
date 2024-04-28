import { StyledCard3cols } from '../styles/card/Card3cols.styles'

function MainPage() {
    return (
        <StyledCard3cols>
            <div>
                <div className='h40'>
                    Hi,
                    <br/>
                    I'm Yasaman
                </div>
                <div className='h30'>
                    Front-end engineer
                </div>
            </div>
            <img src="https://i.ibb.co/p4NHDD0/IMG-0587-removebg.png" alt="photo-first-page" height={'738px'} width={'۶00px'}/>
            <div>
                <div className='h30'>Based on Berlin</div>
                
                If you are looking for a Front-end engineer
                <br/>
                who has a keen eye for any bug
                <br/>
                and a huge enthusisem for translating UI concept
                <br/>
                into visually intresting
                <br/>
                <div className='h20'>I'm here. </div>
            </div>
        </StyledCard3cols>
    );
}


export default MainPage;