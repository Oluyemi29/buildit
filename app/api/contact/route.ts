"use server";
import ConnectDB from "@/config/connect.database";
import Contact from "@/models/contact.models";
import { NextResponse } from "next/server";

const handler = async (req: Request) => {
  try {
    await ConnectDB();
    const { email, firstname, lastname, message, phone } = await req.json();
    if (!email || !firstname || !lastname || !message || !phone) {
      return NextResponse.json({
        success: false,
        message: "All field are required",
      });
    }
    const response = await Contact.create({
      email,
      firstname,
      lastname,
      message,
      phone,
    });
    if (response) {
      return NextResponse.json({
        success: true,
        message: "Data submitted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Error when submitting your data",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "An error occured",
    });
  }
};

export { handler as GET, handler as POST };
