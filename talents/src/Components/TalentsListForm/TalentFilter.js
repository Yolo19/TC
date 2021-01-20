import { Card, Icon, Button, Form, Dropdown } from "semantic-ui-react";

export default function TalentFilter(){
    return(
        <Card.Group>
        <Card className='border_shadow'>
            <Card.Content>
                <Card.Header>filter <Icon name='filter' color='blue' style={{float: 'right'}}/></Card.Header>
            </Card.Content>
            <Card.Content>
                <Form>
                <Form.Field>
                    <Dropdown placeholder="Location" fluid />
                </Form.Field>
                <Form.Field>
                    <Dropdown placeholder="Industry" fluid />
                </Form.Field>
                <Form.Field>
                    <Dropdown placeholder="Company Size" fluid />
                </Form.Field>
                <Form.Field>
                    <Dropdown placeholder="Work Type" fluid />
                </Form.Field>
                <Form.Field>
                    <Dropdown placeholder="Salary Range" fluid />
                </Form.Field>
                <Form.Field>
                    <Dropdown placeholder="Status" fluid />
                </Form.Field>
                <Form.Field>
                    <Dropdown placeholder="Experience Level" fluid />
                </Form.Field>
                <Form.Field>
                    <Dropdown placeholder="University" fluid />
                </Form.Field>
                </Form>
            </Card.Content>
            <Card.Content textAlign='center'>
                <Button color='blue'>Search</Button>
            </Card.Content>
        </Card>

        <Card className='border_shadow'>
        <Card.Content>
            <Card.Description textAlign='center' style={{marginBottom:'3vh'}}>Still want find more talents Regist your vacancy!</Card.Description>
            <Card.Description textAlign='center'><Button color='blue'>Go</Button></Card.Description>
        </Card.Content>
        </Card>
        </Card.Group>
    )
}