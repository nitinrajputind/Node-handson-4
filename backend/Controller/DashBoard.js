const DashBoard =(req,res)=>{
    return res.send([
        {
            randomArticle : " This is random article"
        }
    ])
}

const profile =(req,res)=>{
    return res.send({
        name : "Nitin Rajput",
        email : "nitinrajput@gmail.com",
        profile : "Rajput"
    })
}


module.exports = {DashBoard, profile};