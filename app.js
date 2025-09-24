import express from 'express'
const app = express();
const router = express.Router();

app.get('/home',(req,res)=>{
    res.send('Home page , for application-level middleware checking...')
})
app.get('/about',(req,res)=>{
    res.send('About page, for application-level middleware checking...')
})

app.get('/err',(req,res)=>{
    const err = new Error('error triggered')
})

app.use((err,req,res,next)=>{
    console.error('something went wrong',err.message)
    res.status(500).send('some error happened...')
})

app.listen(3000,()=>{
    console.log('mision completed')
})