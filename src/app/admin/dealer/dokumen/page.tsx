import Link from "next/link";
import React from "react";

function DokumenPO() {
  return (
    <div>
      <Link
        href="/admin/dealer"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Kembali
      </Link>
      <h1>Dokumen PO dapat dilihat di halaman ini</h1>
    </div>
  );
}

export default DokumenPO;
