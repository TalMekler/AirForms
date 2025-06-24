import type { TForm } from "../../types/TForm";
import FormCard from "./FormCard";

type FormCardBackgroundImageprops = {
  form: TForm;
};

const FormCardBackgroundImage = ({ form }: FormCardBackgroundImageprops) => {
  return <FormCard form={form}></FormCard>;
};

export default FormCardBackgroundImage;
