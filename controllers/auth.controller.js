import {getUser, getUserByToken, getUserEmailExists, postUser} from "../models/auth.model.js";
import {generateToken} from "../services/token.service.js";

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;

        let data = await getUser(username, password);
        if (!data) {
            throw new Error('Credenciales incorrectas');
        }
        res.status(200).json({
            token: generateToken(data),
            success: true,
            msg: 'Logueado correctamente'
        });

    } catch (error) {
        console.log(error);
        res.status(401).json({
            token: '',
            success: false,
            msg: error.message
        });
    }

}

export const createUser = async (req, res) => {
    console.log('Create a new user');
    let dataUserCreate = req.body;
    let data = await postUser(dataUserCreate);
    res.status(data.status).json(data.data);
}

export const getEmailExists = async (req, res) => {
    console.log('Get exists email user');
    let emailUser = req.body;
    let data = await getUserEmailExists(emailUser);
    res.status(data.status).json(data.data);
}

export const getUserSession = async (req, res) => {
    console.log('Get user on session');
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        console.log('No authorization header');
        return res.status(401).json({ message: 'Authorization required' });
    }

    const token = authHeader.replace('Bearer ', '');

    if (!token) {
        console.log('No token found');
        return res.status(401).json({ message: 'Authorization required' });
    }

    try {
        let data = await getUserByToken(token);
        res.status(data.status).json(data.data);
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Error processing request' });
    }
};