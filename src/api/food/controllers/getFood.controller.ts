import { Request, Response } from 'express';

const food: string[] = ['apple', 'banana', 'chicken'];

const getFood = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ data: food, status: 200 })
    } catch (err) {
        return res.status(500).json({ message: "Internal error sorry", status: 500 })
    }
}

export default getFood;
