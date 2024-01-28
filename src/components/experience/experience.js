function Experience() {
    return (<>
        <section className="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Web Development</h2>
                        <div className="article-container">
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>.NET</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>Angular</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>MongoDB</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>JavaScript</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>TypeScript</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                            <article>
                                <img
                                    src="/checkmark.png"
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <div>
                                    <h3>React</h3>
                                    <p>Experienced</p>
                                </div>
                            </article>
                        </div>
                    </div>
                  
                </div>
            </div>
            <img
                src="/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                onclick="location.href='./#projects'"
            />
        </section>
    </>);
}

export default Experience;