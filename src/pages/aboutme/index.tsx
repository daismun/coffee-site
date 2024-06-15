import NavBar from "../../components/navbar";
import "./index.css";
const imgclass = "img shadow-1-strong rounded mb-4";
const colclass = "text-center col-lg-6 col-md-12 mb-4 mb-lg-0 col";

function AboutMe() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className={colclass}>
            <img src="/me.jpg" alt="me" className={imgclass} />
          </div>
          <div className={colclass}>
            <h1>This is me</h1>
            <p>
              I'm just a guy trying to make a dollar out of 50 Cents. The girlie
              next to me is my future wife. I'm a student, a lovesome man, a
              hard worker, and a child. In my 20's, unstoppable and hardcore.
              Just wait untill I'm 30, going light speed towards success.
            </p>
            <hr />
            <h1>Interests</h1>
            <ul>
              <li>
                Hip-Hop Music, artists like Biggie Smalls, Pete Rock, Method Man
                (a huge list)
              </li>
              <li>Coffee, of course. It's key to survival.</li>
              <li>
                Linux. I just love to fall into config hell. Scripting 4 life.
              </li>
              <li>
                Computers and Electronics. Programming and a tiny bit of EE
              </li>
              <li>
                I'm trying to learn UI/UX design. (I know, I could do better)
              </li>
              <li>Cats. I love those fluffy fluffers. No dogs allowed.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
