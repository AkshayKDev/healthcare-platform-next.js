"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import { UserFormValidation } from "@/lib/validation";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof UserFormValidation>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section>
          <h1 className="header">Hi There 👋</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
        <CustomFormField
          label="Full Name"
          placeholder="Your Name"
          iconAlt="logo"
          iconSrc="/assets/icons/user.svg"
          name="name"
          control={form.control}
          fieldType={FormFieldType.INPUT}
        />
        <CustomFormField
          label="Email"
          placeholder="Your Email"
          iconAlt="email"
          iconSrc="/assets/icons/email.svg"
          name="email"
          control={form.control}
          fieldType={FormFieldType.INPUT}
        />
        <CustomFormField
          label="Phone Number"
          placeholder="Your Number"
          name="phone"
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PatientForm;
