import { uuidv4 } from "./helpers";

export class Account
{
    constructor(_id, _name, _color, _balance)
    {
        this.id = _id || uuidv4();
        this.name = _name || "";
        this.color = _color || "#DDD";
        this.balance = _balance || 0;
    }

    update(_transactions)
    {
        let catTmpDico = {};
        this.recap = {
            positiveTotal: 0,
            negativeTotal: 0,
            total: 0,
        };

        for (let transaction of _transactions)
        {
            catTmpDico[transaction.categoryId] = catTmpDicom[transaction.categoryId] || 0;
            catTmpDico[transaction.categoryId] += Math.abs(transaction.value);
            if (transaction.value > 0)
                this.recap.positiveTotal += transaction.value;
            else
                this.recap.negativeTotal += transaction.value;
        }
        this.categories = Object.keys(catTmpDico).map(key => {return {id: key, value: catTmpDico[key]}});
        this.recap.total = Math.abs(this.recap.positiveTotal) + Math.abs(this.recap.negativeTotal);
    }
}

export class Category
{
    constructor(_id, _name, _color)
    {
        this.id = _id;
        this.name = _name || "";
        this.color = _color || "#DDD";
    }
}

export class Transaction
{
    constructor(_description, _date, _value, _categoryId)
    {
        this.id = uuidv4();
        this.date = _date || new Date();
        this.description = _description || "";
        this.value = _value || 0;
        this.categoryId = _categoryId || null;
    }
}