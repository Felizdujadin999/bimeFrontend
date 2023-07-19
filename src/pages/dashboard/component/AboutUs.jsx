import React from "react";
import "../styles/AboutUs.css";
import { useNavigate } from "react-router-dom";

function AboutUs() {
    const navigate = useNavigate();

    const goBack = () => {
      navigate("/dashboard")
    }

    const bgcolor = localStorage.getItem('color')

  return (
    <div className="abtMain-container" style={{background:bgcolor}}>
      <div className="abtupper">
        <div className="abtabout">About Bime.</div>
        <button className="abtbutton" onClick={goBack}>Go Back</button>
      </div>

      <div className="abtdetails">
        Welcome to Bime, the all-in-one productivity extension designed to
        revolutionize the way you manage your time, boost your focus, and
        enhance your skills. With its diverse set of functionalities, Bime
        empowers you to take control of your digital habits, track your time
        efficiently, and achieve your personal and professional goals.
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        Let's dive into the features that make Bime a must-have tool for
        maximizing your productivity.
      </div>

      <section className="abtsection">
        <div className="abtfeatures">
          <div className="abtcards">
            <div className="abttext-card">
              <h2>TIME TRACKING</h2>
              <p>
                Bime's time tracking feature allows you to monitor and analyze
                how you spend your time online. With detailed insights and
                reports, you can identify patterns, understand your productivity
                levels, and make informed decisions about how to optimize your
                time for maximum efficiency.
              </p>
            </div>

            <div className="abttext-card">
              <h2>SITE BLOCKING</h2>
              <p>
                Distractions can hinder your progress and consume valuable time.
                Bime's site blocking functionality enables you to create
                customized blocklists, restricting access to specific websites
                or categories during designated time periods. By eliminating
                distractions, you can maintain focus and stay on track with your
                tasks and projects.
              </p>
            </div>

            <div className="abttext-card">
              <h2>CHART READINGS</h2>
              <p>
                Bime understands that data visualization is crucial for informed
                decision-making. With its built-in capability to read and
                analyze charts, Bime simplifies the process of understanding
                complex data representations. Bime extracts key insights from
                the users progress, presenting them in a concise and easily
                digestible format.
              </p>
            </div>

            <div className="abttext-card">
              <h2>LEARN SKILLS</h2>
              <p>
                Continual skill development is essential for personal and
                professional growth. Bime's skill learning feature provides
                curated resources, courses, and educational materials tailored
                to your interests and goals. Whether you want to learn a new
                programming language, improve your communication skills, or
                explore a new hobby, Bime offers a wide range of learning
                materials to help you expand your knowledge and expertise.
              </p>
            </div>

            <div className="abtother">
              <h2>How to Get Started with Bime:</h2>
              <p>1. Visit our website and create your account.</p>
              <p>2. Download the Bime extension.</p>
              <p>3. Install the extension on your preferred web browser.</p>
              <p>4. Launch the Bime interface. </p>
              <p>
                5. Customize your settings, including time tracking preferences,
                site blocking rules, and learning preferences.
              </p>
              <p>
                6. Start maximizing your productivity with Bime's intuitive and
                powerful features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
