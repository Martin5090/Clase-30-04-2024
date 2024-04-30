const obtenerDigimonPromesas = () => {
    return new Promise((resolve, reject)=>{
        fetch('https://digimon-api.vercel.app/api/digimon')
            .then((digimines)=>{
                if(!digimones.ok){
                    throw new Error("Error");
                }
                return digimones.json();
            })
            .then ((data)=>{
                resolve(data);

            })
            .catch((error)=>{
                reject(`El error es: ${error}`);

            })
    })
}

obtenerDigimonPromesas()
    .then((digimones)=>{
        digimones.map(()=>{
            console.log(digimon);
        })
    }).catch((error)=> {
        console.log(`El error es: ${error}`);
    })