import { Card, Icon, Button } from "semantic-ui-react";

export default function TalentFilter(){
    return(
        <Card.Group>
        <Card>
            <Card.Content>
                <Card.Header>filter <Icon name='filter' color='blue' style={{float: 'right'}}/></Card.Header>
            </Card.Content>
            <Card.Content>
                
            </Card.Content>
            <Card.Content textAlign='center'>
                <Button color='blue'>Submit</Button>
            </Card.Content>
        </Card>

        <Card>
        <Card.Content>
            <Card.Description textAlign='center' style={{marginBottom:'3vh'}}>Still want find more talents Regist your vacancy!</Card.Description>
            <Card.Description textAlign='center'><Button color='blue'>Go</Button></Card.Description>
        </Card.Content>
        </Card>
        </Card.Group>
    )
}