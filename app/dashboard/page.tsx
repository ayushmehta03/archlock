import { currentUser } from "@clerk/nextjs/server";

export default async function Dashboard(){
const user= await currentUser();
function getTimeGreeting(){
    const now= new Date();
    const hour = now.getHours();
    if(hour>=0 && hour<12){
     return `Good Morning ... ${user?.firstName}`

    }
    else if(hour>=12 && hour<17){
     return `Good AfterNoon ... ${user?.firstName}`

    }
    else{
      return `Good Evening ... ${user?.firstName}`

    }
}
return(
    <main className="mt-4 text-black dark:text-gray-300 items-center ">
    <div className="flex flex-col text-center ">
            <h3 className="text-xl px-4">{getTimeGreeting()}</h3>
            
    </div>
    </main>




)    
}