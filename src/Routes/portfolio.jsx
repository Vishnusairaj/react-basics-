import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./portfilio.css";
import { CookieDemo } from "../cookie/cookie-demo";

export function Portfolio(){
    return(
        <div className="container-fluid">
           <BrowserRouter>
                <header style={{height:'150px'}} className="d-flex justify-content-around p-3 bg-dark text-white">
                    <div className="profile-pic">
                        <img className="profile-pic" src="vishnu.jpg" width="100" height="100" />
                        <h4>Vishnusairaj</h4>
                    </div>
                    <div>
                        <span className="h1">React Developer</span>
                    </div>
                    <div className="fs-5 d-flex justify-content-between">
                        <span className="mx-2"> <Link className="btn btn-warning" to="about"> About Me </Link> </span>
                        <span className="mx-2"> <Link className="btn btn-danger" to="projects"> My Projects </Link> </span>
                        <span className="mx-2"> <Link className="btn btn-light" to="resume" > My Resume</Link> </span>
                        <span className="mx-2"> <Link className="btn btn-light" to="login" > <span className="bi bi-person-fill"></span> </Link> </span>
                    </div>
                </header>
                <section className="bg-secondary text-white p-3" style={{height:'100vh'}}>
                    <Routes>
                        <Route path="/" element={<div><h2>UI / UX Developer</h2><p>HTML | CSS | JavaScript | React</p></div>} />
                        <Route path="about" element={<div><h2>About Me</h2><i>i am a React developer</i><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, assumenda mollitia. Asperiores magni enim incidunt deserunt alias ipsam dignissimos harum ex aperiam sed ratione quos vel rem, recusandae consectetur labore?</div>} />
                        <Route path="projects" element={<div><h2>My Projects</h2><ul><li>To DO App</li><li>Shopping App</li><li>Video Library</li></ul></div>} />
                        <Route path="resume" element={<div><h2>Download My Resume</h2> <a className="text-white" download href="resume.pdf"> Download </a> </div>} />
                        <Route path="login" element={<CookieDemo />} />
                        <Route path="*" element={<div><h1>OOPs !</h1> Unable to find your requested content</div>} />
                    </Routes>
                </section>
           </BrowserRouter>
        </div>
    )
}
