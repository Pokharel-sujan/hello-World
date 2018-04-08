hey my name is sujan. I am an code eater and I am just updating something here to refresh what I have learned so far.

just using to learn it
function HelloWorld(props){
  return <h1>Value : {props.numberArray[props.index]} </h1>
}

ReactDOM.render(
  <HelloWorld index = '0' numberArray= {[1,2,3,4,5]}/>,   //returns  Value :1
  
    document.getElementById('root')
 )
 
 
 
 
 
 // Another Code
  function ShoppingTitle(props){
        return (
            <div>
                <h1>{props.title}</h1>
                <h2>Total Number of Items: {props.numItems}</h2>
            </div>

        ) 
    }
    function ListItem(props){
        return <li>{props.item}</li>
    }

    function ShoppingList(props){
        return (
            <div>
                <h3>{props.header}</h3>
                <ol>
                    <ListItem item = {props.items[0]}/>
                    <ListItem item = {props.items[1]}/>
                    <ListItem item = {props.items[2]}/>
                </ol>
            </div>
        )
    }


    function ShoppingApp(props){

        return (
            <div>
                <ShoppingTitle title = "My Shopping List" numItems = "9"/>
                <ShoppingList header = "Food" items = {[ "Apple","Bread","Cheese"]}/>
                <ShoppingList header = "Clothes" items = {[ "Shirt","Pants","Hat"]}/>
                <ShoppingList header = "Supplies" items = {[ "Pen","Paper","Glue"]}/>
            </div>
        )
    }

    ReactDOM.render(
        <ShoppingApp/>,
        document.getElementById("root")
    )
