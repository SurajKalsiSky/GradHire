import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Divider, Grid, Segment, List, Menu } from "semantic-ui-react";
import { Title } from "./title";

const HomePage = ({ tests }) => (
  <div>
    <Title title={'"Hiring made simple"'} />

    <Segment color="red" inverted secondary>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <h1 class="center-text-vertical">Benefits of GradHire</h1>
        </Grid.Column>
        <Grid.Column>
          <List relaxed="very" size="big">
            <List.Item icon="check" content="Bespoke tests" />
            <List.Item icon="check" content="Easy to use" />
            <List.Item icon="check" content="Competitive price" />
          </List>
        </Grid.Column>
      </Grid>
      <Divider vertical></Divider>
    </Segment>

    <Grid textAlign="center" columns={3} relaxed padded stackable>
      <Grid.Row>
        <Grid.Column>
          <Menu color="red" inverted fluid vertical>
            <Menu.Item className="header">Basic</Menu.Item>
          </Menu>
          <Menu fluid vertical>
            <Menu.Item className="header">£499/year</Menu.Item>
            <Menu.Item>
              <List relaxed>
                <List.Item icon="check" content="50 Candidates" />
                <List.Item icon="check" content="Maths" />
                <List.Item icon="x" content="Multiple Choice" />
                <List.Item icon="x" content="Non-vebal" />
                <List.Item icon="x" content="Video" />
              </List>
            </Menu.Item>
            <Menu.Item>
              <Link to="/sign-up">
                <Button size="small">Sign up</Button>
              </Link>
            </Menu.Item>
          </Menu>
        </Grid.Column>

        <Grid.Column>
          <Menu color="red" inverted fluid vertical>
            <Menu.Item className="header">Standard</Menu.Item>
          </Menu>
          <Menu fluid vertical>
            <Menu.Item className="header">£999/year</Menu.Item>
            <Menu.Item>
              <List relaxed>
                <List.Item icon="check" content="50 Candidates" />
                <List.Item icon="check" content="Maths" />
                <List.Item icon="check" content="Multiple Choice" />
                <List.Item icon="x" content="Non-vebal" />
                <List.Item icon="x" content="Video" />
              </List>
            </Menu.Item>
            <Menu.Item>
              <Link to="/sign-up">
                <Button size="small">Sign up</Button>
              </Link>
            </Menu.Item>
          </Menu>
        </Grid.Column>

        <Grid.Column>
          <Menu color="red" inverted fluid vertical>
            <Menu.Item className="header">Advanced</Menu.Item>
          </Menu>
          <Menu fluid vertical>
            <Menu.Item className="header">£1499/year</Menu.Item>
            <Menu.Item>
              <List relaxed>
                <List.Item icon="check" content="50 Candidates" />
                <List.Item icon="check" content="Maths" />
                <List.Item icon="check" content="Multiple Choice" />
                <List.Item icon="check" content="Non-vebal" />
                <List.Item icon="check" content="Video" />
              </List>
            </Menu.Item>
            <Menu.Item>
              <Link to="/sign-up">
                <Button size="small">Sign up</Button>
              </Link>
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

function mapStateToProps(state) {
  return { tests: state.tests };
}

export const ConnectedHomePage = connect(mapStateToProps)(HomePage);
