import {LoaderCircle} from 'lucide-react';

export default function Loading(): JSX.Element {
  return <main className="flex min-h-screen flex-col items-center justify-center py-4">
      <LoaderCircle className="stroke-blue animate-spin" />
  </main>
}