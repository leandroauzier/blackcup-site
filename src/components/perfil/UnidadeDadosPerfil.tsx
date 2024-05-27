import { Typography } from "@material-tailwind/react";

type UnidadeDadosPerfil = {
  label?: string,
  data?: string,
};

export default function UnidadeDadosPerfil({ label = "Label", data = "Dados" }: UnidadeDadosPerfil) {
  return (
    <>
      <div className="p-2">
        <Typography
          className="flex dark:text-yellow-500 pt-4"
          variant="paragraph"
          color="blue-gray"
          placeholder="Subtitulo"
        >
          {label === "CPF" ? label + " *" : label + ":"}
        </Typography>

        <div className="flex p-2 m-2 font-semibold dark:text-gray-700 dark:bg-gray-900 rounded-lg text-gray-700 bg-gray-200">
          <p>
            {data}
          </p>
        </div>
      </div >
    </>
  );
}