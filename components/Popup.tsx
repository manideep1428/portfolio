import { useRouter } from "next/navigation";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogTrigger } from "./ui/alert-dialog";
import { useEffect, useState } from "react";

export default function Popout({state}:{state:boolean}){
    const router  = useRouter();
    const [isOpen ,setIsOpen] = useState(false);
    const handleCancel = ()=>{
        setIsOpen(false)
    }
    
  useEffect(()=>{
    setTimeout(()=>{
      setIsOpen(true)
    }, 2000)
  },[])
    return(
    <div>
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild></AlertDialogTrigger>
        <AlertDialogContent className="dark:bg-slate-700 dark:text-white">
            This Website Is Upgrading with New UI changes(BETA)
           <AlertDialogDescription className="font-semibold text-xl dark:bg-slate-700 dark:text-white">Do You want to see?</AlertDialogDescription>
         <AlertDialogFooter>
            <AlertDialogAction className="dark:bg-slate-700 dark:text-white"  onClick={()=>router.push('/')}>Sure</AlertDialogAction>  
            <AlertDialogCancel onClick={handleCancel} className="dark:bg-slate-700 dark:text-white">Cancel</AlertDialogCancel>
         </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    </div>
    )
} 