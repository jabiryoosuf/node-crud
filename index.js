import  express  from "express";

const app=express()

const user=[
    {
        id:1,
        name:"jabir",
        place:"pandikkad"
    },
    {
        id:2,
        name:"mishab",
        place:"chelari"
    }
]

// all view
app.get('/user', (req, res) => {
    res.send(user)
  });

// single view
  app.get('/user/:id', (req, res) => {
    const userid = parseInt(req.params.id)
    const singleuser = user.filter((u) => u.id === userid);
    console.log(singleuser);
    res.send(singleuser)
  });

// create 
  app.post('/user/new', express.json(), (req, res) => {
    const userdata = req.body
    console.log(userdata);
    user.push(userdata)
    res.send(userdata);
  });

  // update 
  app.put('/user/update/:id', express.json(), (req, res) => {
    const userid = parseInt(req.params.id)
    const userdata = req.body
    let singleuser = user.filter((u) => u.id === userid)

    user.pop(singleuser)

    user.push(userdata)

    res.send(userdata);
  });

    // delete 
    app.delete('/user/delete/:id', (req, res) => {
        const userid = parseInt(req.params.id)
        let singleuser = user.filter((u) => u.id === userid)
    
        user.pop(singleuser)
    
        res.send(singleuser);
      });
  

app.listen(4000, ()=>{
    console.log("port at listen ")
})     