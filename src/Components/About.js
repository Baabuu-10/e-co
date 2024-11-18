import AboutImage from "../assets/about.jpeg"

const About = () => {
  return (
    <div>
        <h1 className="text-center text-xl leading-10">Furns is a global destination for somethings. Wee sell cutting-ege <br /> furniture and offer a wide variety of fashison-related content</h1>

        <div className="flex items-center flex-col md:flex-row space-x-3">
            <div className="space-y-4 mt-5">
                <img src={AboutImage} alt=""/>
                <h1>OUR STORY</h1>
                <p className="text-gray-400 text-sm leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus id tortor et consequat. Curabitur nec orci congue, feugiat metus quis, dapibus mi. Nam placerat maximus dignissim. Duis vestibulum, quam vel tempus accumsan, mi eros venenatis libero, ut blandit ligula est vitae mi. Aliquam a quam metus. Maecenas dolor ex, malesuada nec pretium et, convallis nec dui. Nulla tempor nulla at neque molestie auctor</p>
            </div>

            <div className="space-y-4 mt-5">
                <img src={AboutImage} alt=""/>
                <h1>OUR MISSION</h1>
                <p className="text-gray-400 text-sm leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus id tortor et consequat. Curabitur nec orci congue, feugiat metus quis, dapibus mi. Nam placerat maximus dignissim. Duis vestibulum, quam vel tempus accumsan, mi eros venenatis libero, ut blandit ligula est vitae mi. Aliquam a quam metus. Maecenas dolor ex, malesuada nec pretium et, convallis nec dui. Nulla tempor nulla at neque molestie auctor</p>
            </div>
        </div>
    </div>
  )
}

export default About