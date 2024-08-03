import { Input } from "./ui/input";
import React from "react";
import { FormField, FormLabel, FormControl, FormMessage } from "./ui/form";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authformSchema } from "@/lib/utils";

const formSchema = authformSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  type: string;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({
  control,
  type,
  name,
  label,
  placeholder,
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
