import {useState} from "react"

function App() {
 
  const [color , setColor] = useState("white")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor : color}}>
        <h1 className="text-lg font-semibold text-center pt-6">Click on the buttons below to change the background color</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
          <div className="flex flex-wrap justify-center gap-6 shadow-lg shadow-slate-600 bg-white px-3 py-2 rounded-full text-lg font-semibold border border-black">
            <button className="outline-none px-3 py-2 rounded-full border-2 border-red-600 hover:bg-red-600 shadow-md shadow-red-600"
             onClick={() => {setColor("red")}}
            >red</button>
            <button className="outline-none px-3 py-2 rounded-full border-2 border-yellow-600 hover:bg-yellow-300 shadow-md shadow-yellow-600" 
             onClick={() => {setColor("yellow")}}
            //  style={{backgroundColor : "yellow"}}
            >yellow</button>
            <button className="outline-none px-3 py-2 rounded-full border-2 border-green-600 hover:bg-green-600 shadow-md shadow-green-600"
             onClick={() => {setColor("green")}}
            >green</button>
            <button className="outline-none px-3 py-2 rounded-full border-2 border-blue-600 hover:bg-blue-600 shadow-md shadow-blue-600"
             onClick={() => {setColor("blue")}}
            >blue</button>
            <button className="outline-none px-3 py-2 rounded-full border-2 border-pink-600 hover:bg-pink-600 shadow-md shadow-pink-600"
             onClick={() => {setColor("pink")}}
            >pink</button>
            <button className="outline-none px-3 py-2 rounded-full border-2 border-orange-600 hover:bg-orange-600 shadow-md shadow-orange-600"
             onClick={() => {setColor("orange")}}
            >orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
