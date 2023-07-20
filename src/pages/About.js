import '../styles.css';
import Button from '@material-ui/core/Button';
import DownloadIcon from '@mui/icons-material/Download';


const ResumeDownloadButton = () => {
    const handleDownload = () => {
        
        const resumeURL = process.env.PUBLIC_URL + '/pdf/Resume-LATESTUPDATE.pdf';
        const link = document.createElement('a');
        link.href = resumeURL;
        link.download = '/Resume-LATESTUPDATE.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    };
    return (
    <div className='aboutpage-container'>
        <div className='aboutpage-title'>
            <h1> ABOUT </h1>
            <img src="green-line-asset" alt=''></img>
        </div>
        
        <div className='aboutpage-content' style={{position:"absolute", top: "10%"}}>
            <p className='top-p'> I'm thrilled to share my journey and showcase my work as a recent graduate of UAB, where I majored in computer science and minored in economics. Computers have captivated me from a young age, leading me to pursue a career in a closely related field. 
            Throughout my academic journey, I built a strong foundation in computer science, immersing myself in programming,
             software development, and problem-solving. Exploring algorithms and data structures brought me immense satisfaction, and my minor in economics provided me with a broader understanding of technology's impact in our interconnected world.
            </p>
            <p className='bottom-p'> Fueled by curiosity, I've taken on various projects, both personal and academic, that have allowed me to apply my knowledge and create practical solutions. Crafting user-friendly interfaces, building software systems, and optimizing algorithms are challenges that truly excite me. During my leisure time,
             I find joy in exploring new places through travel and immersing myself in video games. These activities have given me valuable insights into creativity, teamwork, and problem-solving, which go beyond mere hobbies and deeply influence my approach to every project. With a holistic perspective in mind, I'm committed to developing practical and user-centric solutions, 
            drawing inspiration from my diverse experiences.</p>
        </div>

        <div className='button-div'>
        <Button variant="contained" startIcon={<DownloadIcon />} onClick={handleDownload}> Download Resume </Button>
        </div>
    </div>
    )
}
export default ResumeDownloadButton;