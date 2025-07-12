import FileTable from "@/components/FileTable"

export default function Deatils(){
    
 return(
 <div className="p-6 space-y-6">
 <h2 className="dark:text-blue-600 text-blue-700 text-2xl  text-center font-bold">Uploaded Files </h2>

    <p className="text-gray-900 dark:text-gray-200 text-sm text-center">
        Here’s a list of all uploaded files and their status
    </p>

            <FileTable />


 </div>
    

    
 )
}