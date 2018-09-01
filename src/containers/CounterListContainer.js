import React, { Component } from "react"
import { connect } from "react-redux";
import { increment, decrement, addCounter, removeCounter } from "../store/actions/index"
import CounterList from "../components/CounterList"

const mapStateToProps = state => {
  return { counters: state.counterList };
}


const mapDispatchToProps = (dispatch) => ({
    increment: (currentCount) => dispatch(increment(currentCount)),
    decrement: (currentCount) => dispatch(decrement(currentCount)),
    addCounter: () => dispatch(addCounter()),
    removeCounter: () => dispatch(removeCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);
