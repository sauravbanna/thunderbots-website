import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Image from "next/image"
import styled from 'styled-components'
import {useRef} from 'react'
import useScrollOffset from '../hooks/useScrollOffset'

export interface ISubTeam {
    name: string,
    image: string,
    about: string
}

export interface ISubTeamProps extends ISubTeam  {
    align: boolean
}

const SubTeam = ({name, image, about, align} : ISubTeam) => {
    const subTeamRef = useRef();
    const offset = useScrollOffset(subTeamRef);

    const StyledDiv = styled.div`
        position: relative;
        max-width: 85vw;
        box-sizing: border-box;
        margin-bottom: 6vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        ${props => align ?
        `right: ${(100 - props.offset) * 0.2}vw;` :
        `left: ${(100 - props.offset) * 0.2}vw;`
        }
        ${props => `opacity: ${props.offset + 10}%;`}
    `



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

    const renderText = (align : boolean) => {
        return (
            <div id="subteam_text">
                <Typography variant="h4" align={align ? "right" : "left"}>
                    {name}
                </Typography>
                &nbsp;
                <Typography variant="h5" align={align ? "right" : "left"}>
                    {about}
                </Typography>
                &nbsp;
                <div>
                    {offset}
                </div>
            </div>
        );
    }

    return (
        <StyledDiv id="subteam_element" ref={subTeamRef} offset={offset}>
            {align ? renderText(align) : renderImage()}
            {align ? renderImage() : renderText(align)}
        </StyledDiv>
    );
}

export default SubTeam