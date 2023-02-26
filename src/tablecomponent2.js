import React from "react";
import Select from "react-select";
import { render } from "react-dom";

class App extends React.Component {
  state = {
    task_results: [
      {
        task_result_id: "tsr-528692bf4988430982f977082d338925",
        parent_id: "tsk-a60e910fd7e6440db2c886446de70802",
        task_id: "tsk-253de09351ca47ccbec987205a36f438",
        task_title: "ApiTest9",
        result_id: "Accepted",
        sort_order: 1
      },
      {
        task_result_id: "tsr-b4a9b862155a4c80aca4ee227ec795e3",
        parent_id: "tsk-a60e910fd7e6440db2c886446de70802",
        task_id: "tsk-442feb44bb4d4b698f5ba54ecda248c4",
        task_title: "ApiTest6",
        result_id: "Sambung Bayaran",
        sort_order: 2
      },
      {
        task_result_id: "tsr-d54c100c3e87480ca98977fda0e3be8a",
        parent_id: "tsk-a60e910fd7e6440db2c886446de70802",
        task_id: "tsk-a60e910fd7e6440db2c886446de70802",
        task_title: "ApiTest1",
        result_id: "Reject",
        sort_order: 3
      }
    ],

    itemListSubject: [
      {
        is_active: false,
        is_process: true,
        subject: "Apitest4",
        task_id: "tsk-253de09351ca47ccbec987205a36f438",
        title: "ApiTest9"
      },
      {
        is_active: false,
        is_process: false,
        subject: "Apitest4",
        task_id: "tsk-442feb44bb4d4b698f5ba54ecda248c4",
        title: "ApiTest6"
      }
    ],
    taskResulStatusObj: [
      {
        lov_id: null,
        lov_item_id: "itml-c1c3dc475b904efc8c21fe85e48da5b2",
        lovi_code: "1",
        lovi_display: "Accepted",
        lovi_remarks: null,
        lovi_value: "Accepted"
      },
      {
        lov_id: null,
        lov_item_id: "itml-035943c9e85245479bb8e6a9ca76ba3a",
        lovi_code: "10",
        lovi_display: "Penolong Jurutera",
        lovi_remarks: null,
        lovi_value: "Penolong Jurutera"
      }
    ],
    resultTitle: [],
    resultStatus: []
  };

  // componentdidUpdate(prevProps){
  //   if (prevProps.state.task_results!==)
  // }

  componentWillMount() {
    const { task_results } = this.state;
    const resultTitle = task_results.map(itm => ({
      label: itm.task_title,
      value: itm.task_id
    }));
    const resultStatus = task_results.map(itm => ({
      label: itm.result_id,
      value: itm.task_id
    }));
    const NewTaskResult = task_results.map(itm => ({
      sort_order: itm.sort_order,
      result_id: itm.result_id,
      task_id: itm.task_id
    }));
    console.log(resultTitle);
    this.setState({
      task_results: task_results,
      NewTaskResult: NewTaskResult,
      resultTitle: resultTitle,
      resultStatus: resultStatus
    });
  }

  handleChange = idx => selected => {
    // console.log(idx, selected);
    const { label } = selected;
    // console.log(label,value)
    const task_results = [...this.state.task_results];
    task_results[idx] = {
      task_result_id: "tsr-409973d1690b4da3b89845c658d29dfb",
      parent_id: "tsk-a60e910fd7e6440db2c886446de70802",
      task_id: "tsk-253de09351ca47ccbec987205a36f438",
      task_title: "ApiTest9",
      result_id: label,
      sort_order: idx
    };
    console.log(task_results[idx]);
    this.setState({
      task_results
    });
  };
  handleAddRow = () => {
    const item = {
      taskTitle: "",
      taskStatus: ""
    };
    this.setState({
      task_results: [...this.state.task_results, item]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      task_results: this.state.task_results.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = idx => () => {
    const task_results = [...this.state.task_results];
    task_results.splice(idx, 1);
    this.setState({ task_results });
  };
  render() {
    const {
      itemListSubject,
      taskResulStatusObj,
      resultTitle,
      resultStatus
    } = this.state;
    const optionResultTask = itemListSubject.map(itm => ({
      label: decodeURIComponent(itm.title),
      value: decodeURIComponent(itm.task_id)
    }));
    const optionTaskResultStatus = taskResulStatusObj.map(itm => ({
      label: decodeURIComponent(itm.lovi_value),
      value: decodeURIComponent(itm.lov_item_id)
    }));
    const { task_results } = this.state;
    console.log(task_results);
    return (
      <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> # </th>
                    <th className="text-center"> Title </th>
                    <th className="text-center"> Status </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.state.task_results.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx}</td>
                      <td>
                        <Select
                          name="taskTitle"
                          value={resultTitle[idx]}
                          onChange={this.handleChange(idx)}
                          options={optionResultTask}
                        />
                      </td>
                      <td>
                        <Select
                          name="taskStatus"
                          value={resultStatus[idx]}
                          onChange={this.handleChange(idx)}
                          options={optionTaskResultStatus}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Row
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
