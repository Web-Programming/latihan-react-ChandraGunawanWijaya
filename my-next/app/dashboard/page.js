import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1>This Dashboard Page</h1>
            <hr />
            <ul>
                <li>
                    &bull; <Link href="dashboard/users/Chandra Gunawan">Chandra Gunawan</Link>
                </li>
                <li>
                    &bull; <Link href="dashboard/users/Chindri Guniwin">Chindri Guniwin</Link>
                </li>
            </ul>
        </div>
    );
}
