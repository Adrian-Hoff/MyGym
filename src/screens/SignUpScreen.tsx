//react-navigation
import { useNavigation } from "@react-navigation/native";

//react-hook-form
import { Controller, useForm } from "react-hook-form";

//yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//native-base
import {
  VStack,
  Image,
  Text,
  Center,
  Heading,
  ScrollView,
  Flex,
} from "native-base";

//assets
import BackgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";

//components
import { InputComponent } from "@components/InputComponent";
import { ButtonComponent } from "@components/ButtonComponent";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("This email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

export function SignUpScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp({ name, email, password }: FormDataProps) {
    console.log(`

    Name: ${name} 
    Email: ${email} 
    Password: ${password}

    `);
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="SignInScreen/ people trainning"
          resizeMode="contain"
          position={"absolute"}
        />
        <Center my={24}>
          <LogoSvg />
          <Text color={"gray.100"} fontSize={"sm"}>
            Train your mind and your body
          </Text>
        </Center>

        <Center>
          <Heading fontFamily="heading" color="gray.100" fontSize="xl" mb={6}>
            Create your account
          </Heading>
        </Center>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="Name"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.name?.message}
            />
          )}
        ></Controller>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        ></Controller>

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <InputComponent
              placeholder="Password"
              secureTextEntry
              onChangeText={onChange}
              value={value}
              returnKeyType="send"
              onSubmitEditing={handleSubmit(handleSignUp)}
              errorMessage={errors.password?.message}
            />
          )}
        ></Controller>

        <ButtonComponent
          title="Create Account"
          onPress={handleSubmit(handleSignUp)}
        />

        <ButtonComponent
          mt={24}
          title="Back To Login"
          variant={"outline"}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
