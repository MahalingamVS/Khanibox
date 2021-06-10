
import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './HomeGrid.css';
import PostTitle from './PostTitle';

export class HomeGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowSelection: "single",
            columnDefs: [
                {
                    headerName: "",
                    field: "",
                    checkboxSelection: true,
                    headerCheckboxSelection: function (params) {
                        return params.columnApi.getRowGroupColumns().length === 0;
                    }
                },
                { headerName: "Id", field: "id" },
                { headerName: "Name", field: "name" },
                { headerName: "Content", field: "body" },
            ],
            rowData: [],
            rowStyle: { background: '#61dafb' },
            headerCheckboxSelection: true,
            paginationPageSize: 15,
            paginationNumberFormatter: function (params) {
                return "[" + params.value.toLocaleString() + "]";
            },
            defaultColDef: {
                // editable: true,
                enableRowGroup: true,
                enablePivot: true,
                enableValue: true,
                sortable: true,
                resizable: true,
                filter: true
            },
            index:true,
            i:0
        };
    }

    onGridReady = params => {
        this.gridApi = params.api;
    };
    onCellClicked = () => {
        for (var i = 0; i < this.gridApi.getSelectedRows().length; i++) {
            this.setState({
                index:false,
                i: i
            })
        }
    };
    onPageSizeChanged(newPageSize) {
        var value = document.getElementById("page-size").value;
        this.gridApi.paginationSetPageSize(Number(value));
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(res => res.json())
            .then(result => {

                let tempData = [];
                result.forEach((element) => {
                    tempData.push({ "id": element.id, "name": "User " +element.id, "body": element.title })
                });
                this.setState({
                    rowData: tempData
                });

            });
    }

    // set background colour on even rows again, this looks bad, should be using CSS classes
    getRowStyle = params => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: 'aliceblue' };
        }
    };


    render() {
        return (
            <div style={{ width: "100%", height: "100%" }}>
                { this.state.index === true &&
                    <div
                        className="ag-theme-balham"
                        style={{
                            height: '550px',
                            width: '850px'
                        }}
                    >
                        <AgGridReact
                            enableSorting={true}
                            enableFilter={true}
                            columnDefs={this.state.columnDefs}
                            defaultColDef={this.state.defaultColDef}
                            rowData={this.state.rowData}
                            rowSelection="single"
                            enableRangeSelection={true}
                            pagination={true}
                            paginationPageSize={this.state.paginationPageSize}
                            paginationNumberFormatter={this.state.paginationNumberFormatter}
                            onGridReady={this.onGridReady}
                            onCellClicked={this.onCellClicked}
                            rowStyle={this.state.rowStyle}
                            getRowStyle={this.getRowStyle}
                        >
                        </AgGridReact>
                        <select onChange={this.onPageSizeChanged.bind(this)} id="page-size" >
                            <option value="15">15</option>
                            <option value="25" >25</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                }
                { this.state.index === false &&
                <PostTitle id= {this.gridApi.getSelectedRows()[this.state.i]}/>
                }
            </div>
        );

    }
}
export default HomeGrid
