import '../styles.css';


export default function Projects() {
    return (
        
        <div className='projects-body'>
            <div className='projects-title'>
                <h1>PROJECTS</h1>
            </div>
            <div className='top-line'>
                <img src={process.env.PUBLIC_URL+"/top-seperator.png"} alt=''></img>
            </div>
            <div className='projects-master'>
            <div className='projects-container'>
                <div className='project-1'>
                    <div className='img-container-1'>
                        <img src={process.env.PUBLIC_URL+"/Homepagepicbig.png"} alt=""/>
                    </div>
                    <a href='https://github.com/ContellaJP/contellajp.github.io'> My Portfolio </a>
                    <p> Website that I created to increase my front-end skills and knowledge. Allowing me to display my other projects in a more refined format. </p>

                </div>

            <div className='project-2'>
                    <div className='img-container-2'>
                        <img src={process.env.PUBLIC_URL+"/pantreeUI.png"} alt=""/>
                    </div>
                    <a href='https://github.com/ContellaJP/Pantree'> Pantree </a>
                    <p> Android mobile app that allows the user to search for recipes that they can make with what they already have in their posession. </p>

            </div>

            <div className='project-3'>
                    <div className='img-container-3'>
                        <img src={process.env.PUBLIC_URL+"/farmUI.png"} alt=""/>
                    </div>
                    <a href='https://github.com/ContellaJP/contellajp.github.io'> Drone Controller </a>
                    <p> A dashboard that allows the user to choose between a drone simulation and a real drone that is controlled with a SDK to run a route created by the user. </p>

            </div>

            <div className='project-4'>
                    <div className='img-container-4'>
                        <img src= {process.env.PUBLIC_URL+"/homeMonitoringUI.png"} alt=""/>
                    </div>
                    <a href='https://github.com/ContellaJP/homeMonitoring'> Home Monitoring </a>
                    <p> Website I developed along side a couple classmates that uses mock data to simulate real time home activities and a security system. </p>

            </div>


            </div>
        </div>
    </div>
    
    )
}
