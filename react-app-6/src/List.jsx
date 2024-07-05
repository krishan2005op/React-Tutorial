/* eslint-disable react/jsx-key */
//rendering list 
// there should be unique key in react items so we can easily track itmes inserted and removed

function List(prop){

    const Itemlist = prop.items
    const category = prop.category

    // fruits.sort((a,b)=>
    //     a.name.localeCompare(b.name)
    // ); // ALPHABETICAL

    // fruits.sort((a,b)=>
    //     b.name.localeCompare(a.name)
    // ); //reverse alphabetical

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    
    const listItems = Itemlist.map(item  => <li key={item.id}>{item.name} : &nbsp; <b>{item.calories}</b></li>);
    // const listItems1 = lowCalFruits.map(lowCalFruit  => <li key={lowCalFruit.id}>{lowCalFruit.name} : &nbsp; <b>{lowCalFruit.calories}</b></li>);

    return(<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
          </>)
}

export default List