import { Category } from "./Category";
import { Client } from "./Client";

export interface Food {
    id: number;
    description: string;
    calories: number;
    category: Category;
    client: Client;
}