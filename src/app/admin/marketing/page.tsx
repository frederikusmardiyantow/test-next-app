'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Selamat Datang Admin Marketing</h1>
      <p>Silakan Pilih menu: </p>
      <div>
        <button onClick={() => router.push('/admin/marketing/submit')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit Data Pengajuan</button>
      </div>
    </main>
  );
}
