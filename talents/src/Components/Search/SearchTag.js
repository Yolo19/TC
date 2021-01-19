import { Container, Search,Divider,Header,Label,Segment} from "semantic-ui-react";

export default function SearchTag() {
    return(
        <Segment basic style={{width: '30vw',margin:'0 auto'}} textAlign='center'>
            <Header as='h4'>Popular Key Words</Header>
            <Segment basic style={{margin:'0', padding:'0'}}>
                <Label horizontal>Python</Label>
                <Label horizontal >MySQL</Label>
                <Label horizontal>Python</Label>
                <Label horizontal>MySQL</Label>
                <Label horizontal>MySQL</Label>     
            </Segment>
            <Segment basic style={{margin:'0'}}>
                <Label horizontal>Python</Label>
                <Label horizontal>MySQL</Label>
                <Label horizontal>Python</Label>
                <Label horizontal>MySQL</Label>
                <Label horizontal>Python</Label>
            </Segment>
        </Segment>
    )

}