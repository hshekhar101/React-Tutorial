import { useState } from "react";
import "./App.css";
import MyForm from "./Components/form";
import Barline from "./Components/barline";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mouseEntering = function (element) {
    element.style.transition = "0.3s";
    element.style.transform = "scale(1.1)";
    element.style.transformStyle = "preserve-3d"; // Prevent transformation from affecting child elements
  };

  const mouseLeaving = function (element) {
    element.style.transition = "0.3s";
    element.style.transform = "scale(1)";
    element.style.transformStyle = "flat";
  };

  function openProfile(profile) {
    switch (profile) {
      case "instagram":
        window.open("https://www.instagram.com/h_shekhar_302", "_blank");
        break;
      case "github":
        window.open("https://github.com/hshekhar101", "_blank");
        break;
      case "twitter":
        window.open("https://twitter.com/h_shekhar2105", "_blank");
        break;
      default:
        break;
    }
  }

  function sendEmail() {
    window.open("mailto:himanshushekhar44578@gmail.com");
  }

  return (
    <>
      <div id="root">
        <div id="home">
          <div className="container1">
            <div className="navbar">
              <div className="navbar_logo">
                <img src="Images/logo_transparent.png" alt="logo" />
              </div>
              <ul className="navbar_links">
                <li>
                  <a className="active" href="#home" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}>
                    HOME
                  </a>
                </li>
                <li>
                  <a className="active" href="#about" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}>
                    ABOUT
                  </a>
                </li>
                <li>
                  <a className="active" href="#work" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}>
                    WORK
                  </a>
                </li>
                <li>
                  <a className="active" href="#skills" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}>
                    SKILLS
                  </a>
                </li>
                <li>
                  <a className="active" href="#testimonials" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}>
                    TESTIMONIALS
                  </a>
                </li>
                <li>
                  <a className="active" href="#contact" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}>
                    CONTACTS
                  </a>
                </li>
              </ul>
              <div
                className="barline"
                onMouseEnter={(e) => {
                  mouseEntering(e.target);
                }}
                onMouseLeave={(e) => {
                  mouseLeaving(e.target);
                }}
                onClick={() => {
                  <Barline />;
                }}
              >
                ☰
              </div>
            </div>

            <div className="page_container1_1">
              <div className="image-container">
                <img src="/assets/shekhar1.png " alt="my-image" />
              </div>
              <div className="description">
                <h1>Hello</h1>
                <p>I am Himanshu Shekhar. I am a Web Developer🧑‍💻.</p>
                <p className="item2">
                  Currently, I am pursuing my BTech in Computer Science from
                  Indian Institute of Technology Guwahati
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container2">
          <div className="container2_1">
            <h1>
              <span>Passionate web developer</span> dedicated to crafting{" "}
              <span>innovative solutions</span>
            </h1>
          </div>
          <div className="container2_2">
            <div
              className="container2_2_1 about-section"
              onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              style={{ cursor: "pointer" }}
            >
              <img src="/assets/webD.jpg" alt="webD" />
              <h3>Web Devlopment</h3>
              <p>
                I'm a passionate web developer with a strong foundation in HTML,
                CSS, JavaScript, jQuery, Express with Nodejs, API, and MongoDB.
                My expertise lies in front-end development, where I excel at
                turning design concepts into interactive and responsive web
                experiences.
              </p>
            </div>
            <div
              className="container2_2_2 about-section"
              onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              style={{ cursor: "pointer" }}
            >
              <img
                src="assets
/typing.jpg"
                alt="typing"
              />
              <h3>Competitive Typing</h3>
              <p style={{transform: "scale:(1)"}}> 
                I am good in touch-typing. I have also participated in an event
                organised by Discord family where all the platform users were
                competing having two team. My touch-typing average speed is
                70wpm and my maximum speed goes to 92wpm. I am on the way to
                break several records.
              </p>
            </div>
            <div
              className="container2_2_3 about-section"
              onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              style={{ cursor: "pointer" }}
            >
              <img
                src="assets
