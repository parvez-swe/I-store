"use client";
import { useState } from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";

export default function UploadImageModal({
  setUploader,
  setImageSrc,
  imageSrc,
  name,
  email,
}) {
  const [uploadData, setUploadData] = useState();

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "my-uploads");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/[Your Cloudinary Cloud Name]/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);

    setUploader(false);
  }

  return (
    <div className="bg-slate-200 pt-6 relative max-w-[300px] self-center">
      <MdClose
        onClick={() => setUploader(false)}
        className="text-red-600 absolute text-xl right-1 top-1 cursor-pointer"
      />
      <main className="flex flex-col items-center">
        <div className="self-center mb-5 ">
          <div className=" flex flex-col self-center h-40 w-40 rounded-[100%] overflow-hidden  relative">
            <Image
              className="w-full z-10  "
              width={150}
              height={100}
              src={imageSrc}
              alt="Profile Image"
            />
          </div>
          <h1 className="text-center text-lg">{name}</h1>
          <p className="text-center text-slate-700">{email}</p>
        </div>

        <form
          className=""
          method="post"
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        >
          <p>
            <input type="file" name="file" />
          </p>
          {imageSrc && !uploadData && (
            <p className="flex flex-col">
              <button className="border-green-400 border-solid text-center my-5 bg-green-500 hover:text-white px-2 py-1 m-1 ">
                Upload Files
              </button>
            </p>
          )}

          {uploadData && (
            <code>
              <pre>{JSON.stringify(uploadData, null, 2)}</pre>
            </code>
          )}
        </form>
      </main>
    </div>
  );
}
