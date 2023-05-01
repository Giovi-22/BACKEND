
export const clientErrorHandler = (err,req,res,next)=>{
        if(err){
            res.status(400).json({status:'error',message:err});
            return console.log("El error es: ",err);
        }
}