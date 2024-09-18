// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { User } from '@/models/User';

export async function GET() {
  const myUser = new User("Flores", 1, 'Samuel', 8129373852, 64780);
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];

  // Retorna la respuesta en formato JSON
  return NextResponse.json(myUser);
}
