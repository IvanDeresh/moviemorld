import { useRouter } from "next/navigation"; // Use next/router instead of next/navigation
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react"; // Remove useEffect import
import axios from "axios";

const FormSignin = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await axios.post(
        "http://localhost:3003/users/addNewUser",
        {
          email: formData.get("email"),
          password: formData.get("password"),
        }
      );
      console.log(response.data);

      const res = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });

      if (res && !res.error) {
        router.push("/pages/profile");
      } else {
        alert("Incorrect data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      className="text-white flex flex-col gap-[30px] items-center justify-center w-full"
      onSubmit={handleSubmit}
    >
      <h1 className="text-[30px] underline-offset-[15px] underline decoration-dotted">
        Sign in
      </h1>
      <div className="flex flex-col w-full items-center  gap-[30px]">
        <input
          className="h-[50px] p-[20px] w-[350px] text-black rounded-xl focus:outline-none"
          type="email"
          placeholder="email"
          name="email"
        />
        <input
          className="h-[50px] p-[20px] w-[350px] text-black rounded-xl focus:outline-none"
          type="password"
          name="password"
          placeholder="password"
        />
      </div>
      <button
        className="bg-[#8D090D] w-[200px] h-[50px] rounded-xl "
        type="submit"
        onClick={() => setClick(!click)}
      >
        Sign in
      </button>
    </form>
  );
};

export default FormSignin;
