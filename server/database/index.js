const mongoose = require('mongoose')

    module.exports=()=>{
        const {DB_USERNAME,
            DB_PASSWORD,
            DB_NAME}=process.env
        const uri=`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.y31062k.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
        mongoose.connect(uri).catch(err=>{
            console.error(err)
        })

mongoose.connection.once('open',() => {
    console.log('mongoose conencted successfully')
})
}
