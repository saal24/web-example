import {Component} from "react";
import {Square} from "./Square";
import "./Board.css"

export class Board extends Component {
    render() {
        return (
            <div className="board">
                <Square value={1}/>
                <Square value={2}/>
                <Square value={3}/>
                <Square value={4}/>
                <Square value={5}/>
                <Square value={6}/>
                <Square value={7}/>
                <Square value={8}/>
                <Square value={9}/>
            </div>
        );
    }
}
