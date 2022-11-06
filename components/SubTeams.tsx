import Section from "./Section"
import SubTeam, {ISubTeam} from "./SubTeam"



const SubTeams = () => {
    const SUBTEAMS : Array<ISubTeam> = [
        {
            name: "Mechanical Sub-Team",
            image: "/placeholder.png",
            link: "mechanical",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at mi vitae libero lobortis rutrum. Quisque dictum faucibus justo eu lobortis. Sed non ante viverra, porta urna ac, molestie ipsum. Aenean eu nisl cursus lorem pharetra sollicitudin. Proin sed mi vestibulum",
        },
        {
            name: "Software Sub-Team",
            image: "/placeholder.png",
            link: "software",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at mi vitae libero lobortis rutrum. Quisque dictum faucibus justo eu lobortis. Sed non ante viverra, porta urna ac, molestie ipsum. Aenean eu nisl cursus lorem pharetra sollicitudin. Proin sed mi vestibulum",
        },
        {
            name: "Electrical Sub-Team",
            image: "/placeholder.png",
            link: "electrical",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at mi vitae libero lobortis rutrum. Quisque dictum faucibus justo eu lobortis. Sed non ante viverra, porta urna ac, molestie ipsum. Aenean eu nisl cursus lorem pharetra sollicitudin. Proin sed mi vestibulum",
        },
        {
            name: "Admin Sub-Team",
            image: "/placeholder.png",
            link: "admin",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at mi vitae libero lobortis rutrum. Quisque dictum faucibus justo eu lobortis. Sed non ante viverra, porta urna ac, molestie ipsum. Aenean eu nisl cursus lorem pharetra sollicitudin. Proin sed mi vestibulum",
        },
    ]


    return (
        <Section name="Meet the SubTeams!">
            <div id="subteam_svg_container">
                {SUBTEAMS.map((ele : ISubTeam, i : number) => {
                    return (
                        <SubTeam
                            name={ele.name}
                            image={ele.image}
                            about={ele.about}
                            align={i % 2 == 1}
                            link={ele.link}
                        />
                    );
                })}
            </div>
        </Section>

    );
}

export default SubTeams