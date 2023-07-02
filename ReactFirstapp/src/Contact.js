import "./Demo.css"

function Contact(data) {
  return (
    <div> 
        <div class="card"  style={{width: "18rem"}}>
    <img src={data.image} width="100px" height = "300px" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h3 class="card-title">{data.name}</h3>
      <p class="card-text">{data.message}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div></div>
  )
}

export default Contact