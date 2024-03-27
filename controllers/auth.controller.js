import {getUser} from "../models/auth.model.js";
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