import React, { useState } from "react";

const UserInput = (props) => {
  const [savings, setSavings] = useState();
  const [contributions, setContributions] = useState();
  const [returns, setReturns] = useState();
  const [durations, setDurations] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    const initialUserInput = {
      "current-savings": savings,
      "yearly-contribution": contributions,
      "expected-return": returns,
      duration: durations,
    };
    props.onCalculate(initialUserInput);
  };

  const resetHandler = () => {
    setSavings(0);
    setContributions(0);
    setReturns(0);
    setDurations(0);
  };

  return (
    <form className="form" onSubmit={submitHandler} >
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={savings}
            placeholder="Enter Current Savings"
            onChange={(event) => setSavings(+event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            placeholder="Enter Yearly Savings"
            value={contributions}
            onChange={(event) => setContributions(+event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            placeholder="Enter Expected Interest"
            value={returns}
            onChange={(event) => setReturns(+event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            placeholder="Enter DUration Period"
            value={durations}
            onChange={(event) => setDurations(+event.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
