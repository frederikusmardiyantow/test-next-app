"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Selamat Datang User</h1>
      <p>Silakan Pilih menu: </p>
      <div className="grid gap-2">
        <button
          onClick={() => router.push("/upload")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload Dokumen Pembelian Kendaraan
        </button>
        <button
          onClick={() => router.push("/ttd")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          TTD Dokumen
        </button>
      </div>
      <small className="mt-10 flex flex-col justify-center gap-2 items-center">
        <Link href="/admin/marketing" className="text-blue-500 underline">
          masuk sebagai marketing
        </Link>
        <Link
          href="/admin/atasan-marketing"
          className="text-blue-500 underline"
        >
          masuk sebagai atasan marketing
        </Link>
        <Link
          href="/admin/dealer"
          className="text-blue-500 underline"
        >
          masuk sebagai dealer
        </Link>
      </small>
    </main>
  );
}
