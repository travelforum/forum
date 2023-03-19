import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  chakra,
  VStack,
  Image,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FiFile, FiTrash } from "react-icons/fi";
import FileUpload from "./FileUpload";

function ImagePreview(props) {
  return (
    <Image
      src={URL.createObjectURL(props.file)}
      alt="preview image"
      maxW={"100%"}
      maxH={"100px"}
    />
  );
}

export default function NewPostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  function getUser() {
    const user = localStorage.getItem("user");
    if (user) return JSON.parse(user);

    const newUser = {
      name: "Test User",
      email: "test@example.com",
      photo: "https://api.dicebear.com/5.x/fun-emoji/svg?seed=TestUser",
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    return newUser;
  }

  function createNewPost({ title, content, image }) {
    const baseURL = "http://localhost:4000";
    const url = "/api/post";
    const user = getUser();
    const data = { title, content, image, user };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(baseURL + url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // reload page
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }
  const onSubmit = handleSubmit((data) => {
    console.log("On Submit: ", data);
    createNewPost(data);
  });

  const validateFile = (value) => {
    if (!value) return true;
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024);
      const MAX_FILE_SIZE = 1;
      if (fsMb > MAX_FILE_SIZE) {
        return "Max file size 1mb";
      }
    }
    return true;
  };

  const file = !!watch("file_") && watch("file_")[0];

  return (
    <chakra.form onSubmit={onSubmit}>
      <VStack spacing={4} align="flex-start">
        <FormControl isInvalid={!!errors.file_} isRequired>
          <FormLabel>{"Imagem"}</FormLabel>

          {!file ? (
            <FileUpload
              accept={"image/*"}
              register={register("file_", { validate: validateFile })}
            >
              <Button colorScheme="teal" leftIcon={<Icon as={FiFile} />}>
                Carregar
              </Button>
            </FileUpload>
          ) : (
            <Button
              colorScheme="teal"
              leftIcon={<Icon as={FiTrash} />}
              onClick={() => {
                reset({ file_: null });
              }}
            >
              Remover
            </Button>
          )}

          <FormErrorMessage>
            {errors.file_ && errors?.file_.message}
          </FormErrorMessage>
        </FormControl>

        {!!file && (
          <ImagePreview
            src={URL.createObjectURL(file)}
            alt="preview"
            file={file}
          />
        )}

        <FormControl isInvalid={!!errors.title} isRequired>
          <FormLabel>{"Título"}</FormLabel>
          <chakra.input
            w="100%"
            color="#000"
            type="text"
            placeholder="Título"
            {...register("title", { required: "Title is required" })}
          />
          <FormErrorMessage>
            {errors.title && errors?.title.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.content} isRequired>
          <FormLabel>{"Conteúdo"}</FormLabel>
          <chakra.textarea
            w="100%"
            color="#000"
            type="text"
            placeholder="Conteúdo"
            {...register("content", {
              required: "Conteúdo não pode estar vazio",
            })}
          />
          <FormErrorMessage>
            {errors.content && errors?.content.message}
          </FormErrorMessage>
        </FormControl>

        <Button colorScheme="teal" type={"submit"} alignSelf="flex-end">
          Submit
        </Button>
      </VStack>
    </chakra.form>
  );
}