/coding.jpg"
                alt="coding"
              />
              <h3>Competitive Coding</h3>
              <p>
                I have decent knowledge of coding. I give contest on
                geeksforgeeks, LeetCode, Interviewbit, HackerRank, Codeforces. I
                also have decent knowledge of DSA which includes topic like
                linkedlist, generic tree, Binary tree, BST, Tries, Graph, DP,
                OOPs, Sorting algorithm.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="work">
        <div className="container3">
          <div className="container3_1">
            <h1>Implementation Details</h1>
          </div>
          <div className="container3_2">
            <div
              className="item1 item"
             
              onClick={() => {
                window.open(
                  "https://github.com/Anurag-ravi/submission_portal",
                  "_blank"
                );
              }}
              onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              style={{ cursor: "pointer" }}
            >
              <h2>Submission Portal</h2>
              <p>
                Worked on a college project of creating a responsive submission
                portal. It consists feature of adding TA to any course,
                providing each student unique enrollment key to join the
                corresponding course. It also sends email to student if any
                assignment is uploaded on the portal. It gives a reminder
                notification of submission 24 hours prior to deadline.
              </p>
              <p>
                It consists of HTML, CSS, Javascript and Node.js language to
                complete the project.
              </p>
            </div>
            <div
              className="item2 item"
              onClick={() => {
                window.open(
                  "https://github.com/hshekhar101/Majuli-Island-Virtual-Tour-Project",
                  "_blank"
                );
              }}
              onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              style={{ cursor: "pointer" }}
            >
              <h2>Majuli Project</h2>
              <p>
                Group project of my Software Engineering course. It requires
                good knowledge of "Unity". It consists of major steps to
                complete the project. We have to make a virtual tour of majuli
                island wearing 3D headset. We were provided with sufficient 3D
                videos and Images.
                {/* <ul>
                  <li>SRS(Software Requirement Specification) building</li>
                  <li>Design</li>
                  <li>Prototyping to that design</li>
                  <li>Code Design</li>
                  <li>Code Implementation</li>
                  <li>Code Testing</li>
                  <li>Empirical Study</li>
                  <li>Deployment and Maintenance</li>
                </ul> */}
              </p>

              
            </div>
            <div
              className="item3 item"
              onClick={() => {
                window.open(
                  "https://github.com/Anurag-ravi/submission_portal",
                  "_blank"
                );
              }}
              onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              style={{ cursor: "pointer" }}
            >
              <h2>Anime Tracker</h2>
              <p>
                This project was based on Anime or Movie tracking website. It
                works on API call made from IMDB server to get the access of
                database which provide Imdb ratings correspondent to search that
                user make from website.
              </p>
              <p>
                It also consists of HTML, CSS and Javascript language and other
                than that it also uses API to get access of database.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="skills">
        <div className="container4">
          <h1>Skills and Experience</h1>
          <div className="container4_1">
            <img src="Images/html.png" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              alt="" className="item1" />
            <img src="Images/css.png" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              alt="" className="item2" />
            <img src="Images/cpp.png" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              alt="" className="item3" />
            <img src="Images/react.png" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              alt="" className="item4" />
            <img src="Images/js.png" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              alt="" className="item5" />
            <img src="Images/git.png" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              alt="" className="item8" />
            <img src="Images/nodejs.png" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              alt="" className="item6" />
            <img src="Images/python.png" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              alt="" className="item8" />
            <img src="Images/mongoDB.png" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              alt="" className="item8" />
            <img src="Images/django.png" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              alt="" className="item8" />
          </div>
          <div className="container4_2">
            <div className="item1 item" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              >
              <h2>Secondary Education</h2>
              <h3>2017</h3>
            </div>
            <div className="item2 item" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}>
              <h2>Senior Secondary Education</h2>
              <h3>2019</h3>
            </div>
            <div className="item3 item" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}>
              <h2>JEE MAINS & ADVANCED</h2>
              <h3>2020</h3>
            </div>

            <div className="item4 item" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}>
              <h2>Problem Solving on Infinity Learn online platform</h2>
              <h3>2021</h3>
            </div>
            <div className="item5 item" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}>
              <h2>BTech in CSE from IIT GUWAHATI</h2>
              <h3>2023</h3>
            </div>
            <div className="item6 item" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}>
              <h2>SDE intern @acadlog</h2>
              <h3>2023</h3>
            </div>
          </div>
        </div>
      </div>

      <div id="testimonials">
        <div className="container5">
          <div className="item1 item">
            <img src="assets/eleanourRoosevelt.jpeg" alt="noss" />
            <h3>
              "The future belongs to those who believe in the beauty of their
              dreams."
            </h3>
            <h4>Eleanor Roosevelt</h4>
          </div>
          <div className="item2 item">
            <img
              src="assets
/winstonChurchill.jpg"
              alt="business-woman"
            />
            <h3>
              "Success is not final, failure is not fatal: It is the courage to
              continue that counts."
            </h3>
            <h4>Winston Churchill</h4>
          </div>
          <div className="item3 item">
            <img src="assets/steveJobs.jpg" alt="man" />
            <h3>"The only way to do great work is to love what you do."</h3>
            <h4>Steve Jobs</h4>
          </div>
        </div>
      </div>

      <div className="container7" id="contact">
        <div className="container8">
          <h1>Subscribe Me</h1>
          <MyForm />
        </div>
        <div className="social">
          <div className="social1">
            <a
              className="item"
              onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              style={{ cursor: "pointer" }}
              onClick={() => openProfile("instagram")}
            >
              <img src="Images/instagram.png" alt="Instagram" />
            </a>
          </div>
          <div className="social1">
            <a className="item" 
            onMouseEnter={(e) => {
              mouseEntering(e.target);
            }}
            onMouseLeave={(e) => {
              mouseLeaving(e.target);
            }}
            style={{ cursor: "pointer" }}
            onClick={() => openProfile("github")}>
              <img src="Images/github.png" alt="GitHub" />
            </a>
          </div>
          <div className="social1" 
          onMouseEnter={(e) => {
            mouseEntering(e.target);
          }}
          onMouseLeave={(e) => {
            mouseLeaving(e.target);
          }}
          style={{ cursor: "pointer" }}
          onClick={() => openProfile("twitter")}>
            <a className="item">
              <img src="Images/twitter.png" alt="Twitter" />
            </a>
          </div>
          <div className="social1">
            <a className="item" onMouseEnter={(e) => {
                mouseEntering(e.target);
              }}
              onMouseLeave={(e) => {
                mouseLeaving(e.target);
              }}
              style={{ cursor: "pointer" }}
              onClick={() => sendEmail()}>
              <img src="Images/gmail.png" alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
