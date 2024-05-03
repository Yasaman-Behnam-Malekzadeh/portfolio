import Navbar from '../src/components/main/navbar'
import CardItemExperience from '../src/components/card/aboutMe/cardItemExperience'

function About () {
    const experiences =[
        {
            id:1,
            compony_name:'Venture Leap',
            position:'Front end engineer',
            start_date:'October 2022',
            end_date:'February 2023',
            description:`
            As a member of Probatix's Cockpit project, I contributed to the development of a cutting-edge Lab administration solution. I developed and maintained the fronten portion of the Cockpit dashboard, collaborating closely with cross-functional teams to ensure seamless integration and a user-friendly interface. Through code reviews and troubleshooting, I fostered a culture of high-quality code and continuous improvement.
            `,
            linkedin_address:'https://www.linkedin.com/company/venture-leap/?originalSubdomain=de',
            website_address:'https://venture-leap.com/en/',
            logo_address:'https://media.licdn.com/dms/image/C4D0BAQHqiRpPeUQ5vg/company-logo_200_200/0/1641991331248/venture_leap_logo?e=2147483647&v=beta&t=0S0gP-yBbX82vQryUatiKUCzFstbpGYqEKro5ECJM8g',
            skills:'React - TypeScript - CSS - HTML - Axios - Styled-component - GitHub - Figma - Symfony - Scrum'
        },
        {
            id:2,
            compony_name:'Lastsecond',
            position:'Front end engineer',
            start_date:'January 2021',
            end_date:'March 2022',
            description:`
            As the front-end developer at LastSecond.ir, I successfully revamped the company's website, implementing Vue.js and Sass to create a mobile and desktop. friendly design. This project included rewriting the main pages for tours, hotels,flights, itineraries, blogs, restaurants, videos, and attractions. Through effective communication and collaboration with backend developers, UI/UX designers, and the product manager, I ensured alignment with project objectives.
            `,
            linkedin_address:'https://www.linkedin.com/company/lastsecond/?originalSubdomain=ir',
            website_address:'https://lastsecond.ir/',
            logo_address:'https://pbs.twimg.com/profile_images/1230005817832886272/raLLVHAj_400x400.jpg',
            skills: 'Vue.js - Bootstrap-Vue - HTML - Javasciprt - SASS - Linux - GitLab - Zeplin - Scrum'
        },
        {
            id:3,
            compony_name:'Chargoon',
            position:'QA engineer',
            start_date:'March 2016',
            end_date:'April 2020',
            description:`
            As a Manual Tester at Chargoon, tested three platforms using TFS, collaborating with a team of 10+ developers, 3 scrum masters, and 2 test engineers for efficient testing.
            `,
            linkedin_address:'https://www.linkedin.com/company/chargoon/',
            website_address:'https://www.chargoon.com/',
            logo_address:'https://triboon.news/wp-content/uploads/2023/11/chargoon.jpg',
            skills: 'TFS - Unit testing - End to End testing - Integration test - Scrum '
        },
    ]
    return (
        <>
            <Navbar/>
            <div className='d-flex justify-content-between align-items-center'>
                    <img src="https://i.ibb.co/LxtC2Rg/file.png" alt='about-me'/>
                <div className='m-4'>
                    <div className='fs-3'>About me</div>
                    I started as a test engineer for 4 years, using different types of testing such as <strong>Unit testing</strong> and <strong>End-to-End testing</strong>. These experiences helped me develop a keen eye for detail. 
                    <br/>After that, I got interested in front-end development. I learned about <strong>React</strong> and <strong>Vue.js</strong>, and in my first job as a front-end developer, I made over 20 pages for both mobile and desktop displays using Vue.js, SASS, BEM, and Bootstrap-Vue. 
                    <br/>Later, I worked with React, Axios, TypeScript, and Styled-Components on projects in Europe. 
                    <br/>I worked with many team members and liked working together using <strong>Agile methods</strong> and <strong>Scrum</strong>.
                    <br/>I firmly believe that tools are important, but it's even more important to be excited about learning. That's what helps both companies and developers grow.   
                </div>
            </div>
            <div className='m-4'>
                <div className='fs-3 mb-5'>Work experiences: </div>
                <div className=''>
                    {
                        experiences.map((item)=>(
                            <CardItemExperience 
                                key={item.id} 
                                compony_name={item.compony_name}
                                position={item.position}
                                start_date={item.start_date}
                                end_date={item.end_date}
                                description={item.description}
                                linkedin_address={item.linkedin_address}
                                website_address={item.website_address}
                                logo_address={item.logo_address}
                                skills={item.skills}
                            />
                        ))
                    }
                </div>
            </div>
                
            <div>
            
            </div>
        </>
    )
}

export default About