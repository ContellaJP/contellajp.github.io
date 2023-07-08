import '../styles.css';
export default function About() {
    return (
    <div className='aboutpage-container'>
        <div className='aboutpage-title'>
            <h1> ABOUT </h1>
            <img src="green-line-asset" alt=''></img>
        </div>
        
        <div className='aboutpage-content' style={{position:"absolute", top: "10%"}}>
            <p className='top-p'> I'm thrilled to share my journey and showcase my work as a recent graduate of UAB, where I majored in computer science and minored in economics. From a young age, I've had an innate fascination with gaming, which sparked my passion for computers and everything that revolves around them. This profound interest paved the way for me to pursue a career in a closely related field. 
            Throughout my academic journey, I acquired a solid foundation in computer science, honing my skills in programming, software development, and problem-solving. I found great joy in exploring the intricacies of algorithms and diving deep into the realm of data structures. In tandem, my minor in economics enhanced my understanding of the broader implications and impact of technology in today's interconnected world.
            </p>
            <p className='bottom-p'> Driven by my insatiable curiosity, I've embarked on numerous projects, both personal and academic, that have allowed me to apply my knowledge and develop practical solutions. Whether it's crafting intuitive user interfaces, building robust software systems, or optimizing algorithms, I thrive on the challenges presented by the dynamic nature of technology.
            Moreover, my passion for gaming has remained a constant source of inspiration throughout my journey. It has fueled my creativity, taught me the value of teamwork, and sharpened my problem-solving skills. These lessons transcend the gaming realm, enabling me to approach each project with a holistic perspective, always striving for innovative and user-centric solutions.
            Beyond technical expertise, I am a strong believer in the power of collaboration and effective communication. I thrive in team environments, leveraging my interpersonal skills to foster cooperation, and delivering results that exceed expectations.</p>
        </div>

    </div>
    )
}