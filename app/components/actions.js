'use server';

import clientPromise from "../lib/mongodb";

export async function submitContactForm(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
        return { success: false, error: 'All fields are required' };
    }

    try {
        const client = await clientPromise;
        const db = client.db('reachout'); // change this
        const collection = db.collection('contacts');

        await collection.insertOne({
            name,
            email,
            message,
            createdAt: new Date()
        });

        return { success: true };
    } catch (error) {
        console.error('DB error:', error);
        return { success: false, error: 'Internal Server Error' };
    }
}
