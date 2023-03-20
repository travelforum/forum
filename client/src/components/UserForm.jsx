import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  chakra,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useLocalStorage from "../hooks/useLocalStorage";

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [user, setUser] = useLocalStorage("user", null);

  const onSubmit = handleSubmit(({ name, email }) => {
    setUser({
      name,
      email,
      photo: `https://api.dicebear.com/5.x/fun-emoji/svg?seed=${email}`,
    });
    // go to homepage
    window.location.href = "/";
  });

  return (
    <chakra.form onSubmit={onSubmit}>
      <VStack spacing={4} align="flex-start">
        <FormControl isInvalid={!!errors.name} isRequired>
          <FormLabel>{"Nome"}</FormLabel>
          <chakra.input
            w="100%"
            color="#000"
            type="text"
            placeholder="Nome"
            {...register("name", { required: "Nome não pode estar vazio" })}
          />
          <FormErrorMessage>
            {errors.name && errors?.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email} isRequired>
          <FormLabel>{"Email"}</FormLabel>
          <chakra.input
            w="100%"
            color="#000"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email não pode estar vazio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors?.email.message}
          </FormErrorMessage>
        </FormControl>

        <Button colorScheme="black" type={"submit"} alignSelf="flex-end">
          Enviar
        </Button>
      </VStack>
    </chakra.form>
  );
}
