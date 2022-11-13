import Link from 'next/link';

export default function Login() {
    return (
        <div className='flex flex-col justify-center items-center space-y-3 mt-20'>
            <Link href='/' className='p-10 m-10 bg-gray-200'>
              BACK TO JSON
            </Link>
        </div>
    )
}