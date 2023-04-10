import React from "react";

const About = () => {
    return (
        <div>
            <h1>Autor de la página</h1>
            <section className="profile">
                <h2>Victor Hugo Ramirez Zamora</h2>
                <img 
                className="photo"
                src="https://scontent.fmex27-1.fna.fbcdn.net/v/t39.30808-6/314026752_5701360889953536_3709957919997076477_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=aJeQapP77PwAX_wMslq&_nc_ht=scontent.fmex27-1.fna&oh=00_AfDQfAUJVgM2Dd3s4bFq7MWWHJhNoLQzVN1deKBQyyoZNA&oe=64392403" 
                alt="Victor"
                width={100}
                height={100}
                />
                <p>Actualmente estudio programación web en <b>Henry</b>, esta página es uno de mis trabajos.</p>
                <p>Soy profesor de <b>piano</b> y ejecutante de varios instrumentos musicales, me gusta aprender cosas nuevas 
                que me sean útiles para mi desempeño profesional, soy una persona a la que le gusta ayudar a los demás y 
                alguien que tiene un sentido de respeto muy profundo por la vida en general.</p>
            </section>
        </div>
    )
}

export default About;