
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

  // Set a session cookie
  cookies().set('session', JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });

  if (user.role === 'ADMIN') {
    redirect('/admin');
  } else {
    redirect('/');
  }
}

export async function logout() {
  cookies().set('session', '', { expires: new Date(0) });
  redirect('/login');
}
