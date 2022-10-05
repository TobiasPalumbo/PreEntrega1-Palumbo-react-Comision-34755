export async function fetchData (route) {
    const response = await fetch(route)
    const data = await response.json()
    console.log(data)
    console.log("./json/stock.json")
    return data
} 
