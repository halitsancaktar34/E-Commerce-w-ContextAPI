const Loading = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center" style={{ height: "100vh", width: "100%" }}>
      <div className="loading">
        <div className="loading-top">    
          <span className="l">L</span>
          <span className="o">o</span>
          <span className="a">a</span>
          <span className="d">d</span>
          <span className="i">i</span>
          <span className="n">n</span>
          <span className="g">g</span>
          <span className="d1">.</span>
          <span className="d2">.</span>
          </div>


        <div className="load">
          <div className="progress"></div>
          <div className="progress"></div>
          <div className="progress"></div>
          <div className="progress"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading