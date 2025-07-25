'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

// In a real application, you would use a database and securely hash passwords.
// For this prototype, we'll use a simple in-memory object.
const users = {
  user: { password: 'udaykiran', role: 'USER' },
  sachin: { password: 'udaykiran', role: 'ADMIN' },
};

export async function login(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (!username || !password) {
    // In a real app, you'd handle this more gracefully with form errors.
    return;
  }

  const user = (users as any)[username];

  if (!user || user.password !== password) {
    // In a real app, you'd handle this more gracefully with form errors.
    redirect('/login?error=InvalidCredentials');
    return;
  }
  
  const sessionData = {
      username,
      role: user.role,
      isLoggedIn: true
  }

  // Set a session cookie.
  await cookies().set('session', JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });

  if (user.role === 'ADMIN') {
    redirect('/admin');
  } else {
    redirect('/');
  }
}

export async function logout() {
  // Set an empty session cookie that expires immediately to log out.
  cookies().set('session', '', { expires: new Date(0) });
  redirect('/login');
}