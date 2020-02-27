class Board extends React.Component {
    rednerSquare(i) {
        return <Square value={i} />;
    }
}

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}
