const map = new Map()

map.set('IN',"india")
map.set('fr',"france")
map.set('uk',"united kingdom")

for (const [key,value] of map) {
    console.log(key, ":", value);
    
}

