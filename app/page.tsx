import { redirect } from 'next/navigation';
import Link from 'next/link';

export const revalidate = 1;
async function getData() {
  const user  = await fetch('https://api.publicapis.org/entries', {
    cache: 'no-store',
    next: {revalidate: 1}
  })
  if (user.status < 400) {
    return user.json();
  } else {
    redirect(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/home`)
  }
}


export default async function UserProfile({ params }: { params: { id: string }}) {
  const user = await getData();
  return (
    <div>
      <Link href={'/home'}>
        HOME
      </Link>
      <div >
        {JSON.stringify(user)}
      </div>
    </div>
  );
}
