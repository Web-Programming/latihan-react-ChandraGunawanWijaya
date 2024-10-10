import Link from 'next/link';

export default function DashboardLayout({ children }) {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <aside style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '20px' }}>
                <h2>Sidebar</h2>
                <ul>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/dashboard/users">Users</Link></li>
                    <li><Link href="/dashboard/settings">Settings</Link></li>
                </ul>
            </aside>
            <main style={{ flex: 1, padding: '20px' }}>
                <header>
                    <h1>Dashboard</h1>
                </header>
                <hr />
                <div>
                    <h2>This Dashboard Page</h2>
                    <ul>
                        <li>&bull; <Link href="dashboard/users/Chandra Gunawan">Chandra Gunawan</Link></li>
                        <li>&bull; <Link href="dashboard/users/Chindri Guniwin">Chindri Guniwin</Link></li>
                    </ul>
                </div>
                {children}
            </main>
        </div>
    );
}
