import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataPie: {
      labels: ["state_no_0", "state_no_1", "state_no_2", "state_no_3"],
      datasets: [
        {
          data: [300, 50, 100, 40],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
          ]
        }
      ]
    }
  }

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Colleges By State</h3>
        <Pie data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;