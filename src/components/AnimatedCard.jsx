const AnimatedCard = () => {
  return (
    <div className="wrapper">
    <div className="container">
        <input type="radio" name="slide" id="c1" defaultChecked />
        <label htmlFor="c1" className="card">
            <div className="row">
                <div className="icon">1</div>
                <div className="description">
                    <h4>Nukleus</h4>
                    <p>Nukleus has so much to offer - creative activities</p>
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card">
            <div className="row">
                <div className="icon">2</div>
                <div className="description">
                    <h4>Andy</h4>
                    <p>Gets better every day - stay tuned</p>
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card">
            <div className="row">
                <div className="icon">3</div>
                <div className="description">
                    <h4>Cypher-Exchange</h4>
                    <p>Help people all over the world</p>
                </div>
            </div>
        </label>
        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card">
            <div className="row">
                <div className="icon">4</div>
                <div className="description">
                    <h4>Apple Clone</h4>
                    <p>3D becomes more and more advanced</p>
                </div>
            </div>
        </label>
    </div>
</div>
  )
}
export default AnimatedCard