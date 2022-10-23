import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Image from "next/image"

export interface ISubTeam {
    name: string,
    image: string,
    about: string
}

export interface ISubTeamProps extends ISubTeam  {
    align: boolean
}

const SubTeam = ({name, image, about, align} : ISubTeam) => {
    const renderImage = () => {
        return (
            <div id="subteam_picture">
                <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        );
    }

    const renderText = () => {
        return (
            <div id="subteam_text">
                <Typography variant="h4">
                    {name}
                </Typography>
                &nbsp;
                <Typography variant="h5">
                    {about}
                </Typography>
            </div>
        );
    }

    return (
        <div id="subteam_element">
            {align ? renderText() : renderImage()}
            {align ? renderImage() : renderText()}
        </div>
    );
}

export default SubTeam