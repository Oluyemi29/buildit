"use client";
import { addToast, Button, Image, Input, Textarea } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const formSchema = z.object({
    firstname: z.string().min(1, { message: "First name is required" }),
    lastname: z.string().min(1, { message: "Last name is required" }),
    email: z.email(),
    phone: z.string().min(1, { message: "Phone Number is required" }),
    message: z.string().min(1, { message: "Message is required" }),
  });
  type formSChemaType = z.infer<typeof formSchema>;
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<formSChemaType>({
    resolver: zodResolver(formSchema),
  });

  const submit = (value: formSChemaType) => {
    setLoading(true);
    try {
      const { email, firstname, lastname, message, phone } = value;
      console.log(email, firstname, lastname, message, phone);
      addToast({
        color: "success",
        title: "Success",
        description: "Your details has been submitted successfully",
        timeout: 5000,
      });
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[radial-gradient(#cbd5e1_1.5px,transparent_1px)] bg-size-[25px_25px] w-full flex md:flex-row flex-col items-center gap-5 p-5">
      <div className="w-full flex flex-col justify-center items-center">
        <Image
          src={"/contact-us.png"}
          alt="Contact Us"
          className="md:w-2/3 w-full mx-auto"
        />
      </div>
      <div className="w-full bg-white rounded-lg">
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full p-3 md:p-10 flex flex-col gap-10"
        >
          <div className="flex flex-col gap-5">
            <p className="text-sm text-[#021645]">Contact Us</p>
            <h1 className="font-extrabold text-[#021645] text-2xl md:text-4xl">
              Tell us your idea
            </h1>
            <p className="text-[#021645]">
              Tell us a little bit about yourself to help us get to know you
              better
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-5 w-full justify-center items-center">
            <Input
              label={"First Name"}
              className="w-full"
              placeholder="First Name"
              type="text"
              {...register("firstname")}
              isInvalid={!!errors.firstname}
              errorMessage={errors.firstname?.message}
            />
            <Input
              label={"Last Name"}
              className="w-full"
              placeholder="Last Name"
              type="text"
              {...register("lastname")}
              isInvalid={!!errors.lastname}
              errorMessage={errors.lastname?.message}
            />
          </div>
          <div className="w-full">
            <Input
              label={"Email"}
              className="w-full"
              placeholder="Email"
              type="email"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
          </div>
          <div className="w-full">
            <Input
              label={"Phone Number"}
              className="w-full"
              placeholder="Phone Number"
              type="text"
              {...register("phone")}
              isInvalid={!!errors.phone}
              errorMessage={errors.phone?.message}
            />
          </div>
          <div className="w-full">
            <Textarea
              type="text"
              placeholder="Enter Your message here"
              className="w-full"
              {...register("message")}
              isInvalid={!!errors.message}
              errorMessage={errors.message?.message}
            />
          </div>
          <div className="w-full">
            {loading ? (
              <Button
                disabled
                isLoading
                type="button"
                className="text-[#CCCCCC] bg-[#021645]/60 h-16 w-1/2 md:w-1/3 cursor-not-allowed"
              >
                Submitting...
              </Button>
            ) : (
              <Button
                type="submit"
                className="text-[#CCCCCC] bg-[#021645] h-16 w-1/2 font-medium text-lg md:w-1/3"
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
