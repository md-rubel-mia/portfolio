function About() {
    return (<>
        <section className="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                {/* <div className="section__pic-container">
                    <img
                        src="/rubel.png"
                        alt="Profile picture"
                        className="about-pic"
                    />
                </div> */}
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img
                                src="/experience.png"
                                alt="Experience icon"
                                className="icon"
                            />
                            <h3>Experience</h3>
                            <p>4+ years <br />Web Development</p>
                        </div>
                        <div className="details-container">
                            <img
                                src="/education.png"
                                alt="Education icon"
                                className="icon"
                            />
                            <h3>Education</h3>
                            <p>B.Sc. Bachelors Degree<br />Ahsanullah University of Science and Technology</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            I have a strong background in competitive programming and full-stack engineering. During my undergraduate studies, I participated in ten national contests, including two ICPC Dhaka Regional contests, and have tackled over 2000 problems relating to algorithms, data structures, and dynamic programming, etc. In my current role, I have honed my skills in full-stack engineering, including front-end and back-end development, user interface design, database management, and API development. With my skills and experience, I am capable of contributing to the development of high-quality software solutions.
                        </p>
                    </div>
                </div>
            </div>
            <img
                src="/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                onclick="location.href='./#experience'"
            />
        </section>
    </>);
}

export default About;