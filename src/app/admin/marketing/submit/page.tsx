import Link from "next/link";
import React from "react";

function SubmitData() {
  return (
    <div>
      <Link
        href="/admin/marketing"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Kembali
      </Link>
      <h1>Submit Data Pengajuan Oleh Marketing</h1>
    </div>
  );
}

export default SubmitData;
