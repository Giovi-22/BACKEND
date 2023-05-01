
export const serverErrorHandler = (err,req,res,next)=>{
    if(err){
        console.log("server error")
        if(err.statusCode >= 500){
        res.status(err.statusCode).json({status:'error',message:err.message});
        return console.log("El error es: ",err.message);
    }
}
}