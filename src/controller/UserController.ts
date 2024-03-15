import { Request, Response } from "express";
import { knex } from '../services/knexfile';
import { User } from '../types/User';
import { v4 as uuidv4 } from 'uuid';

export const registerUser = async (req: Request, res: Response) => {
    const {
        name,
        email,
        telefone,
    } = req.body
    
    try {
        const id = uuidv4();
        let query = knex<User>('users');

        const existingUser = await query
        .where('email', email)
        .first();

        if (existingUser) {
            return res.status(400).json({ message: "O email já está cadastrado." });
        }

        const user = await knex<User>('users').insert({
            id,
            name,
            email,
            telefone,
        }).returning('*')

        if(user){
            return res.status(201).json(user)
        }

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Erro no servidor!" })
    }
}

export const getUsers = async (req: Request, res: Response) => {
    const { 
        name, 
        email, 
        telefone 
    } = req.query;

    try {
        let query = knex<User>('users');

        if (name) {
            query = query.where('name', 'ilike', `%${name}%`);
        }
        if (email) {
            query = query.where('email', 'ilike', `%${email}%`);
        }
        if (telefone) {
            query = query.where('telefone', 'ilike', `%${telefone}%`);
        }

        const users = await query.select('*');

        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro no servidor!" });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    try {
        const user = await knex<User>('users')
            .where('id', id)
            .first();

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro no servidor!" });
    }
}