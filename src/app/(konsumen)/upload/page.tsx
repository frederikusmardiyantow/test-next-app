import Link from "next/link";
import React from "react";

function UploadDokumen() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Link
        href="/"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Kembali
      </Link>
      <h1 className="text-2xl font-bold">Halaman Upload Dokumen</h1>
      <form action="" className="mt-5">
        <div>
          <label htmlFor="ktp">Upload KTP</label>
          <input type="file" name="ktp" id="ktp" />
        </div>
        <div>
          <label htmlFor="spk">Upload SPK</label>
          <input type="file" name="spk" id="spk" />
        </div>
        <div>
          <label htmlFor="bukti">Upload Bukti Bayar</label>
          <input type="file" name="bukti" id="bukti" />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UploadDokumen;
