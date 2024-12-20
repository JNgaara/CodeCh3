fetch('./FlatDango Db Data  (1).json')
.then(res => res.json())
.then(data => showInfo(data))

function showInfo(data){
    console.table(data.films)
}