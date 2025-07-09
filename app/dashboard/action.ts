"use server"
import cloudinary from "@/lib/cloudinary"


export default async function handleSubmission(formData:FormData){
    const filename=formData.get("filename") as string | null
    const email= formData.get("email") as string | null
    const file= formData.get("filedata") as File
    if(!filename || !email) {
        throw new Error("Misiing filed details")
    }
    if(!file || !file.size) throw new Error("No file uploaded")
    const arraybuffer=await file.arrayBuffer()
    const buffer=Buffer.from(arraybuffer)
    const uploadResult= await new Promise ((resolve,reject)=>{
         cloudinary.uploader.upload_stream({folder:"blog"},(error,result)=>{
    if(error) reject(error)
      else resolve(result)
  }) .end(buffer);
    })


}