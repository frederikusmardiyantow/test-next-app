import Link from "next/link";
import React from "react";

function ApprovalPengajuan() {
  return (
    <div>
      <Link
        href="/admin/atasan-marketing"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Kembali
      </Link>
      <h1>Halaman untuk Approval Pengajuan</h1>
    </div>
  );
}

export default ApprovalPengajuan;
