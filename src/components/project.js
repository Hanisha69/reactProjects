import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // import the icons you need
const Project = ()=>{

    const [projects, setprojects] = useState([
        {
          slNo: 1,
          img: "/images/_post_1.jpg",
          git: 'link',
          desc: "This is an awesome project and hope hope you will love it. This is an awesome project and hope hope you will love it...",
        },
        {
          slNo: 2,
          img: "/images/_post_1.jpg",
          git: 'link',
          desc: "This is an awesome project and hope hope you will love it. This is an awesome project and hope hope you will love it...",
        },
        {
          slNo: 3,
          img: "/images/_post_1.jpg",
          git: 'link',
          desc: "This is an awesome project and hope hope you will love it. This is an awesome project and hope hope you will love it...",
        }
      ]);

      const [arrStyle, setarrStyle]= useState("arr_container center");
      const [leftContainerStyle, setleftContainerStyle]= useState("left_container off center");

      const arr = () =>{
        setarrStyle("arr_container center active_arr");
        setleftContainerStyle("left_container active center")
      }
      const cancel = () =>{
        setarrStyle("arr_container center ");
        setleftContainerStyle("left_container off center")
      }

      return(
        <div className="center" style={{ backgroundColor: "#212428", flexDirection:"column" }}>

            <h2 className="text-center" style={{ fontSize: "3.5rem", fontFamily: "Marcellus SC", fontWeight: "600", lineHeight: 1.2, color: "#c4cfde" }}>
              Our Projects
            </h2>
            <div className="main center">
                {projects.map((projects)=>{
                    return(
                        <div className="box center">
                                <img src={projects.img} alt="image" />
                                <div>
                                <h2>Project {projects.slNo}</h2> 
                                </div>
                                <div className={arrStyle} onClick={arr}>
                                <FontAwesomeIcon className='i' icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                                <div className={leftContainerStyle}>
                                    <h2>Project</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ex alias, ducimus possimus hic officia, pariatur consectetur esse eligendi veritatis praesentium cupiditate! Perspiciatis sequi cum repudiandae, laboriosam vitae at commodi.</p>
                                    <div className="icons">
                                    <a href={projects.git}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                                    <a href="/">Live</a>
                                    </div>
                                    <div className="cancel center" onClick={cancel}>
                                    <FontAwesomeIcon className="i" color='#b56d19' icon={faTimes} />
                                    </div>
                                </div>    
                        </div>
                    );
                })}    
            </div>
        </div>
      );
}

export default Project;
