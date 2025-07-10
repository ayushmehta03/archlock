
export default async function handleSubmission(formData:FormData) {
    try{
    const mail=formData.get("email") as string
    const name=formData.get("name") as string
    const message=formData.get("message") as string
    if(!mail || !name || !message){
        throw new Error("Fields are missing")
    } 


 console.log(name)
 return {success:true}
}

catch(error){
        console.log(error)
    }
    

}