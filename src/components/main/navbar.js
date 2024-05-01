import { StyledCardWithCols } from '../../styles/card/CardWithCols.styles'

function Navbar() {
    const navbarItems = [
        {
          id:1,
          name: 'Home',
          address: '/home'
        },
        {
          id:2,
          name:'About me',
          address:'/about'
        },
        {
          id:3,
          name:'Skills',
          address:'/skills'
        },
        {
          id:4,
          name:'Portfolio',
          address:'/Portfolio'
        },
        {
          id:5,
          name:'Contact',
          address:'/Contact'
        }
      ]
    return (
        <StyledCardWithCols className='fixed-top p-10' justifyContent="space-between" height="50px">
            <div className='FS20'>Yasaman</div>
            <StyledCardWithCols>
                {navbarItems.map((item)=>{
                    return(
                        <a className='m-2' href={item.address} key={item.id}>{item.name}</a>
                    );
                })}
            </StyledCardWithCols>
        </StyledCardWithCols>
    );
}

export default Navbar;