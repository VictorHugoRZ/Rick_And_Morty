
const About = () => {
    return (
        <div>
            <h1>Autor de la página</h1>
            <section className="profile">
                <h2>Victor Hugo Ramirez Zamora</h2>
                <img 
                className="photo"
                src="https://scontent.fmex10-4.fna.fbcdn.net/v/t39.30808-6/314026752_5701360889953536_3709957919997076477_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH_zi970pnezfBeJmbLhTU9jf2XidUkfxSN_ZeJ1SR_FFHlVePLK5QBoYcPuVlLRL9OumU1E9RtAUMHdsU2RoJo&_nc_ohc=S_YqdR5wV3QAX_QbMAy&_nc_ht=scontent.fmex10-4.fna&oh=00_AfCQeWLi2ZmRT-hH53AW5K2MUFvcISm5d3EsFIgyiUsUzw&oe=6448F603" 
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