import { Card, Image, Label, Rating, Segment, Header, Grid, Icon, Divider, Checkbox, Button } from "semantic-ui-react";



export default function TalentItems(){
    return(
        <div>
        <Card horizontal fluid className='border_shadow'>
        <Card.Content>
        <Grid columns={3} stackable textAlign='center'>
            <Grid.Row verticalAlign='middle'>
                <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='tiny' circular />
                </Grid.Column>

                <Grid.Column width={10} textAlign='left'>
                    <Header as='h3'>Third Header <Label>Web Developer</Label></Header>
                    <Card.Meta> <Checkbox readOnly fitted radio label='Open to work' /> &nbsp;&nbsp;&nbsp; Christchurch, New Zealand</Card.Meta> 
                </Grid.Column>

                <Grid.Column width={3} verticalAlign='top'>
                    <Icon name='heart outline' size='large'/>
                    <Icon name='share square' size='large'/>
                    <Icon name='comments' size='large'/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Card.Content>
        
        <Card.Content>
            <Grid >
                <Grid.Row columns={2}>
                    <Grid.Column width={11} >
                        <p><Icon name='laptop'/>Data Anaylyst at Talent Cluster Recruitment Platform </p>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <p><Icon name='hourglass half'/>2018.02 - Present</p>
                    </Grid.Column>
                </Grid.Row>
            
                <Grid.Row columns={2}>
                    <Grid.Column width={11} >
                        <p><Icon name='graduation cap'/>Master of Information System at University of Canterbury </p>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <p><Icon name='hourglass half'/>2018.02 - Present</p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={1}>
                    <Grid.Column width={16} >
                    <p><Icon name='id card ouline'/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={1}>
                    <Grid.Column width={16} >
                    <Icon name='briefcase'/>
                    <Label horizontal>Python</Label>
                    <Label horizontal >MySQL</Label>
                    <Label horizontal>Python</Label>
                    <Label horizontal>MySQL</Label>
                    <Label horizontal>MySQL</Label>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='right'>
                    <Grid.Column width={16} >
                    <Button>Click Here</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Card.Content>
        </Card>

        <Card className='talent_title' horizontal fluid className='border_shadow'>
        <Card.Content>
        <Grid columns={3} stackable textAlign='center'>
            <Grid.Row verticalAlign='middle'>
                <Grid.Column width={3}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='tiny' circular />
                </Grid.Column>

                <Grid.Column width={10} textAlign='left'>
                    <Header as='h3'>Third Header <Label>Web Developer</Label></Header>
                    <Card.Meta> <Checkbox readOnly fitted radio label='Open to work' /> &nbsp;&nbsp;&nbsp; Christchurch, New Zealand</Card.Meta> 
                </Grid.Column>

                <Grid.Column width={3} verticalAlign='top'>
                    <Icon name='heart outline' size='large'/>
                    <Icon name='share square' size='large'/>
                    <Icon name='comments' size='large'/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Card.Content>
        
        <Card.Content>
            <Grid >
                <Grid.Row columns={2}>
                    <Grid.Column width={11} >
                        <p><Icon name='laptop'/>Data Anaylyst at Talent Cluster Recruitment Platform </p>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <p><Icon name='hourglass half'/>2018.02 - Present</p>
                    </Grid.Column>
                </Grid.Row>
            
                <Grid.Row columns={2}>
                    <Grid.Column width={11} >
                        <p><Icon name='graduation cap'/>Master of Information System at University of Canterbury </p>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <p><Icon name='hourglass half'/>2018.02 - Present</p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={1}>
                    <Grid.Column width={16} >
                    <p><Icon name='id card ouline'/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={1}>
                    <Grid.Column width={16} >
                    <Icon name='briefcase'/>
                    <Label horizontal>Python</Label>
                    <Label horizontal >MySQL</Label>
                    <Label horizontal>Python</Label>
                    <Label horizontal>MySQL</Label>
                    <Label horizontal>MySQL</Label>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row textAlign='right'>
                    <Grid.Column width={16} >
                    <Button>Click Here</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Card.Content>
        </Card>
        </div>


        
        

    )
}