import signUpWithEmail from "@/services/Authentication/fireAuth";
import { NextResponse } from "next/server";

//Handling POST request
export async function POST(req: any, res: any) {
    //Get the Form Data
    const Formdata =  await req.formData();
    const Companyname = await Formdata.get('Companyname');
    const Email = await Formdata.get('Email');
    const Phone = await Formdata.get('Phone');
    const Password = await Formdata.get('Password')
    //Response 

     signUpWithEmail(Email, Password, Companyname, Phone,);
}

function successfullRegistration(){
    return NextResponse.redirect("https://workforce-workfrce.vercel.app")
}


