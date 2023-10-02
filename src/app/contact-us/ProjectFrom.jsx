"use client";
import {
    Button,
    Input,
    Option,
    Select,
    Textarea
} from "@material-tailwind/react";

const ProjectFrom = ({}) => {
  return (
    <>
      <form className="flex flex-col gap-5 font-xl max-w-md">
        <Input variant="standard" size="lg" label="Name *" color="orange" className="text-2xl font-bold"/>
        <Input variant="standard" size="lg" label="Phone *"  color="orange" />
        <Input variant="standard" size="lg" label="Email *"  color="orange" />
        <Select size="lg" variant="standard" label="Project Budget"  color="orange" >
          <Option>10,000 - 20,000</Option>
          <Option>20,000 - 30,000</Option>
          <Option>30,000 - 40,000</Option>
          <Option>40,000 - 50,000</Option>
          <Option>50,000+</Option>
        </Select>
        <Textarea variant="standard" size="lg" label="Project description *" color="orange" />
        <Button size="lg" className="bg-primary text-xl" color="orange">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ProjectFrom;
