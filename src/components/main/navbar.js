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
        <div style={{background:'white'}} className='fixed-top px-4 py-3 d-flex justify-content-between align-items-center'height="50px">
            <div className='fs-2'>Yasaman</div>
            <div>
                {navbarItems.map((item)=>{
                    return(
                        <a className='m-2' href={item.address} key={item.id}>{item.name}</a>
                    );
                })}
            </div>
        </div>
    );
}

export default Navbar;