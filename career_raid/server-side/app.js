const express = require('express');
const app = express();
const port = process.env.PORT || 8082;
const mongoose = require ('mongoose');
const cors = require('cors');
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const JWT_COVER = "niuabub893b8bf9biuba99)(nuhuu[][byvtxezewayuj8549b9AF";
app.use(cors({origin: true, credentials:true}));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello world!'));

const conn_str = "mongodb+srv://raider:unlimited@raidedcluster.mpfmd1z.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('MongoDB Connection Succeeded...');
}).catch(err => {
    console.log(`Error in DB Connection ${err}`);
});

require("./userDetails");
const User = mongoose.model("UserInfo")
app.post("/register", async(req,res)=>{
    const{email,password} = req.body;
    const encryptedPass = await bcrypt.hash(password, 10);
    try{
        const oldUser = await User.findOne({email});

        if(oldUser) {
          return res.send({error: "User Exists"});
        }
        await User.create({
            email,
            password:encryptedPass,
        });
        res.send({status:"ok"});
    } catch (error) {
        res.send({status:"error"});
    }

});


app.post("/login-user", async(req, res) => {
    const{email, password} = req.body;

    const user = await User.findOne({email});
    if(!user) {
        return  res.send({error: "User Not Found"});
      }
    if(await bcrypt.compare(password,user.password)){
        const token = jwt.sign({email:user.email}, JWT_COVER);

        if(res.status(201)){
            return res.json({status: "ok", data: token});
        }else{
            res.status(401).send({ status: "error", error: "Invalid Password" });
        }
    }
    
    res.json({status: "error", error: "Invalid Password"});
});

app.post("userData", async(req,res) => {
    const {token} = req.body;
    try{
        const user = jwt.verify(token, JWT_COVER);
        const useremail = user.email;
        User.findOne({ email: useremail}).then((data) =>{
            res.send({status:"ok", data: data});
        })
        .catch((error) => {
            res.send({status: "error", data: error});
        })
    } catch (error) {

    }
});

require("./jobDetails");
const Job = mongoose.model("JobInfo")
app.post('/newJob', async (req, res) => {
    const { title, role, image, status } = req.body;

    // Create a new job document
    const job = new Job({
        title,
        role,
        image,
        status
    });

    try {
        // Save the job to the database
        await Job.create({
            title,
            role,
            image,
            status
        });
        res.status(201).send({ status: 'ok', message: 'Job added successfully' });
    } catch (error) {
        res.status(500).send({ status: 'error', error: 'An error occurred while adding the job' });
    }
});

app.delete('/jobDelete/:id', async (req, res) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id);
        if (!job) {
            return res.status(404).send({ status: 'error', error: 'Job not found' });
        }
        res.send({ status: 'ok', message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).send({ status: 'error', error: 'An error occurred while deleting the job' });
    }
});
