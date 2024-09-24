window.fetch("data.json")
.then((data) =>data.json())
.then((res) =>{
    console.log(res);
    console.log(res[0]);
    console.log(res[0].name);
    console.log(res[0].id);

res.map((x) =>{
    console.log(x);
    let demo=document.getElementById("demo")
    console.log(demo);
    let tr= `
    <tr>
        <td>${x.name}</td>
        <td>${x.id}</td>
        <td><img src=${x.image} /></td>

    </tr>
    `
    demo.innerHTML+=tr
})
})
.catch(() =>console.log("error occurance"))