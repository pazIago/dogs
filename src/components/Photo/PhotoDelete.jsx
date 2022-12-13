import React from "react";
import { PHOTO_DELETE } from "../../api/api-data";
import useFetch from "../../hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Essa ação não pode ser revertida.");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <div>
      {loading ? (
        <button className={buttonStyle} disabled>Deletando...</button>
      ) : (
        <button className={buttonStyle} onClick={handleClick}>
          Deletar
        </button>
      )}
    </div>
  );
};

const buttonHoverStyle = `hover:border-slate-800 hover:bg-white hover:outline-none hover:ring-4 hover:ring-slate-100`;
const buttonFocusStyle = buttonHoverStyle.replace("hover", "focus");
const buttonBaseStyle = `cursor-pointer rounded-lg border-[1px] border-solid border-transparent bg-slate-200 py-1 px-3 font-primary text-sm transition`;
const buttonStyle = `${buttonBaseStyle} ${buttonHoverStyle} ${buttonFocusStyle}`;

export default PhotoDelete;
