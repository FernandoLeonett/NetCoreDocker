import { useState } from 'react';
const Counter = () => {
    const displayName = Counter.name;
    const [currentCount, setCurrentCount] = useState(0);
    const incrementCounter = () => {

        setCurrentCount(prev => prev + 1)
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

            <p aria-live="polite">Current count: <strong>{currentCount}</strong></p>

            <button className="btn btn-primary" onClick={incrementCounter}>Increment</button>
      </div>
    );

}
export default Counter;
