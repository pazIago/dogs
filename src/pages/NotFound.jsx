import React from "react";
import Title from "../components/Geral/Title";

const NotFound = () => {
  return (
    <section className="mx-auto min-h-screen w-4/5 max-w-[800px]">
      <Title text="Erro 404" />
      <p className="mt-8">Página não encontrada</p>
    </section>
  );
};

export default NotFound;
