 import "./App.css"
interface HelloWorldProps{
  name?:string;
  age?:number;
}

const HelloWorld :React.FC<HelloWorldProps>=({})=>
{
  return(
    <main >
      <div className="card">
        <img src="/mtnsinm.jpg" alt="" className="sim" />
        <p>Learning</p>
        <p>Published 21 Dec 2013</p>
        <h1>HTML and CSS Foundations</h1>
        <p className="content">These language are the backbone of every website ,defining ccontent ,structure and presentation</p>
        <div>

        </div>
      </div>

    </main>
  )

}
export default HelloWorld