const enviar = async () => {
    let config = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            titulo: "como hacer marihuana con panela",
            fecha: "2022-03-20",
            autor: "pirlo420"
        })

} 
let res = await (await fetch('http://localhost:3000/libros',config)).json();

    console.log(res)
}

enviar()