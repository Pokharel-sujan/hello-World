hey my name is sujan. I am an code eater and I am just updating something here to refresh what I have learned so far.

just using to learn it
function HelloWorld(props){
  return <h1>Value : {props.numberArray[props.index]} </h1>
}

ReactDOM.render(
  <HelloWorld index = '0' numberArray= {[1,2,3,4,5]}/>,   //returns  Value :1
  
    document.getElementById('root')
 )
  
