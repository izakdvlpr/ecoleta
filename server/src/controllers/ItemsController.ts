import { Request, Response } from 'express';
import knex from '../database/connection';

export default class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex('items').select('*');
    
    const serializedItems = items.map(({ id, title, image }) => {
      return {
        id,
        title,
        image_url: `http://localhost:333/uploads/${image}`
      };
    });
    
    return res.json(serializedItems);
  }
}