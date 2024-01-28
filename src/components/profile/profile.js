function Profile() {

    const openMyCV = () => {
        window.open('/RubelMiaResume.pdf');
    }

    return (<>
        <section className="profile">
            <div className="section__pic-container">
                <img src="./rubel.png" alt="John Doe profile picture" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Rubel</h1>
                <p className="section__text__p2">Web Developer</p>
                <div className="btn-container">
                    <button
                        className="btn btn-color-2"
                        onClick={openMyCV}
                    >
                        Download CV
                    </button>
                    <button className="btn btn-color-1">
                        Contact Info
                    </button>
                </div>
                <div className="socials-container">
                    <a href="https://www.linkedin.com/in/robinaust/" target="_blank">
                        <img
                            src="/linkedin.png"
                            alt="My LinkedIn profile"
                            className="icon"
                        />
                    </a>
                    <a href="https://github.com/md-rubel-mia" target="_blank">
                        <img
                            src="/github.png"
                            alt="My Github profile"
                            className="icon"
                        />
                    </a>

                </div>
            </div>
        </section>
    </>);
}

export default Profile;