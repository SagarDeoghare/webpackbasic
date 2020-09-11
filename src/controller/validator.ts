import { body } from 'express-validator';
export const validate_create_item = [ body('item_name'), body('item_color')];