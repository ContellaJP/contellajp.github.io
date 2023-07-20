import { Link, useMatch, useResolvedPath } from "react-router-dom"




export default function Navbar() {

    return (
    <nav className="nav">
        
       <Link to="/" ><img src="JPC-logo-offwhite.png" alt=""></img> </Link>
        <ul>
            <Link to="/" className="home-tab"><span className="highlighted">01.</span>&nbsp;Home</Link>
            <CustomLink to="/projects"><span className="highlighted">02.</span>&nbsp;Projects</CustomLink>
            <CustomLink to="/about"><span className="highlighted">03.</span>&nbsp;About</CustomLink>
            {/* <CustomLink to="/resume"><span className="highlighted">0.</span>&nbsp;Resume</CustomLink> */}
        </ul>  
    </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }