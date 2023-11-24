function Counter({count, onClickMinus, OnClickPlus, errorMessage}) {

  return (
    <div className="App">
      Compteur : {count}
      <div>
        <button onClick={onClickMinus}>-</button>
        <button onClick={OnClickPlus}>+</button>
        {errorMessage ? <div className="App-error">{errorMessage}</div> : null}
      </div>
    </div>
  );
}

export default Counter;
