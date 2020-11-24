import React from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { Link } from "react-router-dom";
import { Button, Table, Icon } from "semantic-ui-react";
import { Title } from "./title";

const ViewCandidatesPage = ({ tests }) => (
  <div>
    <Title title={"View candidates"} />
    <Link to="/home">
      <Button size="small">Back</Button>
    </Link>

    <Table color="red">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Test</Table.HeaderCell>
          <Table.HeaderCell>Test Score</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tests.map(
          (test) =>
            test.candidates &&
            test.candidates.map((candidate) => (
              <Table.Row>
                <Table.Cell>
                  {candidate.firstname} {candidate.lastname}
                </Table.Cell>
                <Table.Cell>{test.name}</Table.Cell>
                {candidate.score >=
                Number(test.testInfo.ownerState.passmark) ? (
                  <Table.Cell positive>
                    <Icon name="checkmark" />
                    {candidate.score}/{test.testInfo.testState.length}
                  </Table.Cell>
                ) : (
                  <Table.Cell negative>
                    <Icon name="close" />
                    {candidate.score}/{test.testInfo.testState.length}
                  </Table.Cell>
                )}
                <Table.Cell>{candidate.name}</Table.Cell>
              </Table.Row>
            ))
        )}
      </Table.Body>
    </Table>
  </div>
);

function mapStateToProps({ tests }) {
  return { tests };
}

export const ConnectedViewCandidatesPage = connect(mapStateToProps)(
  ViewCandidatesPage
);
