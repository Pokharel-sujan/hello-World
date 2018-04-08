function ShoppingTitle(props){
  return(
    <div>
   <h1> {props.title} </h1>
    <h2> no of items: {props.numItems} </h2>
      </div>
  )
}

function ShoppingList(props){
  return(
    <div>
      <h3> {props.header}</h3>
      <ol>
        <li>{props.items[0]}</li>
        <li>{props.items[1]}</li>
        <li>{props.items[2]}</li>
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
