import { Container,Grid,Image, Segment } from "semantic-ui-react";
import SearchBar from "./Search/SearchBar"
import TalentFilter from "./TalentsListForm/TalentFilter"
import TalentItems from "./TalentsListForm/TalentItems"
import PageNumberLink from "./TalentsListForm/PageNumberLink"
import "./common.css"


const containerStyle = {
    margin:'-4vh 10vw 0',
    width: '80vw', 
    borderRadius: '10px 10px 0 0'
}
export default function MainBody() {
    return (
        <Segment style={containerStyle}>
        <Grid className='border_shadow'  divided='vertically'>
            <Grid.Row centered>
                <SearchBar />
            </Grid.Row>

            <Grid.Row columns={2} centered>
                <Grid.Column width={5}>
                    <TalentFilter/>
                </Grid.Column>
                <Grid.Column width={10}>
                    <TalentItems/>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
                <PageNumberLink/>
            </Grid.Row>
        </Grid>
        </Segment>
        
    )
}